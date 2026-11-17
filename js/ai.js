// ============================================
// ИИ-АССИСТЕНТ DOTA 2 С ПОЛНЫМ СЛОВАРЁМ СЛЕНГА И КАРТИНКАМИ ПРЕДМЕТОВ
// ============================================

class DotaAI {
    constructor() {
        this.iconUrl = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/';
        this.itemUrl = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/';
        
        this.slangDictionary = {
            'пудж':'Pudge','пуджа':'Pudge','пуджу':'Pudge','хук':'Pudge','крюк':'Pudge','мясник':'Pudge',
            'инвокер':'Invoker','инва':'Invoker','инвокера':'Invoker',
            'джагер':'Juggernaut','джаггернаут':'Juggernaut','джаг':'Juggernaut',
            'антимаг':'Anti-Mage','ам':'Anti-Mage',
            'цмка':'Crystal Maiden','кристалка':'Crystal Maiden','майка':'Crystal Maiden','см':'Crystal Maiden',
            'акс':'Axe','топор':'Axe',
            'снайпер':'Sniper','сн':'Sniper',
            'сф':'Shadow Fiend','nevermore':'Shadow Fiend',
            'па':'Phantom Assassin','фантик':'Phantom Assassin','фантомка':'Phantom Assassin',
            'войд':'Faceless Void','фв':'Faceless Void',
            'вр':'Windranger','винда':'Windranger',
            'квопа':'Queen of Pain','королева боли':'Queen of Pain',
            'зевс':'Zeus',
            'фурион':"Nature's Prophet",'натура':"Nature's Prophet",'нп':"Nature's Prophet",
            'спирит':'Storm Spirit','сторм':'Storm Spirit','сс':'Storm Spirit',
            'морф':'Morphling',
            'терра':'Terrorblade','тб':'Terrorblade',
            'баратрум':'Spirit Breaker','сб':'Spirit Breaker',
            'лик':'Lycan','волк':'Lycan',
            'друид':'Lone Druid','лд':'Lone Druid',
            'магнус':'Magnus','маг':'Magnus',
            'энигма':'Enigma',
            'ур':'Ursa','медведь':'Ursa',
            'лич':'Lich','лион':'Lion',
            'шаман':'Shadow Shaman','рубик':'Rubick',
            'бкб':'black_king_bar','black king bar':'black_king_bar',
            'блинк':'blink','бд':'blink',
            'аганим':'ultimate_scepter','агс':'ultimate_scepter',
            'даэдалус':'daedalus','криты':'daedalus',
            'баттерфляй':'butterfly','бабочка':'butterfly',
            'бф':'battle_fury','батл фури':'battle_fury',
            'маэлстром':'maelstrom','молния':'maelstrom',
            'радианс':'radiance','радик':'radiance',
            'глиммер':'glimmer_cape',
            'форс':'force_staff',
            'сайз':'scythe','хекс':'scythe',
            'харт':'heart',
            'блейд мейл':'blade_mail','бм':'blade_mail',
            'линкен':'linkens',
            'мекансм':'guardian_greaves',
            'арканы':'arcane_boots',
            'транкилы':'tranquil_boots',
            'птр':'power_treads',
            'фэйзы':'phase_boots',
            'ботинки':'phase_boots',
            'фарм':'фарм','фарминг':'фарм','фармить':'фарм',
            'голда':'золото','деньги':'золото','голди':'золото',
            'ластхит':'ластхит','лх':'ластхит',
            'денай':'денай','денаить':'денай',
            'харас':'харас','харасить':'харас',
            'пуш':'пуш','пушить':'пуш',
            'ганг':'ганг','гангать':'ганг','ганк':'ганг',
            'тимфайт':'тимфайт','файт':'тимфайт','драка':'тимфайт','замес':'тимфайт',
            'смок':'смок','дым':'смок',
            'варды':'варды','вард':'варды',
            'рошан':'рошан','рош':'рошан',
            'руны':'руны','руна':'руны',
            'аегис':'аегис','эгис':'аегис',
            'крипы':'крипы','крип':'крипы',
            'нейтралы':'нейтралы','лес':'нейтралы',
            'линия':'линия','лайн':'линия',
            'мид':'мид','мидлайн':'мид',
            'топ':'топ','бот':'бот',
            'оффлейн':'оффлейн','хардлейн':'оффлейн',
            'сейфлейн':'сейфлейн',
            'керри':'керри','кери':'керри',
            'саппорт':'саппорт','сап':'саппорт','поддержка':'саппорт',
            'мидер':'мидер','мидланер':'мидер',
            'оффлейнер':'оффлейнер',
            '4ка':'софт саппорт','четверка':'софт саппорт',
            '5ка':'хард саппорт','пятерка':'хард саппорт',
            'инициатор':'инициатор',
            'танк':'танк',
            'дд':'дд','дамагер':'дд',
            'ммр':'ммр','ммра':'ммр','рейтинг':'ммр','ранг':'ммр',
            'ранкид':'ранкид',
            'паблик':'паблик','паб':'паблик',
            'тильт':'тильт','тильтануть':'тильт',
            'фид':'фид','фидить':'фид','фидер':'фид',
            'рампейдж':'рампейдж','рампага':'рампейдж','пентакилл':'рампейдж',
            'мега-крипы':'мега-крипы','мега':'мега-крипы',
            'трон':'трон','древний':'трон',
            'башня':'башня','тауэр':'башня',
            'казармы':'казармы','бараки':'казармы',
            'гг':'гг','gg':'гг','gg wp':'гг',
            'нуб':'нуб','noob':'нуб',
            'смурф':'смурф',
            'боты':'боты',
            'сплитпуш':'сплитпуш',
            'бэкдор':'бэкдор',
            'ротация':'ротация','ротейт':'ротация',
            'агр':'агр','агрить':'агр',
            'контроль':'контроль','стан':'контроль',
            'сейв':'сейв','сейвить':'сейв',
            'пики':'пики','пик':'пики',
            'баны':'баны','бан':'баны',
            'контрпик':'контрпик','контр':'контрпик',
            'мета':'мета','патч':'мета',
            'бафф':'бафф','усилили':'бафф',
            'нерф':'нерф','ослабили':'нерф',
            'имба':'имба',
            'ап':'ап','обновление':'ап',
            'позиция 1':'керри','pos 1':'керри',
            'позиция 2':'мид','pos 2':'мид',
            'позиция 3':'оффлейн','pos 3':'оффлейн',
            'позиция 4':'софт саппорт','pos 4':'софт саппорт',
            'позиция 5':'хард саппорт','pos 5':'хард саппорт'
        };

        this.knowledgeBase = {
            'новичок': '🎯 Для новичков: Джаггернаут, Кристал Мейден, Акс, Снайпер, Рейт Кинг, Лич. Простые и эффективные.',
            'ммр': '📊 ММР: калибровка 10 игр, +25/-25. Ранги: Херальд → Страж → Крестоносец → Архонт → Легенда → Древний → Божественный → Бессмертный.',
            'фарм': '💰 Фарм: ластхит, Battle Fury/Maelstrom/Radiance, нейтралы между волнами, ТП для ротаций, не умирай.',
            'роль': '🎭 Роли: 1️⃣ Керри 2️⃣ Мид 3️⃣ Оффлейн 4️⃣ Софт саппорт 5️⃣ Хард саппорт.',
            'бкб': '🛡️ BKB — магический иммунитет 6-10 сек. Нужен керри против магов.',
            'варды': '👁️ Observer (видимость), Sentry (детект инвиза). Ставь на рунах, Рошане, входах в лес.',
            'рошан': '🐉 Рошан: спавн 15 мин, Aegis. Возрождение 8-11 мин. С 3 убийства — Cheese.',
            'pudge': '🪝 Pudge: Hook→Rot→Flesh Heap→Dismember. Билд: Blink→Aghanim→Heart.',
            'invoker': '🔮 Invoker: 3 сферы, 10 заклинаний. Контры: Nyx, Silencer, ганги до 6.',
            'juggernaut': '⚔️ Juggernaut: Blade Dance, Omnislash. Билд: Phase→Maelstrom→Mjollnir→BKB.',
            'anti-mage': '⚡ Anti-Mage: Mana Break, Blink, Mana Void. Билд: Battle Fury→Manta→Abyssal.',
            'crystal maiden': '❄️ Crystal Maiden: Frostbite, Arcane Aura, Freezing Field. Идеален для новичков-саппортов.',
            'axe': '🪓 Axe: Berserker\'s Call, Counter Helix, Culling Blade. Билд: Blink→Blade Mail→Heart.',
            'sniper': '🔫 Sniper: Headshot, Assassinate. Держи дистанцию. Контрят: Spirit Breaker, Riki, Pudge.'
        };

        this.synonyms = {
            'нович':'новичок','начинающ':'новичок',
            'рейтинг':'ммр','ранг':'ммр',
            'фарминг':'фарм','голда':'золото',
            'вард':'варды','рош':'рошан','руна':'руны',
            'смока':'смок','дым':'смок','свиток':'тп',
            'шмот':'предмет','итем':'предмет'
        };
    }

