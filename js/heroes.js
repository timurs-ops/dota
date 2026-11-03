// ============================================
// БАЗА ДАННЫХ 125 ГЕРОЕВ DOTA 2
// ============================================

const heroesDB = [
    // === СИЛА (Strength) - 35 героев ===
    {name: "Axe", attr: "Strength", role: "Offlane/Initiator", difficulty: "Easy"},
    {name: "Beastmaster", attr: "Strength", role: "Offlane", difficulty: "Medium"},
    {name: "Brewmaster", attr: "Strength", role: "Offlane", difficulty: "Hard"},
    {name: "Bristleback", attr: "Strength", role: "Offlane", difficulty: "Easy"},
    {name: "Centaur Warrunner", attr: "Strength", role: "Offlane", difficulty: "Easy"},
    {name: "Chaos Knight", attr: "Strength", role: "Carry", difficulty: "Easy"},
    {name: "Clockwerk", attr: "Strength", role: "Support/Offlane", difficulty: "Medium"},
    {name: "Dawnbreaker", attr: "Strength", role: "Carry/Offlane", difficulty: "Medium"},
    {name: "Dragon Knight", attr: "Strength", role: "Mid/Offlane", difficulty: "Easy"},
    {name: "Earth Spirit", attr: "Strength", role: "Support/Roamer", difficulty: "Hard"},
    {name: "Earthshaker", attr: "Strength", role: "Support", difficulty: "Medium"},
    {name: "Elder Titan", attr: "Strength", role: "Support/Offlane", difficulty: "Medium"},
    {name: "Huskar", attr: "Strength", role: "Mid", difficulty: "Medium"},
    {name: "Kunkka", attr: "Strength", role: "Mid/Offlane", difficulty: "Medium"},
    {name: "Legion Commander", attr: "Strength", role: "Offlane", difficulty: "Easy"},
    {name: "Lifestealer", attr: "Strength", role: "Carry", difficulty: "Easy"},
    {name: "Lycan", attr: "Strength", role: "Carry/Offlane", difficulty: "Medium"},
    {name: "Mars", attr: "Strength", role: "Offlane", difficulty: "Medium"},
    {name: "Night Stalker", attr: "Strength", role: "Offlane/Roamer", difficulty: "Easy"},
    {name: "Omniknight", attr: "Strength", role: "Support", difficulty: "Easy"},
    {name: "Phoenix", attr: "Strength", role: "Support", difficulty: "Medium"},
    {name: "Primal Beast", attr: "Strength", role: "Offlane", difficulty: "Easy"},
    {name: "Pudge", attr: "Strength", role: "Support/Roamer", difficulty: "Medium"},
    {name: "Sand King", attr: "Strength", role: "Offlane/Support", difficulty: "Medium"},
    {name: "Slardar", attr: "Strength", role: "Offlane/Carry", difficulty: "Easy"},
    {name: "Spirit Breaker", attr: "Strength", role: "Roamer/Support", difficulty: "Easy"},
    {name: "Sven", attr: "Strength", role: "Carry", difficulty: "Easy"},
    {name: "Tidehunter", attr: "Strength", role: "Offlane", difficulty: "Easy"},
    {name: "Timbersaw", attr: "Strength", role: "Offlane/Mid", difficulty: "Medium"},
    {name: "Tiny", attr: "Strength", role: "Mid/Offlane", difficulty: "Medium"},
    {name: "Treant Protector", attr: "Strength", role: "Support", difficulty: "Easy"},
    {name: "Tusk", attr: "Strength", role: "Roamer/Support", difficulty: "Medium"},
    {name: "Underlord", attr: "Strength", role: "Offlane", difficulty: "Medium"},
    {name: "Undying", attr: "Strength", role: "Offlane/Support", difficulty: "Easy"},
    {name: "Wraith King", attr: "Strength", role: "Carry", difficulty: "Easy"},

    // === ЛОВКОСТЬ (Agility) - 36 героев ===
    {name: "Anti-Mage", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Arc Warden", attr: "Agility", role: "Mid/Carry", difficulty: "Hard"},
    {name: "Bloodseeker", attr: "Agility", role: "Carry/Offlane", difficulty: "Easy"},
    {name: "Bounty Hunter", attr: "Agility", role: "Roamer/Support", difficulty: "Easy"},
    {name: "Broodmother", attr: "Agility", role: "Mid/Offlane", difficulty: "Medium"},
    {name: "Clinkz", attr: "Agility", role: "Carry/Mid", difficulty: "Medium"},
    {name: "Drow Ranger", attr: "Agility", role: "Carry", difficulty: "Easy"},
    {name: "Ember Spirit", attr: "Agility", role: "Mid", difficulty: "Hard"},
    {name: "Faceless Void", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Gyrocopter", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Hoodwink", attr: "Agility", role: "Support/Offlane", difficulty: "Medium"},
    {name: "Juggernaut", attr: "Agility", role: "Carry", difficulty: "Easy"},
    {name: "Kez", attr: "Agility", role: "Carry", difficulty: "Hard"},
    {name: "Luna", attr: "Agility", role: "Carry", difficulty: "Easy"},
    {name: "Marci", attr: "Agility", role: "Support/Offlane", difficulty: "Medium"},
    {name: "Medusa", attr: "Agility", role: "Carry", difficulty: "Easy"},
    {name: "Meepo", attr: "Agility", role: "Mid/Carry", difficulty: "Very Hard"},
    {name: "Mirana", attr: "Agility", role: "Support/Roamer", difficulty: "Medium"},
    {name: "Monkey King", attr: "Agility", role: "Carry/Offlane", difficulty: "Medium"},
    {name: "Morphling", attr: "Agility", role: "Carry/Mid", difficulty: "Hard"},
    {name: "Naga Siren", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Phantom Assassin", attr: "Agility", role: "Carry", difficulty: "Easy"},
    {name: "Phantom Lancer", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Razor", attr: "Agility", role: "Mid/Offlane", difficulty: "Medium"},
    {name: "Riki", attr: "Agility", role: "Carry/Roamer", difficulty: "Easy"},
    {name: "Shadow Fiend", attr: "Agility", role: "Mid/Carry", difficulty: "Hard"},
    {name: "Sniper", attr: "Agility", role: "Carry/Mid", difficulty: "Easy"},
    {name: "Spectre", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Templar Assassin", attr: "Agility", role: "Mid/Carry", difficulty: "Hard"},
    {name: "Terrorblade", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Troll Warlord", attr: "Agility", role: "Carry", difficulty: "Medium"},
    {name: "Ursa", attr: "Agility", role: "Carry", difficulty: "Easy"},
    {name: "Vengeful Spirit", attr: "Agility", role: "Support", difficulty: "Easy"},
    {name: "Venomancer", attr: "Agility", role: "Support/Offlane", difficulty: "Easy"},
    {name: "Viper", attr: "Agility", role: "Mid/Offlane", difficulty: "Easy"},
    {name: "Weaver", attr: "Agility", role: "Carry/Offlane", difficulty: "Medium"},

    // === ИНТЕЛЛЕКТ (Intelligence) - 38 героев ===
    {name: "Ancient Apparition", attr: "Intelligence", role: "Support", difficulty: "Medium"},
    {name: "Batrider", attr: "Intelligence", role: "Offlane/Mid", difficulty: "Medium"},
    {name: "Chen", attr: "Intelligence", role: "Support/Roamer", difficulty: "Very Hard"},
    {name: "Crystal Maiden", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Dark Seer", attr: "Intelligence", role: "Offlane", difficulty: "Medium"},
    {name: "Dark Willow", attr: "Intelligence", role: "Support", difficulty: "Medium"},
    {name: "Disruptor", attr: "Intelligence", role: "Support", difficulty: "Medium"},
    {name: "Enchantress", attr: "Intelligence", role: "Support/Offlane", difficulty: "Medium"},
    {name: "Enigma", attr: "Intelligence", role: "Offlane/Support", difficulty: "Medium"},
    {name: "Grimstroke", attr: "Intelligence", role: "Support", difficulty: "Medium"},
    {name: "Invoker", attr: "Intelligence", role: "Mid", difficulty: "Very Hard"},
    {name: "Io", attr: "Intelligence", role: "Support", difficulty: "Very Hard"},
    {name: "Jakiro", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Keeper of the Light", attr: "Intelligence", role: "Support/Mid", difficulty: "Medium"},
    {name: "Leshrac", attr: "Intelligence", role: "Mid/Offlane", difficulty: "Medium"},
    {name: "Lich", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Lina", attr: "Intelligence", role: "Mid/Support", difficulty: "Medium"},
    {name: "Lion", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Muerta", attr: "Intelligence", role: "Carry/Support", difficulty: "Medium"},
    {name: "Necrophos", attr: "Intelligence", role: "Offlane/Mid", difficulty: "Easy"},
    {name: "Oracle", attr: "Intelligence", role: "Support", difficulty: "Hard"},
    {name: "Outworld Destroyer", attr: "Intelligence", role: "Mid", difficulty: "Medium"},
    {name: "Puck", attr: "Intelligence", role: "Mid", difficulty: "Hard"},
    {name: "Pugna", attr: "Intelligence", role: "Support/Mid", difficulty: "Medium"},
    {name: "Queen of Pain", attr: "Intelligence", role: "Mid", difficulty: "Medium"},
    {name: "Ringmaster", attr: "Intelligence", role: "Support", difficulty: "Medium"},
    {name: "Rubick", attr: "Intelligence", role: "Support", difficulty: "Hard"},
    {name: "Shadow Demon", attr: "Intelligence", role: "Support", difficulty: "Hard"},
    {name: "Shadow Shaman", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Silencer", attr: "Intelligence", role: "Support/Offlane", difficulty: "Medium"},
    {name: "Skywrath Mage", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Storm Spirit", attr: "Intelligence", role: "Mid", difficulty: "Hard"},
    {name: "Techies", attr: "Intelligence", role: "Support/Offlane", difficulty: "Medium"},
    {name: "Tinker", attr: "Intelligence", role: "Mid", difficulty: "Hard"},
    {name: "Warlock", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Winter Wyvern", attr: "Intelligence", role: "Support", difficulty: "Medium"},
    {name: "Witch Doctor", attr: "Intelligence", role: "Support", difficulty: "Easy"},
    {name: "Zeus", attr: "Intelligence", role: "Mid/Support", difficulty: "Easy"},

    // === УНИВЕРСАЛЬНЫЕ (Universal) - 16 героев ===
    {name: "Abaddon", attr: "Universal", role: "Support/Offlane", difficulty: "Easy"},
    {name: "Alchemist", attr: "Universal", role: "Carry/Mid", difficulty: "Medium"},
    {name: "Bane", attr: "Universal", role: "Support", difficulty: "Medium"},
    {name: "Dazzle", attr: "Universal", role: "Support", difficulty: "Easy"},
    {name: "Death Prophet", attr: "Universal", role: "Mid/Offlane", difficulty: "Medium"},
    {name: "Doom", attr: "Universal", role: "Offlane", difficulty: "Medium"},
    {name: "Lone Druid", attr: "Universal", role: "Carry/Mid", difficulty: "Hard"},
    {name: "Magnus", attr: "Universal", role: "Offlane", difficulty: "Medium"},
    {name: "Nature's Prophet", attr: "Universal", role: "Offlane/Support", difficulty: "Medium"},
    {name: "Nyx Assassin", attr: "Universal", role: "Support/Roamer", difficulty: "Medium"},
    {name: "Ogre Magi", attr: "Universal", role: "Support", difficulty: "Easy"},
    {name: "Pangolier", attr: "Universal", role: "Mid/Offlane", difficulty: "Medium"},
    {name: "Snapfire", attr: "Universal", role: "Support/Offlane", difficulty: "Easy"},
    {name: "Visage", attr: "Universal", role: "Offlane/Support", difficulty: "Hard"},
    {name: "Void Spirit", attr: "Universal", role: "Mid", difficulty: "Hard"},
    {name: "Windranger", attr: "Universal", role: "Mid/Offlane/Support", difficulty: "Medium"}
];

// ============================================
// ТЕКУЩИЕ ФИЛЬТРЫ
// ============================================

let currentFilter = {
    search: '',
    attr: 'all',
    role: 'all',
    difficulty: 'all'
};

// Получаем уникальные значения для фильтров
const uniqueAttrs = [...new Set(heroesDB.map(h => h.attr))];
const uniqueRoles = [...new Set(heroesDB.flatMap(h => h.role.split('/')))];
const uniqueDifficulties = [...new Set(heroesDB.map(h => h.difficulty))];

// ============================================
// ФУНКЦИЯ ФИЛЬТРАЦИИ ГЕРОЕВ
// ============================================

function filterHeroes() {
    return heroesDB.filter(hero => {
        // Проверка поиска по имени
        const matchSearch = !currentFilter.search || 
            hero.name.toLowerCase().includes(currentFilter.search.toLowerCase());
        
        // Проверка фильтра по атрибуту
        const matchAttr = currentFilter.attr === 'all' || 
            hero.attr === currentFilter.attr;
        
        // Проверка фильтра по роли
        const matchRole = currentFilter.role === 'all' || 
            hero.role.includes(currentFilter.role);
        
        // Проверка фильтра по сложности
        const matchDifficulty = currentFilter.difficulty === 'all' || 
            hero.difficulty === currentFilter.difficulty;
        
        return matchSearch && matchAttr && matchRole && matchDifficulty;
    });
}

// ============================================
// ОТОБРАЖЕНИЕ ГЕРОЕВ
// ============================================

function displayHeroes(heroes) {
    const heroList = document.getElementById('heroList');
    const countElement = document.getElementById('heroCount');
    
    // Обновляем счётчик
    if (countElement) {
        countElement.textContent = `Найдено героев: ${heroes.length}`;
    }
    
    // Очищаем список
    heroList.innerHTML = '';
    
    // Если героев не найдено
    if (heroes.length === 0) {
        heroList.innerHTML = '<p style="text-align:center; padding:20px; opacity:0.7;">Герои не найдены 😔</p>';
        return;
    }
    
    // Создаём карточки героев
    heroes.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'hero-card';
        
        // Определяем цвет атрибута
        let attrColor = '#fff';
        if (hero.attr === 'Strength') attrColor = '#ec4848';      // Красный
        if (hero.attr === 'Agility') attrColor = '#48ec6f';       // Зелёный
        if (hero.attr === 'Intelligence') attrColor = '#48b4ec';  // Синий
        if (hero.attr === 'Universal') attrColor = '#ecb448';     // Жёлтый
        
        // Заполняем карточку
        card.innerHTML = `
            <h4 style="color:${attrColor}">${hero.name}</h4>
            <p class="hero-attr"><strong>${hero.attr}</strong></p>
            <p class="hero-role">${hero.role}</p>
            <p class="hero-diff">Сложность: ${hero.difficulty}</p>
        `;
        
        // Добавляем обработчик клика
        card.addEventListener('click', () => showHeroInfo(hero));
        heroList.appendChild(card);
    });
}

// ============================================
// ПОКАЗАТЬ ИНФОРМАЦИЮ О ГЕРОЕ В ЧАТЕ
// ============================================

function showHeroInfo(hero) {
    const message = `📋 <strong>${hero.name}</strong><br>` +
                   `⚔️ Атрибут: ${hero.attr}<br>` +
                   `🎯 Роль: ${hero.role}<br>` +
                   `⭐ Сложность: ${hero.difficulty}`;
    
    addMessage(message, 'bot');
}

// ============================================
// СБРОС ФИЛЬТРОВ
// ============================================

function resetFilters() {
    currentFilter = {search: '', attr: 'all', role: 'all', difficulty: 'all'};
    
    // Сбрасываем значения полей
    document.getElementById('heroSearch').value = '';
    document.getElementById('filterAttr').value = 'all';
    document.getElementById('filterRole').value = 'all';
    document.getElementById('filterDifficulty').value = 'all';
    
    // Обновляем отображение
    displayHeroes(filterHeroes());
}

// ============================================
// СОЗДАНИЕ ЭЛЕМЕНТОВ ФИЛЬТРОВ
// ============================================

function createFilters() {
    const filtersContainer = document.getElementById('filters');
    if (!filtersContainer) return;
    
    let html = '';
    
    // Фильтр по атрибуту
    html += `<select id="filterAttr" onchange="currentFilter.attr=this.value; displayHeroes(filterHeroes())">
        <option value="all">Все атрибуты</option>`;
    uniqueAttrs.forEach(attr => {
        html += `<option value="${attr}">${attr}</option>`;
    });
    html += '</select>';
    
    // Фильтр по роли
    html += `<select id="filterRole" onchange="currentFilter.role=this.value; displayHeroes(filterHeroes())">
        <option value="all">Все роли</option>`;
    uniqueRoles.sort().forEach(role => {
        html += `<option value="${role}">${role}</option>`;
    });
    html += '</select>';
    
    // Фильтр по сложности
    html += `<select id="filterDifficulty" onchange="currentFilter.difficulty=this.value; displayHeroes(filterHeroes())">
        <option value="all">Любая сложность</option>`;
    uniqueDifficulties.forEach(diff => {
        html += `<option value="${diff}">${diff}</option>`;
    });
    html += '</select>';
    
    // Кнопка сброса
    html += '<button onclick="resetFilters()" class="reset-btn">Сбросить</button>';
    
    filtersContainer.innerHTML = html;
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Создаём фильтры
    createFilters();
    
    // Показываем всех героев
    displayHeroes(filterHeroes());
    
    // Обработчик поиска при вводе
    document.getElementById('heroSearch').addEventListener('input', (e) => {
        currentFilter.search = e.target.value;
        displayHeroes(filterHeroes());
    });
});
