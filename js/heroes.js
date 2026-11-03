// ============================================
// БАЗА 125 ГЕРОЕВ DOTA 2 (С ИКОНКАМИ И ЛОКАЛИЗАЦИЕЙ)
// ============================================

// Базовый URL для иконок героев (официальный CDN Valve)
const ICON_URL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/';

const heroesDB = [
    // === СИЛА (Strength) - 35 героев ===
    {name: "Axe", ru: "Акс", attr: "Strength", role: "Offlane/Initiator", difficulty: "Easy", icon: "axe"},
    {name: "Beastmaster", ru: "Бистмастер", attr: "Strength", role: "Offlane", difficulty: "Medium", icon: "beastmaster"},
    {name: "Brewmaster", ru: "Брюмастер", attr: "Strength", role: "Offlane", difficulty: "Hard", icon: "brewmaster"},
    {name: "Bristleback", ru: "Бристлбэк", attr: "Strength", role: "Offlane", difficulty: "Easy", icon: "bristleback"},
    {name: "Centaur Warrunner", ru: "Кентавр", attr: "Strength", role: "Offlane", difficulty: "Easy", icon: "centaur"},
    {name: "Chaos Knight", ru: "Хаос Найт", attr: "Strength", role: "Carry", difficulty: "Easy", icon: "chaos_knight"},
    {name: "Clockwerk", ru: "Клокверк", attr: "Strength", role: "Support/Offlane", difficulty: "Medium", icon: "clockwerk"},
    {name: "Dawnbreaker", ru: "Давнбрейкер", attr: "Strength", role: "Carry/Offlane", difficulty: "Medium", icon: "dawnbreaker"},
    {name: "Dragon Knight", ru: "Драгон Найт", attr: "Strength", role: "Mid/Offlane", difficulty: "Easy", icon: "dragon_knight"},
    {name: "Earth Spirit", ru: "Земляной Дух", attr: "Strength", role: "Support/Roamer", difficulty: "Hard", icon: "earth_spirit"},
    {name: "Earthshaker", ru: "Землетряс", attr: "Strength", role: "Support", difficulty: "Medium", icon: "earthshaker"},
    {name: "Elder Titan", ru: "Старший Титан", attr: "Strength", role: "Support/Offlane", difficulty: "Medium", icon: "elder_titan"},
    {name: "Huskar", ru: "Хускар", attr: "Strength", role: "Mid", difficulty: "Medium", icon: "huskar"},
    {name: "Kunkka", ru: "Кунка", attr: "Strength", role: "Mid/Offlane", difficulty: "Medium", icon: "kunkka"},
    {name: "Legion Commander", ru: "Легион Коммандер", attr: "Strength", role: "Offlane", difficulty: "Easy", icon: "legion_commander"},
    {name: "Lifestealer", ru: "Лайфстилер", attr: "Strength", role: "Carry", difficulty: "Easy", icon: "lifestealer"},
    {name: "Lycan", ru: "Ликан", attr: "Strength", role: "Carry/Offlane", difficulty: "Medium", icon: "lycan"},
    {name: "Mars", ru: "Марс", attr: "Strength", role: "Offlane", difficulty: "Medium", icon: "mars"},
    {name: "Night Stalker", ru: "Найт Сталкер", attr: "Strength", role: "Offlane/Roamer", difficulty: "Easy", icon: "night_stalker"},
    {name: "Omniknight", ru: "Омникнайт", attr: "Strength", role: "Support", difficulty: "Easy", icon: "omniknight"},
    {name: "Phoenix", ru: "Феникс", attr: "Strength", role: "Support", difficulty: "Medium", icon: "phoenix"},
    {name: "Primal Beast", ru: "Праймал Бист", attr: "Strength", role: "Offlane", difficulty: "Easy", icon: "primal_beast"},
    {name: "Pudge", ru: "Пудж", attr: "Strength", role: "Support/Roamer", difficulty: "Medium", icon: "pudge"},
    {name: "Sand King", ru: "Санд Кинг", attr: "Strength", role: "Offlane/Support", difficulty: "Medium", icon: "sand_king"},
    {name: "Slardar", ru: "Слардар", attr: "Strength", role: "Offlane/Carry", difficulty: "Easy", icon: "slardar"},
    {name: "Spirit Breaker", ru: "Спирит Брейкер", attr: "Strength", role: "Roamer/Support", difficulty: "Easy", icon: "spirit_breaker"},
    {name: "Sven", ru: "Свен", attr: "Strength", role: "Carry", difficulty: "Easy", icon: "sven"},
    {name: "Tidehunter", ru: "Тайдхантер", attr: "Strength", role: "Offlane", difficulty: "Easy", icon: "tidehunter"},
    {name: "Timbersaw", ru: "Тимберсоу", attr: "Strength", role: "Offlane/Mid", difficulty: "Medium", icon: "timbersaw"},
    {name: "Tiny", ru: "Тини", attr: "Strength", role: "Mid/Offlane", difficulty: "Medium", icon: "tiny"},
    {name: "Treant Protector", ru: "Триант", attr: "Strength", role: "Support", difficulty: "Easy", icon: "treant"},
    {name: "Tusk", ru: "Таск", attr: "Strength", role: "Roamer/Support", difficulty: "Medium", icon: "tusk"},
    {name: "Underlord", ru: "Андерлорд", attr: "Strength", role: "Offlane", difficulty: "Medium", icon: "abyssal_underlord"},
    {name: "Undying", ru: "Андрайинг", attr: "Strength", role: "Offlane/Support", difficulty: "Easy", icon: "undying"},
    {name: "Wraith King", ru: "Рейт Кинг", attr: "Strength", role: "Carry", difficulty: "Easy", icon: "wraith_king"},

    // === ЛОВКОСТЬ (Agility) - 36 героев ===
    {name: "Anti-Mage", ru: "Антимаг", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "antimage"},
    {name: "Arc Warden", ru: "Арк Варден", attr: "Agility", role: "Mid/Carry", difficulty: "Hard", icon: "arc_warden"},
    {name: "Bloodseeker", ru: "Бладсикер", attr: "Agility", role: "Carry/Offlane", difficulty: "Easy", icon: "bloodseeker"},
    {name: "Bounty Hunter", ru: "Баунти Хантер", attr: "Agility", role: "Roamer/Support", difficulty: "Easy", icon: "bounty_hunter"},
    {name: "Broodmother", ru: "Брудмазер", attr: "Agility", role: "Mid/Offlane", difficulty: "Medium", icon: "broodmother"},
    {name: "Clinkz", ru: "Клинкз", attr: "Agility", role: "Carry/Mid", difficulty: "Medium", icon: "clinkz"},
    {name: "Drow Ranger", ru: "Дроу Рейнджер", attr: "Agility", role: "Carry", difficulty: "Easy", icon: "drow_ranger"},
    {name: "Ember Spirit", ru: "Эмбер Спирит", attr: "Agility", role: "Mid", difficulty: "Hard", icon: "ember_spirit"},
    {name: "Faceless Void", ru: "Войд", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "faceless_void"},
    {name: "Gyrocopter", ru: "Гирокоптер", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "gyrocopter"},
    {name: "Hoodwink", ru: "Худвинк", attr: "Agility", role: "Support/Offlane", difficulty: "Medium", icon: "hoodwink"},
    {name: "Juggernaut", ru: "Джаггернаут", attr: "Agility", role: "Carry", difficulty: "Easy", icon: "juggernaut"},
    {name: "Kez", ru: "Кез", attr: "Agility", role: "Carry", difficulty: "Hard", icon: "kez"},
    {name: "Luna", ru: "Луна", attr: "Agility", role: "Carry", difficulty: "Easy", icon: "luna"},
    {name: "Marci", ru: "Марси", attr: "Agility", role: "Support/Offlane", difficulty: "Medium", icon: "marci"},
    {name: "Medusa", ru: "Медуза", attr: "Agility", role: "Carry", difficulty: "Easy", icon: "medusa"},
    {name: "Meepo", ru: "Мипо", attr: "Agility", role: "Mid/Carry", difficulty: "Very Hard", icon: "meepo"},
    {name: "Mirana", ru: "Мирана", attr: "Agility", role: "Support/Roamer", difficulty: "Medium", icon: "mirana"},
    {name: "Monkey King", ru: "Манки Кинг", attr: "Agility", role: "Carry/Offlane", difficulty: "Medium", icon: "monkey_king"},
    {name: "Morphling", ru: "Морфлинг", attr: "Agility", role: "Carry/Mid", difficulty: "Hard", icon: "morphling"},
    {name: "Naga Siren", ru: "Нага Сирена", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "naga_siren"},
    {name: "Phantom Assassin", ru: "Фантом Ассассин", attr: "Agility", role: "Carry", difficulty: "Easy", icon: "phantom_assassin"},
    {name: "Phantom Lancer", ru: "Фантом Лансер", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "phantom_lancer"},
    {name: "Razor", ru: "Разор", attr: "Agility", role: "Mid/Offlane", difficulty: "Medium", icon: "razor"},
    {name: "Riki", ru: "Рики", attr: "Agility", role: "Carry/Roamer", difficulty: "Easy", icon: "riki"},
    {name: "Shadow Fiend", ru: "Шадоу Фиенд", attr: "Agility", role: "Mid/Carry", difficulty: "Hard", icon: "shadow_fiend"},
    {name: "Sniper", ru: "Снайпер", attr: "Agility", role: "Carry/Mid", difficulty: "Easy", icon: "sniper"},
    {name: "Spectre", ru: "Спектра", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "spectre"},
    {name: "Templar Assassin", ru: "Темплар Ассассин", attr: "Agility", role: "Mid/Carry", difficulty: "Hard", icon: "templar_assassin"},
    {name: "Terrorblade", ru: "Террорблейд", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "terrorblade"},
    {name: "Troll Warlord", ru: "Тролль", attr: "Agility", role: "Carry", difficulty: "Medium", icon: "troll_warlord"},
    {name: "Ursa", ru: "Урса", attr: "Agility", role: "Carry", difficulty: "Easy", icon: "ursa"},
    {name: "Vengeful Spirit", ru: "Венжфул Спирит", attr: "Agility", role: "Support", difficulty: "Easy", icon: "vengefulspirit"},
    {name: "Venomancer", ru: "Веномансер", attr: "Agility", role: "Support/Offlane", difficulty: "Easy", icon: "venomancer"},
    {name: "Viper", ru: "Вайпер", attr: "Agility", role: "Mid/Offlane", difficulty: "Easy", icon: "viper"},
    {name: "Weaver", ru: "Вивер", attr: "Agility", role: "Carry/Offlane", difficulty: "Medium", icon: "weaver"},

    // === ИНТЕЛЛЕКТ (Intelligence) - 38 героев ===
    {name: "Ancient Apparition", ru: "Аппарат", attr: "Intelligence", role: "Support", difficulty: "Medium", icon: "ancient_apparition"},
    {name: "Batrider", ru: "Батрайдер", attr: "Intelligence", role: "Offlane/Mid", difficulty: "Medium", icon: "batrider"},
    {name: "Chen", ru: "Чен", attr: "Intelligence", role: "Support/Roamer", difficulty: "Very Hard", icon: "chen"},
    {name: "Crystal Maiden", ru: "Кристал Мейден", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "crystal_maiden"},
    {name: "Dark Seer", ru: "Дарк Сир", attr: "Intelligence", role: "Offlane", difficulty: "Medium", icon: "dark_seer"},
    {name: "Dark Willow", ru: "Дарк Виллоу", attr: "Intelligence", role: "Support", difficulty: "Medium", icon: "dark_willow"},
    {name: "Disruptor", ru: "Дизраптор", attr: "Intelligence", role: "Support", difficulty: "Medium", icon: "disruptor"},
    {name: "Enchantress", ru: "Энчантресс", attr: "Intelligence", role: "Support/Offlane", difficulty: "Medium", icon: "enchantress"},
    {name: "Enigma", ru: "Энигма", attr: "Intelligence", role: "Offlane/Support", difficulty: "Medium", icon: "enigma"},
    {name: "Grimstroke", ru: "Гримстроук", attr: "Intelligence", role: "Support", difficulty: "Medium", icon: "grimstroke"},
    {name: "Invoker", ru: "Инвокер", attr: "Intelligence", role: "Mid", difficulty: "Very Hard", icon: "invoker"},
    {name: "Io", ru: "Ио", attr: "Intelligence", role: "Support", difficulty: "Very Hard", icon: "io"},
    {name: "Jakiro", ru: "Джакиро", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "jakiro"},
    {name: "Keeper of the Light", ru: "Кипер", attr: "Intelligence", role: "Support/Mid", difficulty: "Medium", icon: "keeper_of_the_light"},
    {name: "Leshrac", ru: "Лешрак", attr: "Intelligence", role: "Mid/Offlane", difficulty: "Medium", icon: "leshrac"},
    {name: "Lich", ru: "Лич", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "lich"},
    {name: "Lina", ru: "Лина", attr: "Intelligence", role: "Mid/Support", difficulty: "Medium", icon: "lina"},
    {name: "Lion", ru: "Лион", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "lion"},
    {name: "Muerta", ru: "Муэрта", attr: "Intelligence", role: "Carry/Support", difficulty: "Medium", icon: "muerta"},
    {name: "Necrophos", ru: "Некрофос", attr: "Intelligence", role: "Offlane/Mid", difficulty: "Easy", icon: "necrophos"},
    {name: "Oracle", ru: "Оракул", attr: "Intelligence", role: "Support", difficulty: "Hard", icon: "oracle"},
    {name: "Outworld Destroyer", ru: "Аутворлд", attr: "Intelligence", role: "Mid", difficulty: "Medium", icon: "obsidian_destroyer"},
    {name: "Puck", ru: "Пак", attr: "Intelligence", role: "Mid", difficulty: "Hard", icon: "puck"},
    {name: "Pugna", ru: "Пугна", attr: "Intelligence", role: "Support/Mid", difficulty: "Medium", icon: "pugna"},
    {name: "Queen of Pain", ru: "Королева Боли", attr: "Intelligence", role: "Mid", difficulty: "Medium", icon: "queenofpain"},
    {name: "Ringmaster", ru: "Рингмастер", attr: "Intelligence", role: "Support", difficulty: "Medium", icon: "ringmaster"},
    {name: "Rubick", ru: "Рубик", attr: "Intelligence", role: "Support", difficulty: "Hard", icon: "rubick"},
    {name: "Shadow Demon", ru: "Шадоу Демон", attr: "Intelligence", role: "Support", difficulty: "Hard", icon: "shadow_demon"},
    {name: "Shadow Shaman", ru: "Шаман", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "shadow_shaman"},
    {name: "Silencer", ru: "Сайленсер", attr: "Intelligence", role: "Support/Offlane", difficulty: "Medium", icon: "silencer"},
    {name: "Skywrath Mage", ru: "Скайврат", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "skywrath_mage"},
    {name: "Storm Spirit", ru: "Сторм Спирит", attr: "Intelligence", role: "Mid", difficulty: "Hard", icon: "storm_spirit"},
    {name: "Techies", ru: "Техис", attr: "Intelligence", role: "Support/Offlane", difficulty: "Medium", icon: "techies"},
    {name: "Tinker", ru: "Тинкер", attr: "Intelligence", role: "Mid", difficulty: "Hard", icon: "tinker"},
    {name: "Warlock", ru: "Варлок", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "warlock"},
    {name: "Winter Wyvern", ru: "Виверна", attr: "Intelligence", role: "Support", difficulty: "Medium", icon: "winter_wyvern"},
    {name: "Witch Doctor", ru: "Витч Доктор", attr: "Intelligence", role: "Support", difficulty: "Easy", icon: "witch_doctor"},
    {name: "Zeus", ru: "Зевс", attr: "Intelligence", role: "Mid/Support", difficulty: "Easy", icon: "zuus"},

    // === УНИВЕРСАЛЬНЫЕ (Universal) - 16 героев ===
    {name: "Abaddon", ru: "Абаддон", attr: "Universal", role: "Support/Offlane", difficulty: "Easy", icon: "abaddon"},
    {name: "Alchemist", ru: "Алхимик", attr: "Universal", role: "Carry/Mid", difficulty: "Medium", icon: "alchemist"},
    {name: "Bane", ru: "Бейн", attr: "Universal", role: "Support", difficulty: "Medium", icon: "bane"},
    {name: "Dazzle", ru: "Дазл", attr: "Universal", role: "Support", difficulty: "Easy", icon: "dazzle"},
    {name: "Death Prophet", ru: "Дес Профет", attr: "Universal", role: "Mid/Offlane", difficulty: "Medium", icon: "death_prophet"},
    {name: "Doom", ru: "Дум", attr: "Universal", role: "Offlane", difficulty: "Medium", icon: "doom"},
    {name: "Lone Druid", ru: "Лоне Друид", attr: "Universal", role: "Carry/Mid", difficulty: "Hard", icon: "lone_druid"},
    {name: "Magnus", ru: "Магнус", attr: "Universal", role: "Offlane", difficulty: "Medium", icon: "magnus"},
    {name: "Nature's Prophet", ru: "Фурион", attr: "Universal", role: "Offlane/Support", difficulty: "Medium", icon: "natures_prophet"},
    {name: "Nyx Assassin", ru: "Никс Ассассин", attr: "Universal", role: "Support/Roamer", difficulty: "Medium", icon: "nyx_assassin"},
    {name: "Ogre Magi", ru: "Огр Маги", attr: "Universal", role: "Support", difficulty: "Easy", icon: "ogre_magi"},
    {name: "Pangolier", ru: "Панголье", attr: "Universal", role: "Mid/Offlane", difficulty: "Medium", icon: "pangolier"},
    {name: "Snapfire", ru: "Снапфаер", attr: "Universal", role: "Support/Offlane", difficulty: "Easy", icon: "snapfire"},
    {name: "Visage", ru: "Визаж", attr: "Universal", role: "Offlane/Support", difficulty: "Hard", icon: "visage"},
    {name: "Void Spirit", ru: "Войд Спирит", attr: "Universal", role: "Mid", difficulty: "Hard", icon: "void_spirit"},
    {name: "Windranger", ru: "Виндрейнджер", attr: "Universal", role: "Mid/Offlane/Support", difficulty: "Medium", icon: "windrunner"}
];

