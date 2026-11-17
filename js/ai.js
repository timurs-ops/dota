// ============================================
// ИИ-АССИСТЕНТ DOTA 2 (исправленный порядок + мета по атрибутам)
// ============================================

class DotaAI {
    constructor() {
        this.iconUrl = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/';
        this.itemUrl = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/';

        // Словарь названий предметов (ключ = имя файла CDN)
        this.itemNames = {
            'battle_fury':'Battle Fury','manta':'Manta Style','abyssal_blade':'Abyssal Blade',
            'butterfly':'Butterfly','black_king_bar':'BKB','blade_mail':'Blade Mail',
            'blink':'Blink Dagger','heart':'Heart','crimson_guard':'Crimson Guard',
            'pipe':'Pipe','ultimate_scepter':"Aghanim's",'aghanims_shard':"Aghanim's Shard",
            'force_staff':'Force Staff','glimmer_cape':'Glimmer Cape','guardian_greaves':'Guardian Greaves',
            'aether_lens':'Aether Lens','dragon_lance':'Dragon Lance','hurricane_pike':'Hurricane Pike',
            'assault_cuirass':'Assault','skadi':'Eye of Skadi','diffusal_blade':'Diffusal Blade',
            'bloodstone':'Bloodstone','linken_sphere':"Linken's",'orchid':'Orchid',
            'greater_crit':'Daedalus','desolator':'Desolator','satanic':'Satanic','shivas_guard':"Shiva's",
            'refresher':'Refresher','octarine_core':'Octarine','scythe_of_vyse':'Scythe',
            'monkey_king_bar':'MKB','silver_edge':'Silver Edge','bloodthorn':'Bloodthorn',
            'travel_boots':'BoT','phase_boots':'Phase','power_treads':'Treads',
            'arcane_boots':'Arcane','tranquil_boots':'Tranquil','maelstrom':'Maelstrom','radiance':'Radiance'
        };

        this.slangDictionary = {
            'пудж':'Pudge','пуджа':'Pudge','пуджу':'Pudge','хук':'Pudge','крюк':'Pudge','мясник':'Pudge',
            'инвокер':'Invoker','инва':'Invoker','джагер':'Juggernaut','джаггернаут':'Juggernaut','джаг':'Juggernaut',
            'антимаг':'Anti-Mage','ам':'Anti-Mage','цмка':'Crystal Maiden','кристалка':'Crystal Maiden','майка':'Crystal Maiden',
            'акс':'Axe','топор':'Axe','снайпер':'Sniper','сн':'Sniper','сф':'Shadow Fiend','nevermore':'Shadow Fiend',
            'па':'Phantom Assassin','фантик':'Phantom Assassin','фантомка':'Phantom Assassin','войд':'Faceless Void','фв':'Faceless Void',
            'вр':'Windranger','винда':'Windranger','квопа':'Queen of Pain','зевс':'Zeus','фурион':"Nature's Prophet",'натура':"Nature's Prophet",
            'сторм':'Storm Spirit','морф':'Morphling','терра':'Terrorblade','тб':'Terrorblade','баратрум':'Spirit Breaker',
            'лик':'Lycan','волк':'Lycan','друид':'Lone Druid','магнус':'Magnus','энигма':'Enigma','ур':'Ursa','медведь':'Ursa',
            'лич':'Lich','лион':'Lion','шаман':'Shadow Shaman','рубик':'Rubick','бкб':'black_king_bar','блинк':'blink',
            'аганим':'ultimate_scepter','даэдалус':'greater_crit','криты':'greater_crit','баттерфляй':'butterfly','бабочка':'butterfly',
            'бф':'battle_fury','маэлстром':'maelstrom','радианс':'radiance','глиммер':'glimmer_cape','форс':'force_staff',
            'сайз':'scythe_of_vyse','хекс':'scythe_of_vyse','харт':'heart','блейд мейл':'blade_mail','линкен':'linken_sphere',
            'фарм':'фарм','голда':'золото','деньги':'золото','ластхит':'ластхит','лх':'ластхит','денай':'денай',
            'пуш':'пуш','ганг':'ганг','ганк':'ганг','тимфайт':'тимфайт','файт':'тимфайт','драка':'тимфайт',
            'смок':'смок','дым':'смок','варды':'варды','рошан':'рошан','рош':'рошан','руны':'руны',
            'керри':'керри','саппорт':'саппорт','сап':'саппорт','мид':'мид','оффлейн':'оффлейн',
            '4ка':'софт саппорт','5ка':'хард саппорт','ммр':'ммр','рейтинг':'ммр','ранг':'ммр',
            'тильт':'тильт','фид':'фид','нуб':'нуб','смурф':'смурф','мета':'мета','патч':'мета','нерф':'нерф','бафф':'бафф'
        };

        this.knowledgeBase = {
            'новичок':'🎯 Для новичков: Джаггернаут, Кристал Мейден, Акс, Снайпер, Рейт Кинг, Лич. Простые и эффективные.',
            'ммр':'📊 ММР: калибровка 10 игр, +25/-25. Ранги: Херальд → Страж → Крестоносец → Архонт → Легенда → Древний → Божественный → Бессмертный.',
            'фарм':'💰 Фарм: ластхит, Battle Fury/Maelstrom/Radiance, нейтралы между волнами, ТП для ротаций, не умирай.',
            'роль':'🎭 Роли: 1️⃣ Керри 2️⃣ Мид 3️⃣ Оффлейн 4️⃣ Софт саппорт 5️⃣ Хард саппорт.',
            'варды':'👁️ Observer (видимость), Sentry (детект инвиза). Ставь на рунах, Рошане, входах в лес.',
            'рошан':'🐉 Рошан: спавн 15 мин, Aegis. Возрождение 8-11 мин. С 3 убийства — Cheese.',
            'руны':'✨ Руны: Bounty (золото, каждые 3 мин), Power (Double Damage, Haste, Invis, Regen — каждые 2 мин с 6:00).',
            'смок':'💨 Smoke — невидимость команды 45 сек, 50 голды. Для гангов. Ломается на 1025 от врага.',
            'тп':'📜 TP — телепорт к зданию, 100 голды, каст 3 сек. Всегда носи!',
            'тимфайт':'⚔️ Тимфайты: инициатор первым, фокус саппортов/керри, BKB вовремя, саппорты сейвят керри.',
            'лейнинг':'📍 Лейнинг: контролируй равновесие крипов, денай своих, харась врага, смотри миникарту.',
            'тильт':'😤 Тильт: перерыв после 2 поражений подряд. Не играй в плохом настроении.',
            'реплей':'📹 Реплеи: анализируй смерти, позиционирование, пропущенные возможности.',
            'контр':'🔄 Контрпики: против инвиза — Sentry/Gem, против магии — BKB/Pipe, против физов — Ghost/Shiva, против хила — Spirit Vessel.',
            'пик':'📋 Пик: баланс ролей, контроль инициации, сейв для керри, не 5 керри в команде.'
        };

        this.synonyms = {'нович':'новичок','начинающ':'новичок','голда':'золото','шмот':'предмет','итем':'предмет'};
    }

