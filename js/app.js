// ============================================
// ЛОГИКА ПРИЛОЖЕНИЯ
// ============================================

let messageHistory = [];

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `message ${sender}-message`;
    const prefix = sender === 'user' ? 'Вы' : 'AI';
    div.innerHTML = `<strong>${prefix}:</strong><br>${text}`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    messageHistory.push({sender, text, time: new Date().toLocaleTimeString()});
}

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const question = userInput.value.trim();
    if (!question) return;

    addMessage(question, 'user');
    userInput.value = '';

    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'message bot-message';
    loadingMsg.id = 'loading';
    loadingMsg.innerHTML = '<strong>AI:</strong> Думаю... 🤔';
    document.getElementById('chatMessages').appendChild(loadingMsg);
    document.getElementById('chatMessages').scrollTop = 999999;

    await new Promise(r => setTimeout(r, 400));
    const answer = await dotaAI.getAnswer(question);

    const le = document.getElementById('loading');
    if (le) le.remove();
    addMessage(answer, 'bot');
}

function clearChat() {
    document.getElementById('chatMessages').innerHTML =
        '<div class="message bot-message"><strong>AI:</strong> Диалог сброшен. Спрашивай что угодно о Dota 2! 🎮</div>';
    messageHistory = [];
    try { localStorage.removeItem('dota2_chat_history'); } catch (e) {}
}

// Карточка героя (вместо отправки в чат)
function showHeroInfo(hero) {
    openHeroModal(hero);
}

function openHeroModal(hero) {
    const modal = document.getElementById('heroModal');
    const body = document.getElementById('heroModalBody');
    if (!modal || !body) return;

    const iconUrl = (typeof ICON_URL !== 'undefined' ? ICON_URL : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/') + hero.icon + '.png';
    const s = (typeof getHeroStats === 'function') ? getHeroStats(hero) : null;
    const ITEM_URL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/';

    const attrRu = {Strength:'Сила', Agility:'Ловкость', Intelligence:'Интеллект', Universal:'Универсальный'};
    const diffRu = {Easy:'Легко', Medium:'Средне', Hard:'Сложно', 'Very Hard':'Очень сложно'};

    // 1. Только 2 винрейта (убраны пикрейты)
    let statsHtml = '';
    if (s && typeof pct === 'function') {
        statsHtml = `
            <div class="hm-stats">
                <div class="hm-stat">Винрейт (паблик)<b class="win">${pct(s.pub_win)}</b></div>
                <div class="hm-stat">Винрейт (просцена)<b class="win">${pct(s.pro_win)}</b></div>
            </div>`;
    } else {
        statsHtml = '<p style="color:#a3a3a3;font-size:13px;margin-top:14px">Свежие винрейты не загружены. Нажми «🔄 Обновить мету» в чате.</p>';
    }

    // 2. Лучшая сборка предметов с иконками
    let itemsHtml = '';
    if (s && s.items && s.items.length > 0) {
        const itemNames = {
            'battle_fury': 'Battle Fury', 'manta': 'Manta Style', 'abyssal_blade': 'Abyssal Blade',
            'butterfly': 'Butterfly', 'black_king_bar': 'BKB', 'blade_mail': 'Blade Mail',
            'blink': 'Blink Dagger', 'heart': 'Heart', 'crimson_guard': 'Crimson Guard',
            'pipe': 'Pipe', 'ultimate_scepter': 'Aghanim\'s Scepter', 'aghanims_shard': 'Aghanim\'s Shard',
            'force_staff': 'Force Staff', 'glimmer_cape': 'Glimmer Cape', 'guardian_greaves': 'Guardian Greaves',
            'aether_lens': 'Aether Lens', 'dragon_lance': 'Dragon Lance', 'hurricane_pike': 'Hurricane Pike',
            'assault': 'Assault', 'skadi': 'Eye of Skadi', 'diffusal_blade': 'Diffusal Blade',
            'bloodstone': 'Bloodstone', 'linkens': 'Linken\'s', 'orchid': 'Orchid',
            'daedalus': 'Daedalus', 'desolator': 'Desolator', 'satanic': 'Satanic', 'shivas': 'Shiva\'s',
            'refresher': 'Refresher', 'octarine_core': 'Octarine', 'scythe': 'Scythe',
            'monkey_king_bar': 'MKB', 'silver_edge': 'Silver Edge', 'bloodthorn': 'Bloodthorn',
            'travel_boots': 'Boots of Travel', 'phase_boots': 'Phase Boots', 'power_treads': 'Power Treads',
            'arcane_boots': 'Arcane Boots', 'tranquil_boots': 'Tranquil Boots', 'greater_crit': 'Daedalus'
        };

        itemsHtml = '<div style="margin-top:16px"><h4 style="font-size:14px;font-weight:800;margin-bottom:10px;color:#ff6b2c">🛒 Лучшая сборка:</h4><div style="display:flex;flex-wrap:wrap;gap:8px">';
        s.items.forEach(item => {
            const name = itemNames[item] || item.replace(/_/g, ' ');
            itemsHtml += `<div style="text-align:center;width:60px">
                <img src="${ITEM_URL}${item}.png" style="width:50px;height:38px;object-fit:contain;background:#1a1a1a;border-radius:6px;border:1px solid #2e2e2e" onerror="this.style.display='none'">
                <div style="font-size:9px;color:#a3a3a3;margin-top:3px;line-height:1.2">${name}</div>
            </div>`;
        });
        itemsHtml += '</div></div>';
    }

    // 3. Финальная сборка HTML
    body.innerHTML = `
        <div class="hm-head">
            <img src="${iconUrl}" alt="${hero.name}" class="hm-icon">
            <div>
                <h3 style="font-size:22px;font-weight:800">${hero.name}</h3>
                <div style="color:#a3a3a3;font-size:14px">${hero.ru}</div>
            </div>
        </div>
        <p style="font-size:14px;color:#ddd;line-height:1.7">
            ⚔️ Атрибут: <strong>${attrRu[hero.attr]}</strong><br>
            🎯 Роль: ${hero.role}<br>
            ⭐ Сложность: ${diffRu[hero.difficulty]}
        </p>
        ${statsHtml}
        ${itemsHtml}
    `;
    modal.classList.add('open');
}

function closeHeroModal() {
    const modal = document.getElementById('heroModal');
    if (modal) modal.classList.remove('open');
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    document.getElementById('userInput').addEventListener('keypress', e => {
        if (e.key === 'Enter') sendMessage();
    });

    document.querySelectorAll('.quick-btn').forEach(b => {
        b.addEventListener('click', () => {
            document.getElementById('userInput').value = b.getAttribute('data-question');
            sendMessage();
        });
    });

    const clearBtn = document.getElementById('clearChatBtn');
    if (clearBtn) clearBtn.addEventListener('click', clearChat);

    const refreshBtn = document.getElementById('refreshMetaBtn');
    if (refreshBtn) refreshBtn.addEventListener('click', () => loadLiveStats(true));

    const closeBtn = document.getElementById('heroModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeHeroModal);
    
    const modal = document.getElementById('heroModal');
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeHeroModal(); });
    
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeHeroModal(); });
});