// ============================================
// РУССКИЕ СИНОНИМЫ И СЛЕНГ ГЕРОЕВ
// ============================================

const heroAliases = {
    'пудж': 'Pudge', 'пуджа': 'Pudge', 'пуджу': 'Pudge', 'пуджем': 'Pudge', 'хук': 'Pudge', 'крюк': 'Pudge',
    'инвокер': 'Invoker', 'инвокера': 'Invoker', 'инвокеру': 'Invoker', 'инва': 'Invoker',
    'джагер': 'Juggernaut', 'джаггернаут': 'Juggernaut', 'джаг': 'Juggernaut', 'джагг': 'Juggernaut',
    'антимаг': 'Anti-Mage', 'антимага': 'Anti-Mage', 'ам': 'Anti-Mage',
    'христиалка': 'Crystal Maiden', 'цмка': 'Crystal Maiden', 'кристалка': 'Crystal Maiden', 'майка': 'Crystal Maiden',
    'акс': 'Axe', 'акса': 'Axe',
    'снайпер': 'Sniper', 'снайпера': 'Sniper',
    'сф': 'Shadow Fiend', 'шадоу фиенд': 'Shadow Fiend',
    'па': 'Phantom Assassin', 'фантик': 'Phantom Assassin', 'фантомка': 'Phantom Assassin',
    'войд': 'Faceless Void', 'ликвойд': 'Faceless Void',
    'вр': 'Windranger', 'винда': 'Windranger', 'виндрейнджер': 'Windranger',
    'квопа': 'Queen of Pain', 'квопу': 'Queen of Pain', 'королева боли': 'Queen of Pain',
    'зевс': 'Zeus', 'зевса': 'Zeus',
    'фурион': "Nature's Prophet", 'натура': "Nature's Prophet", 'профет': "Nature's Prophet",
    'спирит': 'Storm Spirit', 'сторм': 'Storm Spirit',
    'морф': 'Morphling', 'морфлинг': 'Morphling',
    'терра': 'Terrorblade', 'террорблейд': 'Terrorblade',
    'спирит брейкер': 'Spirit Breaker', 'баратрум': 'Spirit Breaker',
    'лик': 'Lycan', 'ликан': 'Lycan', 'волк': 'Lycan',
    'друид': 'Lone Druid',
    'магнус': 'Magnus', 'магнуса': 'Magnus',
    'энигма': 'Enigma', 'энигму': 'Enigma',
    'рошан': 'Рошан', 'рош': 'Рошан',
    'ур': 'Ursa', 'урса': 'Ursa', 'медведь': 'Ursa',
    'вик': 'Viper', 'вайпер': 'Viper',
    'лич': 'Lich', 'лича': 'Lich',
    'леон': 'Lion', 'лион': 'Lion',
    'шаман': 'Shadow Shaman', 'шамана': 'Shadow Shaman',
    'рубик': 'Rubick', 'рубика': 'Rubick',
    'тп': 'ТП', 'свиток': 'ТП',
    'бкб': 'БКБ', 'бкб ': 'БКБ'
};