    processSlang(question) {
        const words = question.toLowerCase().split(/\s+/);
        return words.map(w => {
            const clean = w.replace(/[.,!?;:]/g, '');
            return this.slangDictionary[clean] || clean;
        }).join(' ');
    }

    // Генерация HTML с иконками предметов
    renderItems(items) {
        if (!items || !items.length) return '';
        let html = '<div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px">';
        items.forEach(item => {
            const name = this.itemNames[item] || item.replace(/_/g, ' ');
            html += `<div style="text-align:center;width:65px">
                <img src="${this.itemUrl}${item}.png" style="width:50px;height:38px;object-fit:contain;background:#1a1a1a;border-radius:6px;border:1px solid #2e2e2e" onerror="this.parentElement.style.display='none'">
                <div style="font-size:10px;color:#a3a3a3;margin-top:4px;line-height:1.2">${name}</div>
            </div>`;
        });
        return html + '</div>';
    }

    formatHeroAnswer(hero) {
        const iconUrl = this.iconUrl + hero.icon + '.png';
        const attrRu = {Strength:'Сила',Agility:'Ловкость',Intelligence:'Интеллект',Universal:'Универсальный'};
        const diffRu = {Easy:'Легко',Medium:'Средне',Hard:'Сложно','Very Hard':'Очень сложно'};
        let metaBlock = '';
        if (typeof getHeroStats === 'function') {
            const s = getHeroStats(hero);
            if (s) {
                metaBlock = '<br>📈 <strong>Мета:</strong> паблик ' + (typeof pct==='function'?pct(s.pub_win):'—') +
                            ' · просцена ' + (typeof pct==='function'?pct(s.pro_win):'—');
                if (s.items) metaBlock += this.renderItems(s.items);
            }
        }
        return '<div style="display:flex;align-items:center;gap:15px;margin-bottom:10px">' +
            '<img src="' + iconUrl + '" style="width:100px;height:56px;object-fit:cover;border-radius:8px;border:2px solid #ff6b2c" onerror="this.style.display=\'none\'">' +
            '<div><strong>' + hero.name + '</strong> (' + hero.ru + ')<br>⚔️ ' + attrRu[hero.attr] +
            ' · 🎯 ' + hero.role + ' · ⭐ ' + diffRu[hero.difficulty] + '</div></div>' +
            (metaBlock || '<br>💡 Нажми «🔄 Обновить мету» для винрейтов.');
    }

