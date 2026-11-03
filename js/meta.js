// ============================================
// АКТУАЛЬНАЯ МЕТА: ДАННЫЕ ГЕРОЕВ ИЗ OpenDota API
// Обновляются автоматически после патчей, без API-ключей
// ============================================

let liveStats = {};
let metaLoaded = false;

// Загрузка свежей статистики героев
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

function getHeroStats(hero) {
  return liveStats[(hero.name || '').toLowerCase()] || null;
}

function pct(v) { return v ? (v * 100).toFixed(1) + '%' : '—'; }

// Топ героев по винрейту (мета патча)
function getMetaAnswer() {
  const list = Object.values(liveStats)
    .filter(h => h.pub_pick && h.pub_pick > 0.02 && h.pub_win)
    .sort((a, b) => b.pub_win - a.pub_win)
    .slice(0, 5);
  if (!list.length) return null;
  const rows = list.map((h, i) =>
    `${i + 1}. <strong>${h.localized_name}</strong> — винрейт ${pct(h.pub_win)}, пикрейт ${pct(h.pub_pick)}`
  ).join('<br>');
  return `📈 <strong>Актуальная мета патча (паблик-игры):</strong><br>${rows}<br><br>` +
         `💡 Данные OpenDota — обновляются после каждого патча. Спроси «винрейт Пуджа» для деталей.`;
}

// Винрейт конкретного героя
function getWinrateAnswer(question) {
  const hero = findHero(question);
  if (!hero) return null;
  const s = getHeroStats(hero);
  if (!s) return `📊 Нет свежих данных по герою <strong>${hero.name}</strong> (офлайн-режим). Нажми «🔄 Обновить мету».`;
  return `📊 <strong>${hero.name} (${hero.ru})</strong> в текущем патче:<br>` +
    `• Паблик: винрейт <strong>${pct(s.pub_win)}</strong>, пикрейт ${pct(s.pub_pick)}<br>` +
    `• Просцена: винрейт <strong>${pct(s.pro_win)}</strong>, пикрейт ${pct(s.pro_pick)}<br>` +
    `• Турбо: винрейт ${pct(s.turbo_win)}<br><br>` +
    `💡 Данные OpenDota — актуальны после последнего патча.`;
}

// Подключаем мету к ИИ
document.addEventListener('DOMContentLoaded', () => {
  loadLiveStats();

  // Перехватываем вопросы о мете ДО базы знаний
  const origGetAnswer = dotaAI.getAnswer.bind(dotaAI);
  dotaAI.getAnswer = async function (question) {
    const q = question.toLowerCase();
    const winKeys = ['винрейт', 'вин рейт', 'winrate', 'win rate', 'процент побед'];
    const metaKeys = ['мета', 'meta', 'патч', 'patch', 'изменени', 'топ героев', 'сильные герои', 'актуальн'];

    if (winKeys.some(k => q.includes(k))) {
      const ans = getWinrateAnswer(q);
      if (ans) return ans;
    }
    if (metaKeys.some(k => q.includes(k)) && metaLoaded) {
      const ans = getMetaAnswer();
      if (ans) return ans;
    }
    return origGetAnswer(question);
  };
});
