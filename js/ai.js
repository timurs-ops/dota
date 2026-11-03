// ============================================
// ИИ-АССИСТЕНТ DOTA 2 (С ПОДДЕРЖКОЙ ЖИВОЙ МЕТЫ)
// ============================================

class DotaAI {
    constructor() {
        this.iconUrl = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/';
        
        this.knowledgeBase = {
            'новичок': '🎯 Для новичков: Джаггернаут, Кристал Мейден, Акс, Снайпер, Рейт Кинг, Лич. Простые и эффективные. Начни с Саппорта или Керри.',
            'ммр': '📊 ММР: калибровка 10 игр, +25 за победу, -25 за поражение. Ранги: Херальд → Страж → Крестоносец → Архонт → Легенда → Древний → Божественный → Бессмертный.',
            'рейтинг': '📊 Ранги: Херальд (0-770), Страж (770-1540), Крестоносец (1540-2310), Архонт (2310-3080), Легенда (3080-3850), Древний (3850-4620), Божественный (4620-5600), Бессмертный (5600+).',
            'фарм': '💰 Фарм: 1) Ластхит крипов 2) Battle Fury/Maelstrom/Radiance 3) Нейтралы между волнами 4) ТП для ротаций 5) Не умирай — каждая смерть = потеря золота.',
            'золото': '💰 Золото: ластхит = 40-50, нейтралы = 30-100, убийство героя = 200-1000. Старт — 600.',
            'роль': '🎭 Роли: 1️⃣ Керри (фармит, лейт) 2️⃣ Мид (соло, темп) 3️⃣ Оффлейн (инициация) 4️⃣ Софт саппорт (ганги) 5️⃣ Хард саппорт (варды, сейв).',
            'керри': '⚔️ Керри: фарми 15-20 мин, избегай драк, покупай BKB, Daedalus, Butterfly. Задача — урон в лейте.',
            'саппорт': '🛡️ Саппорт: варды, сейв (Glimmer, Force Staff), ходи с керри, помогай в тимфайтах.',
            'мид': '🔥 Мид: соло линия, быстрый уровень, доминируй в мидгейме, гангай, контролируй руны.',
            'предмет': '🛒 Ключевые: BKB (маг. иммунитет), Blink (инициация), Scythe of Vyse (стан), Aghanim (ульт), Glimmer Cape (сейв).',
            'бкб': '🛡️ BKB — магический иммунитет 6-10 сек. Нужен керри против магов.',
            'блинк': '⚡ Blink Dagger — телепорт 1200. Для инициаторов: Axe, Earthshaker, Magnus.',
            'варды': '👁️ Observer (видимость 6 мин), Sentry (детект инвиза). Ставь на рунах, Рошане, входах в лес.',
            'рошан': '🐉 Рошан: спавн 15 мин, дропает Aegis. Возрождение 8-11 мин. С 3 убийства — Cheese.',
            'руны': '✨ Руны: Bounty (золото, каждые 3 мин), Power (Double Damage, Haste, Illusion, Invis, Regen, Arcane, Shield — каждые 2 мин с 6:00).',
            'смок': '💨 Smoke — невидимость команды 45 сек, 50 голды. Для гангов. Ломается на 1025 от врага.',
            'тп': '📜 TP — телепорт к союзному зданию, 100 голды, каст 3 сек. Всегда носи!',
            'тимфайт': '⚔️ Тимфайты: инициатор первым, фокус саппортов/керри, BKB вовремя, саппорты сейвят керри.',
            'совет': '💡 Советы: миникарта каждые 5 сек, всегда TP, не тильтуй, играй с друзьями, смотри реплеи.',
            'pudge': '🪝 Pudge: Hook→Rot→Flesh Heap→Dismember. Билд: Blink→Aghanim→Heart→Blade Mail. Тренируй хуки в демо.',
            'invoker': '🔮 Invoker: 3 сферы, 10 заклинаний. Контры: Nyx, Silencer, быстрые ганги до 6.',
            'juggernaut': '⚔️ Juggernaut: Blade Dance, Healing Ward, Omnislash. Билд: Phase→Maelstrom→Mjollnir→BKB. Отличный для новичков!',
            'anti-mage': '⚡ Anti-Mage: Mana Break, Blink, Mana Void. Билд: Battle Fury→Manta→Abyssal. Контрит магов.',
            'crystal maiden': '❄️ Crystal Maiden: Frostbite, Crystal Nova, Arcane Aura, Freezing Field. Идеальный саппорт для новичков!',
            'axe': '🪓 Axe: Berserker\'s Call, Counter Helix, Culling Blade. Билд: Blink→Blade Mail→Heart.',
            'sniper': '🔫 Sniper: Headshot, Take Aim, Assassinate. Держи дистанцию. Контрят: Spirit Breaker, Riki, Pudge.',
        };

        this.synonyms = {
            'нович': 'новичок', 'начинающ': 'новичок',
            'рейтинг': 'ммр', 'ранг': 'ммр',
            'фарминг': 'фарм', 'голда': 'золото', 'деньги': 'золото',
            'вард': 'варды', 'рош': 'рошан', 'руна': 'руны',
            'смока': 'смок', 'дым': 'смок', 'свиток': 'тп',
            'линия': 'лейнинг', 'лайн': 'лейнинг',
            'драка': 'тимфайт', 'файт': 'тимфайт',
            'шмот': 'предмет', 'итем': 'предмет',
        };
    }

