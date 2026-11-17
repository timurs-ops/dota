// ============================================
// ИИ-АССИСТЕНТ DOTA 2 С ПОЛНЫМ СЛОВАРЁМ СЛЕНГА
// ============================================

class DotaAI {
    constructor() {
        this.iconUrl = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/';
        
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
            'бкб':'BKB','black king bar':'BKB',
            'блинк':'Blink Dagger','бд':'Blink Dagger',
            'аганим':'Aghanim Scepter','агс':'Aghanim Scepter',
            'даэдалус':'Daedalus','криты':'Daedalus',
            'баттерфляй':'Butterfly','бабочка':'Butterfly',
            'бф':'Battle Fury','батл фури':'Battle Fury',
            'маэлстром':'Maelstrom','молния':'Maelstrom',
            'радианс':'Radiance','радик':'Radiance',
            'глиммер':'Glimmer Cape',
            'форс':'Force Staff',
            'сайз':'Scythe of Vyse','хекс':'Scythe of Vyse',
            'харт':'Heart of Tarrasque',
            'блейд мейл':'Blade Mail','бм':'Blade Mail',
            'линкен':'Linken Sphere',
            'мекансм':'Mekansm',
            'арканы':'Arcane Boots',
            'транкилы':'Tranquil Boots',
            'птр':'Power Treads',
            'фэйзы':'Phase Boots',
            'ботинки':'Boots of Speed',
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
                    '• Паблик: винрейт <strong>' + (typeof pct === 'function' ? pct(s.pub_win) : '—') + '</strong>, пикрейт ' + (typeof pct === 'function' ? pct(s.pub_pick) : '—') + '<br>' +
                    '• Просцена: винрейт <strong>' + (typeof pct === 'function' ? pct(s.pro_win) : '—') + '</strong>, пикрейт ' + (typeof pct === 'function' ? pct(s.pro_pick) : '—');
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

        const winKeys = ['винрейт', 'winrate', 'win rate', 'процент побед'];
        const metaKeys = ['мета', 'meta', 'патч', 'patch', 'топ героев', 'сильные герои', 'актуальн'];

        if (winKeys.some(k => lowerQ.includes(k))) {
            if (typeof getWinrateAnswer === 'function') {
                const ans = getWinrateAnswer(finalQ);
                if (ans) return ans;
            }
        }
        if (metaKeys.some(k => lowerQ.includes(k))) {
            if (typeof getMetaAnswer === 'function') {
                const ans = getMetaAnswer();
                if (ans) return ans;
            }
        }

        for (const [key, answer] of Object.entries(this.knowledgeBase)) {
            if (finalQ.includes(key)) return answer;
        }

        const heroMention = (typeof findHero === 'function') ? findHero(finalQ) : null;
        if (heroMention) return this.formatHeroAnswer(heroMention);

        if (lowerQ.includes('билд') || lowerQ.includes('предметы на')) {
            const hero = (typeof findHero === 'function') ? findHero(finalQ) : null;
            if (hero) {
                return '🛒 <strong>' + hero.name + '</strong> (' + hero.ru + '):<br>• Начало: ветки, фласки, танго<br>• Мидгейм: по роли<br>• Лейт: BKB против магии, Shiva против физов<br><br>💡 Точный билд — на Dotabuff.';
            }
            return '🛒 Укажи героя! Например: "билд на Пуджа" или "что купить на цмку"';
        }

        if (lowerQ.includes('контр')) {
            const hero = (typeof findHero === 'function') ? findHero(finalQ) : null;
            if (hero) {
                return '🔄 Против <strong>' + hero.name + '</strong>: против магии — BKB/Pipe, против физов — Ghost/Shiva, против хила — Spirit Vessel/Ancient Apparition.';
            }
            return '🔄 Уточни героя! Например: "контрпики на Инвокера" или "как контрить пуджа"';
        }

        if (lowerQ.includes('как') && (lowerQ.includes('играть') || lowerQ.includes('начать'))) {
            return '🎮 Основы: 1) Фарми 2) Покупай предметы 3) Тимфайты 4) Ломай башни. Спроси о герое или механике!';
        }

        return '🤔 Попробуй спросить:<br>• "Винрейт Пуджа"<br>• "Билд на Джаггернаута"<br>• "Какая сейчас мета?"<br>• "Расскажи про Инвокера"<br>• "Что такое БКБ?"<br>• "Как фармить?"<br>• "Роли в Доте"';
    }
}

const dotaAI = new DotaAI();