// ============================================
// ФИЛЬТРЫ И ПОИСК
// ============================================

let currentFilter = {search: '', attr: 'all', role: 'all', difficulty: 'all'};

const uniqueAttrs = [...new Set(heroesDB.map(h => h.attr))];
const uniqueRoles = [...new Set(heroesDB.flatMap(h => h.role.split('/')))];
const uniqueDifficulties = [...new Set(heroesDB.map(h => h.difficulty))];

// Перевод ролей на русский
const roleTranslations = {
    'Carry': 'Керри', 'Mid': 'Мид', 'Offlane': 'Оффлейн',
    'Support': 'Саппорт', 'Roamer': 'Роамер', 'Initiator': 'Инициатор'
};

// Перевод сложности на русский
const difficultyTranslations = {
    'Easy': 'Легко', 'Medium': 'Средне', 'Hard': 'Сложно', 'Very Hard': 'Очень сложно'
};

// Перевод атрибутов на русский
const attrTranslations = {
    'Strength': 'Сила', 'Agility': 'Ловкость',
    'Intelligence': 'Интеллект', 'Universal': 'Универсальный'
};

// ============================================
// ПОИСК ГЕРОЯ ПО ИМЕНИ (РУС/АНГЛ)
// ============================================

function findHero(query) {
    const lowerQ = query.toLowerCase();
    
    // 1. Ищем в сленге/синонимах
    for (const [alias, heroName] of Object.entries(heroAliases)) {
        if (lowerQ.includes(alias)) {
            const hero = heroesDB.find(h => h.name === heroName);
            if (hero) return hero;
        }
    }
    
    // 2. Ищем по английскому имени
    let hero = heroesDB.find(h => 
        lowerQ.includes(h.name.toLowerCase())
    );
    if (hero) return hero;
    
    // 3. Ищем по русскому имени
    hero = heroesDB.find(h => 
        lowerQ.includes(h.ru.toLowerCase())
    );
    if (hero) return hero;
    
    return null;
}

