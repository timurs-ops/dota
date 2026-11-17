let liveStats = {};
let metaLoaded = false;

function pct(v) { return v ? (v * 100).toFixed(1) + '%' : '—'; }

function getHeroStats(hero) {
    return liveStats[(hero.name || '').toLowerCase()] || null;
}

async function loadLiveStats(showStatus) {
    const status = document.getElementById('metaStatus');
    if (showStatus && status) status.textContent = 'Мета: загрузка...';

    try {
        const res = await fetch('data/meta.json');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        liveStats = {};
        data.forEach(h => {
            liveStats[(h.localized_name || '').toLowerCase()] = h;
        });
        metaLoaded = true;
        if (status) status.textContent = 'Мета: загружено ' + data.length + ' героев ✅';
    } catch (e) {
        metaLoaded = false;
        if (status) status.textContent = 'Мета: ошибка загрузки';
        console.error('Meta error:', e);
    }
}

function getMetaAnswer() {
    const list = Object.values(liveStats)
        .filter(h => h.pub_pick && h.pub_pick > 0.02 && h.pub_win)
        .sort((a, b) => b.pub_win - a.pub_win)
        .slice(0, 5);
    if (!list.length) return null;
    const rows = list.map((h, i) =>
        (i + 1) + '. <strong>' + h.localized_name + '</strong> — винрейт ' + pct(h.pub_win) + ', пикрейт ' + pct(h.pub_pick)
    ).join('<br>');
    return '📈 <strong>Актуальная мета патча:</strong><br>' + rows;
}

function getWinrateAnswer(question) {
    const hero = (typeof findHero === 'function') ? findHero(question) : null;
    if (!hero) return null;
    const s = getHeroStats(hero);
    if (!s) return '📊 Нет данных по <strong>' + hero.name + '</strong>.';
    return '📊 <strong>' + hero.name + ' (' + hero.ru + ')</strong>:<br>' +
        '• Паблик: винрейт <strong>' + pct(s.pub_win) + '</strong>, пикрейт ' + pct(s.pub_pick) + '<br>' +
        '• Просцена: винрейт <strong>' + pct(s.pro_win) + '</strong>, пикрейт ' + pct(s.pro_pick);
}

document.addEventListener('DOMContentLoaded', () => {
    loadLiveStats();
});
