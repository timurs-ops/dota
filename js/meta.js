// ============================================
// АКТУАЛЬНАЯ МЕТА: OpenDota API + CORS-прокси + Fallback
// ============================================

let liveStats = {};
let heroItems = {};
let metaLoaded = false;

// Глобальные функции
function pct(v) { return v ? (v * 100).toFixed(1) + '%' : '—'; }

function getHeroStats(hero) {
    return liveStats[(hero.name || '').toLowerCase()] || null;
}

// CORS-прокси (бесплатный публичный)
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

// Загрузка данных
async function loadLiveStats(showStatus) {
    const status = document.getElementById('metaStatus');
    if (showStatus && status) status.textContent = 'Мета: загрузка...';

    try {
        // Пробуем прямой запрос
        let data = null;
        try {
            const res = await fetch('https://api.opendota.com/api/heroStats');
            if (res.ok) data = await res.json();
        } catch (e) {
            console.log('Прямой запрос не удался, пробуем прокси...');
        }

        // Если прямой не сработал — через CORS-прокси
        if (!data) {
            const proxyUrl = CORS_PROXY + encodeURIComponent('https://api.opendota.com/api/heroStats');
            const res = await fetch(proxyUrl);
            if (!res.ok) throw new Error('Proxy HTTP ' + res.status);
            data = await res.json();
        }

        liveStats = {};
        data.forEach(h => {
            liveStats[(h.localized_name || '').toLowerCase()] = h;
        });

        metaLoaded = true;
        if (status) status.textContent = `Мета: загружено ${data.length} героев ✅`;
        return true;
    } catch (e) {
        metaLoaded = false;
        console.error('Meta load error:', e);
        if (status) status.textContent = 'Мета: не удалось загрузить (проверь интернет)';
        return false;
    }
}

// Топ-5 героев по винрейту
function getMetaAnswer() {
    const list = Object.values(liveStats)
        .filter(h => h.pub_pick && h.pub_pick > 0.02 && h.pub_win)
        .sort((a, b) => b.pub_win - a.pub_win)
        .slice(0, 5);
    if (!list.length) return null;
    const rows = list.map((h, i) =>
        `${i + 1}. <strong>${h.localized_name}</strong> — винрейт ${pct(h.pub_win)}, пикрейт ${pct(h.pub_pick)}`
    ).join('<br>');
    return `📈 <strong>Актуальная мета патча:</strong><br>${rows}<br><br>💡 Данные OpenDota.`;
}

// Винрейт героя
function getWinrateAnswer(question) {
    const hero = (typeof findHero === 'function') ? findHero(question) : null;
    if (!hero) return null;
    const s = getHeroStats(hero);
    if (!s) return `📊 Нет данных по <strong>${hero.name}</strong>. Нажми «🔄 Обновить мету».`;
    return `📊 <strong>${hero.name} (${hero.ru})</strong> в текущем патче:<br>` +
        `• Паблик: винрейт <strong>${pct(s.pub_win)}</strong>, пикрейт ${pct(s.pub_pick)}<br>` +
        `• Просцена: винрейт <strong>${pct(s.pro_win)}</strong>, пикрейт ${pct(s.pro_pick)}<br><br>💡 Данные OpenDota.`;
}

// Автозагрузка
document.addEventListener('DOMContentLoaded', () => {
    loadLiveStats();
});