    async getAnswer(question) {
        const processed = this.processSlang(question);
        const lowerQ = processed.toLowerCase();
        let finalQ = lowerQ;
        for (const [syn, orig] of Object.entries(this.synonyms)) {
            if (lowerQ.includes(syn)) finalQ += ' ' + orig;
        }

        const isBuild = lowerQ.includes('билд') || lowerQ.includes('предметы') || lowerQ.includes('что купить') || lowerQ.includes('сборк');

        // 1. БИЛДЫ С КАРТИНКАМИ (теперь ПЕРВЫМ — до базы знаний!)
        if (isBuild) {
            const hero = (typeof findHero === 'function') ? findHero(finalQ) : null;
            if (hero) {
                const s = (typeof getHeroStats === 'function') ? getHeroStats(hero) : null;
                if (s && s.items) {
                    return `🛒 <strong>Лучшая сборка на ${hero.name} (${hero.ru}):</strong>` + this.renderItems(s.items) +
                        '<br><br>💡 <em>Нажми на карточку героя в списке для подробной статистики!</em>';
                }
                return `🛒 <strong>${hero.name}</strong>: начало — ветки, фласки, танго; мидгейм — по роли; лейт — BKB против магии, Shiva против физов.`;
            }
            return '🛒 Укажи героя! Например: "билд на Пуджа" или "что купить на цмку"';
        }

        // 2. Мета по атрибутам
        const metaKeys = ['мета','meta','патч','patch','топ героев','сильные герои','актуальн','какой винрейт','винрейт у персонажей','винрейт героев','топ по винрейту','лучшие герои','персонажей','у всех','у героев'];
        if (metaKeys.some(k => lowerQ.includes(k))) {
            if (typeof getMetaByAttribute === 'function') {
                const ans = getMetaByAttribute();
                if (ans) return ans;
            }
            if (typeof getMetaAnswer === 'function') {
                const ans = getMetaAnswer();
                if (ans) return ans;
            }
        }

        // 3. Винрейт конкретного героя
        const winKeys = ['винрейт','winrate','win rate','процент побед'];
        if (winKeys.some(k => lowerQ.includes(k))) {
            if (typeof getWinrateAnswer === 'function') {
                const ans = getWinrateAnswer(finalQ);
                if (ans) return ans;
            }
        }

        // 4. База знаний
        for (const [key, answer] of Object.entries(this.knowledgeBase)) {
            if (finalQ.includes(key)) return answer;
        }

        // 5. Герой
        const heroMention = (typeof findHero === 'function') ? findHero(finalQ) : null;
        if (heroMention) return this.formatHeroAnswer(heroMention);

        if (lowerQ.includes('как') && (lowerQ.includes('играть') || lowerQ.includes('начать'))) {
            return '🎮 Основы: 1) Фарми 2) Покупай предметы 3) Тимфайты 4) Ломай башни. Спроси о герое или механике!';
        }

        return '🤔 Попробуй спросить:<br>• "Билд на Пуджа" (с картинками предметов)<br>• "Какая сейчас мета?"<br>• "Винрейт Инвокера"<br>• "Расскажи про Джаггернаута"<br>• "Что такое БКБ?"<br>• "Как фармить?"';
    }
}

const dotaAI = new DotaAI();