    // Форматирование ответа о герое с иконкой и метой
    formatHeroAnswer(hero) {
        const iconUrl = this.iconUrl + hero.icon + '.png';
        const attrRu = {Strength:'Сила', Agility:'Ловкость', Intelligence:'Интеллект', Universal:'Универсальный'};
        const diffRu = {Easy:'Легко', Medium:'Средне', Hard:'Сложно', 'Very Hard':'Очень сложно'};
        
        let metaBlock = '';
        if (typeof getHeroStats === 'function') {
            const s = getHeroStats(hero);
            if (s) {
                metaBlock = `<br>📈 <strong>Мета патча:</strong><br>` +
                    `• Паблик: винрейт <strong>${pct(s.pub_win)}</strong>, пикрейт ${pct(s.pub_pick)}<br>` +
                    `• Просцена: винрейт <strong>${pct(s.pro_win)}</strong>, пикрейт ${pct(s.pro_pick)}`;
            }
        }

        return `
            <div style="display:flex;align-items:center;gap:15px;margin-bottom:10px">
                <img src="${iconUrl}" style="width:100px;height:56px;object-fit:cover;border-radius:8px;border:2px solid #ff6b2c">
                <div>
                    <strong style="font-size:1.1em">${hero.name}</strong> (${hero.ru})<br>
                    ⚔️ ${attrRu[hero.attr]} · 🎯 ${hero.role} · ⭐ ${diffRu[hero.difficulty]}
                </div>
            </div>
            ${metaBlock || '<br>💡 Свежие винрейты не загружены. Нажми «🔄 Обновить мету» в чате.'}
        `;
    }

       async getAnswer(question) {
        const lowerQ = question.toLowerCase();
        let processedQ = lowerQ;
        for (const [syn, orig] of Object.entries(this.synonyms)) {
            if (lowerQ.includes(syn)) processedQ += ' ' + orig;
        }

        // 1. Винрейты/мета — из локальных данных
        const winKeys = ['винрейт', 'winrate', 'win rate', 'процент побед'];
        const metaKeys = ['мета', 'meta', 'патч', 'patch', 'топ героев', 'сильные герои', 'актуальн'];

        if (winKeys.some(k => lowerQ.includes(k))) {
            if (typeof getWinrateAnswer === 'function') {
                const ans = getWinrateAnswer(processedQ);
                if (ans) return ans;
            }
        }
        if (metaKeys.some(k => lowerQ.includes(k))) {
            if (typeof getMetaAnswer === 'function') {
                const ans = getMetaAnswer();
                if (ans) return ans;
            }
        }

        // 2. База знаний
        for (const [key, answer] of Object.entries(this.knowledgeBase)) {
            if (processedQ.includes(key)) return answer;
        }

        // 3. Герой
        const heroMention = (typeof findHero === 'function') ? findHero(processedQ) : null;
        if (heroMention) return this.formatHeroAnswer(heroMention);

        // 4. Общие вопросы
        if (lowerQ.includes('билд') || lowerQ.includes('предметы на')) {
            const hero = (typeof findHero === 'function') ? findHero(processedQ) : null;
            if (hero) {
                return `🛒 <strong>${hero.name}</strong> (${hero.ru}):<br>• Начало: ветки, фласки, танго<br>• Мидгейм: по роли<br>• Лейт: BKB против магии, Shiva против физов<br><br>💡 Точный билд — на Dotabuff.`;
            }
            return '🛒 Укажи героя! Например: "билд на Пуджа"';
        }

        if (lowerQ.includes('контр')) {
            const hero = (typeof findHero === 'function') ? findHero(processedQ) : null;
            if (hero) {
                return `🔄 Против <strong>${hero.name}</strong>: против магии — BKB/Pipe, против физов — Ghost/Shiva, против хила — Spirit Vessel/Ancient Apparition.`;
            }
            return '🔄 Уточни героя! Например: "контрпики на Инвокера"';
        }

        if (lowerQ.includes('как') && (lowerQ.includes('играть') || lowerQ.includes('начать'))) {
            return '🎮 Основы: 1) Фарми 2) Покупай предметы 3) Тимфайты 4) Ломай башни. Спроси о герое или механике!';
        }

        return `🤔 Попробуй спросить:<br>
            • "Винрейт Пуджа"<br>
            • "Билд на Джаггернаута"<br>
            • "Какая сейчас мета?"<br>
            • "Расскажи про Инвокера"<br>
            • "Что такое БКБ?"<br>
            • "Как фармить?"<br>
            • "Роли в Доте"`;
    }