// ============================================
// ФИЛЬТРАЦИЯ ГЕРОЕВ
// ============================================

function filterHeroes() {
    return heroesDB.filter(hero => {
        const searchLower = currentFilter.search.toLowerCase();
        const matchSearch = !currentFilter.search || 
            hero.name.toLowerCase().includes(searchLower) ||
            hero.ru.toLowerCase().includes(searchLower);
        
        const matchAttr = currentFilter.attr === 'all' || hero.attr === currentFilter.attr;
        const matchRole = currentFilter.role === 'all' || hero.role.includes(currentFilter.role);
        const matchDifficulty = currentFilter.difficulty === 'all' || hero.difficulty === currentFilter.difficulty;
        
        return matchSearch && matchAttr && matchRole && matchDifficulty;
    });
}

// ============================================
// ОТОБРАЖЕНИЕ ГЕРОЕВ С ИКОНКАМИ
// ============================================

function displayHeroes(heroes) {
    const heroList = document.getElementById('heroList');
    const countElement = document.getElementById('heroCount');
    
    if (countElement) {
        countElement.textContent = `Найдено героев: ${heroes.length}`;
    }
    
    heroList.innerHTML = '';
    
    if (heroes.length === 0) {
        heroList.innerHTML = '<p style="text-align:center; padding:20px; opacity:0.7;">Герои не найдены 😔</p>';
        return;
    }
    
    heroes.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        
        // Цвет атрибута
        let attrColor = '#fff';
        if (hero.attr === 'Strength') attrColor = '#ec4848';
        if (hero.attr === 'Agility') attrColor = '#48ec6f';
        if (hero.attr === 'Intelligence') attrColor = '#48b4ec';
        if (hero.attr === 'Universal') attrColor = '#ecb448';
        
        // URL иконки
        const iconUrl = ICON_URL + hero.icon + '.png';
        
        // Заполняем карточку с иконкой и русским именем
        card.innerHTML = `
            <div class="hero-icon-wrapper">
                <img src="${iconUrl}" alt="${hero.name}" class="hero-icon" 
                     onerror="this.style.display='none'">
            </div>
            <h4 style="color:${attrColor}">${hero.name}</h4>
            <p class="hero-ru">${hero.ru}</p>
            <p class="hero-attr" style="color:${attrColor}">${attrTranslations[hero.attr]}</p>
            <p class="hero-role">${hero.role}</p>
            <p class="hero-diff">Сложность: ${difficultyTranslations[hero.difficulty]}</p>
        `;
        
        card.addEventListener('click', () => showHeroInfo(hero));
        heroList.appendChild(card);
    });
}