    processSlang(question) {
        const words = question.toLowerCase().split(/\s+/);
        const processed = [];
        for (const word of words) {
            const cleanWord = word.replace(/[.,!?;:]/g, '');
            if (this.slangDictionary[cleanWord]) {
                processed.push(this.slangDictionary[cleanWord]);
            } else {
                processed.push(cleanWord);
            }
        }
        return processed.join(' ');
    }

    formatHeroAnswer(hero) {
        const iconUrl = this.iconUrl + hero.icon + '.png';
        const attrRu = {Strength:'Сила', Agility:'Ловкость', Intelligence:'Интеллект', Universal:'Универсальный'};
        const diffRu = {Easy:'Легко', Medium:'Средне', Hard:'Сложно', 'Very Hard':'Очень сложно'};
        
        let metaBlock = '';
        if (typeof getHeroStats === 'function') {
            const s = getHeroStats(hero);
            if (s) {
                metaBlock = '<br>📈 <strong>Мета патча:</strong><br>' +
                    '• Паблик: винрейт <strong>' + (typeof pct === 'function' ? pct(s.pub_win) : '—') + '</strong><br>' +
                    '• Просцена: винрейт <strong>' + (typeof pct === 'function' ? pct(s.pro_win) : '—') + '</strong>';
            }
        }

        return '<div style="display:flex;align-items:center;gap:15px;margin-bottom:10px">' +
            '<img src="' + iconUrl + '" style="width:100px;height:56px;object-fit:cover;border-radius:8px;border:2px solid #ff6b2c" onerror="this.style.display=\'none\'">' +
            '<div><strong style="font-size:1.1em">' + hero.name + '</strong> (' + hero.ru + ')<br>' +
            '⚔️ ' + attrRu[hero.attr] + ' · 🎯 ' + hero.role + ' · ⭐ ' + diffRu[hero.difficulty] + '</div></div>' +
            (metaBlock || '<br>💡 Нажми «🔄 Обновить мету» в чате для винрейтов.');
    }

