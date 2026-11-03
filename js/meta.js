// ============================================
// ЗАГРУЗКА АКТУАЛЬНОЙ МЕТЫ ИЗ OpenDota API
// Без API-ключей, обновляется после патчей
// ============================================

let liveStats = {};
let metaLoaded = false;

// Глобальные функции для использования в ai.js и app.js
function pct(v) { return v ? (v * 100).toFixed(1) + '%' : '—'; }

function getHeroStats(hero) {
    return liveStats[(hero.name || '').toLowerCase()] || null;
}

function getMetaAnswer() {
    const list = Object.values(liveStats)
        .filter(h => h.pub_pick && h.pub_pick > 0.02 && h.pub_win)
        .sort((a, b) => b.pub_win - a.pub_win)
        .slice(0, 5);
    if (!list.length) return null;
    const rows = list.map((h, i) =>
        `${i + 1}. <strong>${h.localized_name}</strong> — винрейт ${pct(h.pub_win)}, пикрейт ${pct(h.pub_pick)}`
    ).join('<br>');
    return `📈 <strong>Актуальная мета патча (паблик-игры):</strong><br>${rows}<br><br>💡 Данные OpenDota — обновляются после каждого патча.`;
}

function getWinrateAnswer(question) {
    const hero = (typeof findHero === 'function') ? findHero(question) : null;
    if (!hero) return null;
    const s = getHeroStats(hero);
    if (!s) return `📊 Нет свежих данных по <strong>${hero.name}</strong>. Нажми «🔄 Обновить мету».`;
    return `📊 <strong>${hero.name} (${hero.ru})</strong> в текущем патче:<br>` +
        `• Паблик: винрейт <strong>${pct(s.pub_win)}</strong>, пикрейт ${pct(s.pub_pick)}<br>` +
        `• Просцена: винрейт <strong>${pct(s.pro_win)}</strong>, пикрейт ${pct(s.pro_pick)}<br>` +
        `• Турбо: винрейт ${pct(s.turbo_win)}<br><br>💡 Данные OpenDota.`;
}

// Загрузка
async function loadLiveStats(showStatus) {
    const status = document.getElementById('metaStatus');
    if (showStatus && status) status.textContent = 'Мета: загрузка...';
    try {
        const res = await fetch('https://api.opendota.com/api/heroStats');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        liveStats = {};
        data.forEach(h => {
            liveStats[(h.localized_name || '').toLowerCase()] = h;
        });
        metaLoaded = true;
        if (status) status.textContent = 'Мета: актуальные данные загружены ✅';
        return true;
    } catch (e) {
        metaLoaded = false;
        if (status) status.textContent = 'Мета: офлайн-режим (нет сетевых данных)';
        return false;
    }
}

// Автозагрузка при старте
document.addEventListener('DOMContentLoaded', () => {
    loadLiveStats();
});