// ============================================
// ПОКАЗАТЬ ИНФОРМАЦИЮ О ГЕРОЕ В ЧАТЕ
// ============================================

function showHeroInfo(hero) {
    const iconUrl = ICON_URL + hero.icon + '.png';
    const message = `
        <div style="display:flex; align-items:center; gap:15px;">
            <img src="${iconUrl}" style="width:80px; height:45px; object-fit:cover; border-radius:6px; border:2px solid #e74c3c;">
            <div>
                <strong>${hero.name}</strong> (${hero.ru})<br>
                ⚔️ Атрибут: ${attrTranslations[hero.attr]}<br>
                🎯 Роль: ${hero.role}<br>
                ⭐ Сложность: ${difficultyTranslations[hero.difficulty]}
            </div>
        </div>
    `;
    addMessage(message, 'bot');
}

// ============================================
// СБРОС ФИЛЬТРОВ
// ============================================

function resetFilters() {
    currentFilter = {search: '', attr: 'all', role: 'all', difficulty: 'all'};
    document.getElementById('heroSearch').value = '';
    document.getElementById('filterAttr').value = 'all';
    document.getElementById('filterRole').value = 'all';
    document.getElementById('filterDifficulty').value = 'all';
    displayHeroes(filterHeroes());
}

// ============================================
// СОЗДАНИЕ ФИЛЬТРОВ (НА РУССКОМ)
// ============================================