    async getAnswer(question) {
        const processedQuestion = this.processSlang(question);
        const lowerQ = processedQuestion.toLowerCase();

        let finalQ = lowerQ;
        for (const [syn, orig] of Object.entries(this.synonyms)) {
            if (lowerQ.includes(syn)) finalQ += ' ' + orig;
        }

        // 1. Вопросы о мете
        const metaKeys = ['мета', 'meta', 'патч', 'patch', 'топ героев', 'сильные герои', 'актуальн', 'винрейт сейчас', 'какой винрейт', 'винрейт у персонажей', 'винрейт героев', 'топ по винрейту', 'лучшие герои', 'персонажей', 'у всех', 'у героев'];
        if (metaKeys.some(k => lowerQ.includes(k))) {
            if (typeof getMetaAnswer === 'function') {
                const ans = getMetaAnswer();
                if (ans) return ans;
            }
        }

        // 2. Винрейт конкретного героя
        const winKeys = ['винрейт', 'winrate', 'win rate', 'процент побед'];
        if (winKeys.some(k => lowerQ.includes(k))) {
            if (typeof getWinrateAnswer === 'function') {
                const ans = getWinrateAnswer(finalQ);
                if (ans) return ans;
            }
        }

        // 3. База знаний
        for (const [key, answer] of Object.entries(this.knowledgeBase)) {
            if (finalQ.includes(key)) return answer;
        }

        // 4. Герой
        const heroMention = (typeof findHero === 'function') ? findHero(finalQ) : null;
        if (heroMention) return this.formatHeroAnswer(heroMention);

        // 5. БИЛДЫ И ПРЕДМЕТЫ (С КАРТИНКАМИ!)
        if (lowerQ.includes('билд') || lowerQ.includes('предметы на') || lowerQ.includes('что купить')) {
            const hero = (typeof findHero === 'function') ? findHero(finalQ) : null;
            if (hero) {
                const s = (typeof getHeroStats === 'function') ? getHeroStats(hero) : null;
                
                const itemNames = {
                    'battle_fury': 'Battle Fury', 'manta': 'Manta Style', 'abyssal_blade': 'Abyssal Blade',
                    'butterfly': 'Butterfly', 'black_king_bar': 'BKB', 'blade_mail': 'Blade Mail',
                    'blink': 'Blink Dagger', 'heart': 'Heart', 'crimson_guard': 'Crimson Guard',
                    'pipe': 'Pipe', 'ultimate_scepter': 'Aghanim\'s', 'aghanims_shard': 'Aghanim\'s Shard',
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

                let itemsHtml = '<div style="margin-top:12px; display:flex; flex-wrap:wrap; gap:8px;">';
                if (s && s.items && s.items.length > 0) {
                    s.items.forEach(item => {
                        const name = itemNames[item] || item.replace(/_/g, ' ');
                        itemsHtml += `<div style="text-align:center; width:65px;">
                            <img src="${this.itemUrl}${item}.png" style="width:50px; height:38px; object-fit:contain; background:#1a1a1a; border-radius:6px; border:1px solid #2e2e2e;" onerror="this.style.display='none'">
                            <div style="font-size:10px; color:#a3a3a3; margin-top:4px; line-height:1.2;">${name}</div>
                        </div>`;
                    });
                } else {
                    itemsHtml += '<span style="color:#a3a3a3; font-size:13px;">Данные о предметах загружаются...</span>';
                }
                itemsHtml += '</div>';

                return `🛒 <strong>Лучшая сборка на ${hero.name} (${hero.ru}):</strong><br>${itemsHtml}<br><br>💡 <em>Совет: нажми на карточку героя в списке, чтобы увидеть подробную статистику!</em>`;
            }
            return '🛒 Укажи героя! Например: "билд на Пуджа" или "что купить на цмку"';
        }

        // 6. Контрпики
        if (lowerQ.includes('контр')) {
            const hero = (typeof findHero === 'function') ? findHero(finalQ) : null;
            if (hero) {
                return '🔄 Против <strong>' + hero.name + '</strong>: против магии — BKB/Pipe, против физов — Ghost/Shiva, против хила — Spirit Vessel/Ancient Apparition.';
            }
            return '🔄 Уточни героя! Например: "контрпики на Инвокера" или "как контрить пуджа"';
        }

        // 7. Общие вопросы
        if (lowerQ.includes('как') && (lowerQ.includes('играть') || lowerQ.includes('начать'))) {
            return '🎮 Основы: 1) Фарми 2) Покупай предметы 3) Тимфайты 4) Ломай башни. Спроси о герое или механике!';
        }

        // 8. Запасной ответ
        return '🤔 Попробуй спросить:<br>• "Винрейт Пуджа"<br>• "Билд на Джаггернаута"<br>• "Какая сейчас мета?"<br>• "Расскажи про Инвокера"<br>• "Что такое БКБ?"<br>• "Как фармить?"<br>• "Роли в Доте"';
    }
}

const dotaAI = new DotaAI();