function createFilters() {
    const filtersContainer = document.getElementById('filters');
    if (!filtersContainer) return;
    
    let html = '';
    
    // Фильтр по атрибуту (русский)
    html += `<select id="filterAttr" onchange="currentFilter.attr=this.value; displayHeroes(filterHeroes())">
        <option value="all">Все атрибуты</option>`;
    uniqueAttrs.forEach(attr => {
        html += `<option value="${attr}">${attrTranslations[attr]}</option>`;
    });
    html += '</select>';
    
    // Фильтр по роли (русский)
    html += `<select id="filterRole" onchange="currentFilter.role=this.value; displayHeroes(filterHeroes())">
        <option value="all">Все роли</option>`;
    uniqueRoles.sort().forEach(role => {
        const ruRole = roleTranslations[role] || role;
        html += `<option value="${role}">${ruRole}</option>`;
    });
    html += '</select>';
    
    // Фильтр по сложности (русский)
    html += `<select id="filterDifficulty" onchange="currentFilter.difficulty=this.value; displayHeroes(filterHeroes())">
        <option value="all">Любая сложность</option>`;
    uniqueDifficulties.forEach(diff => {
        html += `<option value="${diff}">${difficultyTranslations[diff]}</option>`;
    });
    html += '</select>';
    
    // Кнопка сброса
    html += '<button onclick="resetFilters()" class="reset-btn">Сбросить</button>';
    
    filtersContainer.innerHTML = html;
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createFilters();
    displayHeroes(filterHeroes());
    
    document.getElementById('heroSearch').addEventListener('input', (e) => {
        currentFilter.search = e.target.value;
        displayHeroes(filterHeroes());
    });
});
