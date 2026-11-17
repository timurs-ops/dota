// ============================================
// МЕТА: Встроенные данные (работает без fetch, мгновенно и без ошибок)
// ============================================

const LOCAL_META_DATA = [
    {"id":1,"localized_name":"Anti-Mage","pub_win":0.502,"pub_pick":0.045,"pro_win":0.48,"pro_pick":0.02,"items":["battle_fury","manta","abyssal_blade","butterfly","black_king_bar"]},
    {"id":2,"localized_name":"Axe","pub_win":0.512,"pub_pick":0.038,"pro_win":0.47,"pro_pick":0.01,"items":["blink","blade_mail","heart","crimson_guard","pipe"]},
    {"id":3,"localized_name":"Bane","pub_win":0.508,"pub_pick":0.022,"pro_win":0.49,"pro_pick":0.015,"items":["ultimate_scepter","force_staff","glimmer_cape","guardian_greaves","aether_lens"]},
    {"id":4,"localized_name":"Bloodseeker","pub_win":0.515,"pub_pick":0.030,"pro_win":0.46,"pro_pick":0.008,"items":["black_king_bar","heart","blink","ultimate_scepter","assault_cuirass"]},
    {"id":5,"localized_name":"Crystal Maiden","pub_win":0.518,"pub_pick":0.055,"pro_win":0.51,"pro_pick":0.04,"items":["ultimate_scepter","force_staff","glimmer_cape","guardian_greaves","aether_lens"]},
    {"id":6,"localized_name":"Drow Ranger","pub_win":0.509,"pub_pick":0.042,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","manta","dragon_lance","hurricane_pike","ultimate_scepter"]},
    {"id":7,"localized_name":"Earthshaker","pub_win":0.498,"pub_pick":0.028,"pro_win":0.46,"pro_pick":0.02,"items":["blink","ultimate_scepter","force_staff","glimmer_cape","aether_lens"]},
    {"id":8,"localized_name":"Juggernaut","pub_win":0.514,"pub_pick":0.052,"pro_win":0.50,"pro_pick":0.03,"items":["manta","black_king_bar","butterfly","ultimate_scepter","abyssal_blade"]},
    {"id":9,"localized_name":"Mirana","pub_win":0.501,"pub_pick":0.035,"pro_win":0.47,"pro_pick":0.02,"items":["ultimate_scepter","manta","black_king_bar","blink","monkey_king_bar"]},
    {"id":10,"localized_name":"Morphling","pub_win":0.488,"pub_pick":0.018,"pro_win":0.44,"pro_pick":0.01,"items":["black_king_bar","manta","butterfly","skadi","ultimate_scepter"]},
    {"id":11,"localized_name":"Shadow Fiend","pub_win":0.492,"pub_pick":0.040,"pro_win":0.45,"pro_pick":0.02,"items":["black_king_bar","manta","butterfly","ultimate_scepter","blink"]},
    {"id":12,"localized_name":"Phantom Lancer","pub_win":0.506,"pub_pick":0.025,"pro_win":0.47,"pro_pick":0.01,"items":["manta","black_king_bar","butterfly","heart","diffusal_blade"]},
    {"id":13,"localized_name":"Puck","pub_win":0.495,"pub_pick":0.022,"pro_win":0.46,"pro_pick":0.02,"items":["blink","ultimate_scepter","force_staff","glimmer_cape","aether_lens"]},
    {"id":14,"localized_name":"Pudge","pub_win":0.487,"pub_pick":0.085,"pro_win":0.42,"pro_pick":0.01,"items":["blink","heart","blade_mail","ultimate_scepter","aether_lens"]},
    {"id":15,"localized_name":"Razor","pub_win":0.503,"pub_pick":0.020,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","linken_sphere","ultimate_scepter"]},
    {"id":16,"localized_name":"Sand King","pub_win":0.508,"pub_pick":0.028,"pro_win":0.49,"pro_pick":0.02,"items":["blink","ultimate_scepter","force_staff","glimmer_cape","aether_lens"]},
    {"id":17,"localized_name":"Storm Spirit","pub_win":0.490,"pub_pick":0.025,"pro_win":0.45,"pro_pick":0.02,"items":["black_king_bar","bloodstone","linken_sphere","orchid","ultimate_scepter"]},
    {"id":18,"localized_name":"Sven","pub_win":0.511,"pub_pick":0.032,"pro_win":0.48,"pro_pick":0.01,"items":["black_king_bar","greater_crit","heart","assault_cuirass","ultimate_scepter"]},
    {"id":19,"localized_name":"Tiny","pub_win":0.500,"pub_pick":0.024,"pro_win":0.47,"pro_pick":0.015,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":20,"localized_name":"Vengeful Spirit","pub_win":0.513,"pub_pick":0.030,"pro_win":0.50,"pro_pick":0.025,"items":["ultimate_scepter","force_staff","glimmer_cape","guardian_greaves","aether_lens"]},
    {"id":21,"localized_name":"Windranger","pub_win":0.505,"pub_pick":0.035,"pro_win":0.48,"pro_pick":0.02,"items":["black_king_bar","manta","linken_sphere","ultimate_scepter","aghanims_shard"]},
    {"id":22,"localized_name":"Zeus","pub_win":0.510,"pub_pick":0.040,"pro_win":0.49,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","aether_lens","octarine_core","refresher"]},
    {"id":23,"localized_name":"Kunkka","pub_win":0.502,"pub_pick":0.022,"pro_win":0.47,"pro_pick":0.01,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":25,"localized_name":"Lina","pub_win":0.508,"pub_pick":0.038,"pro_win":0.49,"pro_pick":0.02,"items":["ultimate_scepter","black_king_bar","linken_sphere","aether_lens","octarine_core"]},
    {"id":26,"localized_name":"Lion","pub_win":0.516,"pub_pick":0.045,"pro_win":0.50,"pro_pick":0.03,"items":["ultimate_scepter","force_staff","glimmer_cape","aether_lens","aghanims_shard"]},
    {"id":27,"localized_name":"Shadow Shaman","pub_win":0.512,"pub_pick":0.032,"pro_win":0.49,"pro_pick":0.02,"items":["ultimate_scepter","force_staff","glimmer_cape","aether_lens","guardian_greaves"]},
    {"id":28,"localized_name":"Slardar","pub_win":0.509,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":29,"localized_name":"Tidehunter","pub_win":0.514,"pub_pick":0.028,"pro_win":0.50,"pro_pick":0.02,"items":["blink","refresher","heart","pipe","guardian_greaves"]},
    {"id":30,"localized_name":"Witch Doctor","pub_win":0.520,"pub_pick":0.042,"pro_win":0.51,"pro_pick":0.03,"items":["ultimate_scepter","aghanims_shard","glimmer_cape","force_staff","aether_lens"]},
    {"id":31,"localized_name":"Lich","pub_win":0.515,"pub_pick":0.038,"pro_win":0.50,"pro_pick":0.025,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":32,"localized_name":"Riki","pub_win":0.507,"pub_pick":0.030,"pro_win":0.47,"pro_pick":0.01,"items":["black_king_bar","manta","diffusal_blade","butterfly","ultimate_scepter"]},
    {"id":33,"localized_name":"Enigma","pub_win":0.498,"pub_pick":0.020,"pro_win":0.46,"pro_pick":0.015,"items":["blink","refresher","black_king_bar","heart","ultimate_scepter"]},
    {"id":34,"localized_name":"Tinker","pub_win":0.492,"pub_pick":0.025,"pro_win":0.44,"pro_pick":0.01,"items":["ultimate_scepter","refresher","aether_lens","octarine_core","scythe_of_vyse"]},
    {"id":35,"localized_name":"Sniper","pub_win":0.503,"pub_pick":0.050,"pro_win":0.46,"pro_pick":0.01,"items":["black_king_bar","manta","hurricane_pike","greater_crit","ultimate_scepter"]},
    {"id":36,"localized_name":"Necrophos","pub_win":0.511,"pub_pick":0.035,"pro_win":0.49,"pro_pick":0.02,"items":["heart","black_king_bar","ultimate_scepter","refresher","shivas_guard"]},
    {"id":37,"localized_name":"Warlock","pub_win":0.513,"pub_pick":0.028,"pro_win":0.50,"pro_pick":0.02,"items":["ultimate_scepter","refresher","force_staff","glimmer_cape","aether_lens"]},
    {"id":38,"localized_name":"Beastmaster","pub_win":0.500,"pub_pick":0.018,"pro_win":0.47,"pro_pick":0.01,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":39,"localized_name":"Queen of Pain","pub_win":0.495,"pub_pick":0.030,"pro_win":0.46,"pro_pick":0.02,"items":["black_king_bar","ultimate_scepter","linken_sphere","aether_lens","octarine_core"]},
    {"id":40,"localized_name":"Venomancer","pub_win":0.508,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":41,"localized_name":"Faceless Void","pub_win":0.506,"pub_pick":0.032,"pro_win":0.48,"pro_pick":0.02,"items":["black_king_bar","manta","butterfly","abyssal_blade","ultimate_scepter"]},
    {"id":42,"localized_name":"Death Prophet","pub_win":0.504,"pub_pick":0.028,"pro_win":0.47,"pro_pick":0.015,"items":["black_king_bar","ultimate_scepter","heart","shivas_guard","octarine_core"]},
    {"id":43,"localized_name":"Phantom Assassin","pub_win":0.510,"pub_pick":0.055,"pro_win":0.48,"pro_pick":0.02,"items":["black_king_bar","butterfly","desolator","abyssal_blade","satanic"]},
    {"id":44,"localized_name":"Pugna","pub_win":0.502,"pub_pick":0.022,"pro_win":0.47,"pro_pick":0.015,"items":["ultimate_scepter","aether_lens","octarine_core","refresher","aghanims_shard"]},
    {"id":45,"localized_name":"Templar Assassin","pub_win":0.494,"pub_pick":0.025,"pro_win":0.45,"pro_pick":0.015,"items":["black_king_bar","manta","desolator","assault_cuirass","ultimate_scepter"]},
    {"id":46,"localized_name":"Viper","pub_win":0.512,"pub_pick":0.030,"pro_win":0.49,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","skadi"]},
    {"id":47,"localized_name":"Luna","pub_win":0.509,"pub_pick":0.035,"pro_win":0.48,"pro_pick":0.02,"items":["black_king_bar","manta","butterfly","satanic","ultimate_scepter"]},
    {"id":48,"localized_name":"Dragon Knight","pub_win":0.511,"pub_pick":0.032,"pro_win":0.49,"pro_pick":0.02,"items":["black_king_bar","blink","heart","assault_cuirass","ultimate_scepter"]},
    {"id":49,"localized_name":"Dazzle","pub_win":0.514,"pub_pick":0.038,"pro_win":0.50,"pro_pick":0.025,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":50,"localized_name":"Clockwerk","pub_win":0.503,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["blink","ultimate_scepter","heart","black_king_bar","aether_lens"]},
    {"id":51,"localized_name":"Leshrac","pub_win":0.500,"pub_pick":0.022,"pro_win":0.47,"pro_pick":0.015,"items":["black_king_bar","ultimate_scepter","heart","aether_lens","octarine_core"]},
    {"id":52,"localized_name":"Nature's Prophet","pub_win":0.498,"pub_pick":0.028,"pro_win":0.46,"pro_pick":0.01,"items":["black_king_bar","manta","greater_crit","heart","ultimate_scepter"]},
    {"id":53,"localized_name":"Lifestealer","pub_win":0.507,"pub_pick":0.030,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","satanic","ultimate_scepter"]},
    {"id":54,"localized_name":"Dark Seer","pub_win":0.495,"pub_pick":0.018,"pro_win":0.46,"pro_pick":0.01,"items":["blink","ultimate_scepter","force_staff","heart","pipe"]},
    {"id":55,"localized_name":"Clinkz","pub_win":0.504,"pub_pick":0.025,"pro_win":0.47,"pro_pick":0.01,"items":["black_king_bar","manta","butterfly","desolator","ultimate_scepter"]},
    {"id":56,"localized_name":"Omniknight","pub_win":0.513,"pub_pick":0.022,"pro_win":0.49,"pro_pick":0.015,"items":["ultimate_scepter","refresher","heart","pipe","guardian_greaves"]},
    {"id":57,"localized_name":"Enchantress","pub_win":0.501,"pub_pick":0.020,"pro_win":0.47,"pro_pick":0.01,"items":["black_king_bar","heart","ultimate_scepter","aghanims_shard","force_staff"]},
    {"id":58,"localized_name":"Huskar","pub_win":0.508,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.01,"items":["black_king_bar","heart","satanic","assault_cuirass","ultimate_scepter"]},
    {"id":59,"localized_name":"Night Stalker","pub_win":0.510,"pub_pick":0.022,"pro_win":0.49,"pro_pick":0.01,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","abyssal_blade"]},
    {"id":60,"localized_name":"Broodmother","pub_win":0.502,"pub_pick":0.015,"pro_win":0.46,"pro_pick":0.005,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":61,"localized_name":"Bounty Hunter","pub_win":0.506,"pub_pick":0.028,"pro_win":0.48,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":62,"localized_name":"Weaver","pub_win":0.505,"pub_pick":0.025,"pro_win":0.47,"pro_pick":0.01,"items":["black_king_bar","manta","butterfly","desolator","ultimate_scepter"]},
    {"id":63,"localized_name":"Jakiro","pub_win":0.515,"pub_pick":0.032,"pro_win":0.50,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":64,"localized_name":"Batrider","pub_win":0.498,"pub_pick":0.020,"pro_win":0.46,"pro_pick":0.015,"items":["blink","ultimate_scepter","black_king_bar","heart","force_staff"]},
    {"id":65,"localized_name":"Chen","pub_win":0.492,"pub_pick":0.012,"pro_win":0.45,"pro_pick":0.008,"items":["ultimate_scepter","force_staff","glimmer_cape","guardian_greaves","aether_lens"]},
    {"id":66,"localized_name":"Spectre","pub_win":0.511,"pub_pick":0.035,"pro_win":0.49,"pro_pick":0.02,"items":["manta","heart","butterfly","black_king_bar","ultimate_scepter"]},
    {"id":67,"localized_name":"Ancient Apparition","pub_win":0.512,"pub_pick":0.030,"pro_win":0.49,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":68,"localized_name":"Doom","pub_win":0.504,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":69,"localized_name":"Ursa","pub_win":0.509,"pub_pick":0.030,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","heart","blink","abyssal_blade","satanic"]},
    {"id":70,"localized_name":"Spirit Breaker","pub_win":0.507,"pub_pick":0.035,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","blink"]},
    {"id":71,"localized_name":"Gyrocopter","pub_win":0.505,"pub_pick":0.025,"pro_win":0.47,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","ultimate_scepter","aghanims_shard"]},
    {"id":72,"localized_name":"Alchemist","pub_win":0.508,"pub_pick":0.028,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":73,"localized_name":"Invoker","pub_win":0.488,"pub_pick":0.048,"pro_win":0.44,"pro_pick":0.02,"items":["black_king_bar","ultimate_scepter","linken_sphere","aether_lens","octarine_core"]},
    {"id":74,"localized_name":"Silencer","pub_win":0.510,"pub_pick":0.032,"pro_win":0.49,"pro_pick":0.02,"items":["ultimate_scepter","black_king_bar","heart","aether_lens","octarine_core"]},
    {"id":75,"localized_name":"Outworld Destroyer","pub_win":0.506,"pub_pick":0.028,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","ultimate_scepter","heart","aether_lens","octarine_core"]},
    {"id":76,"localized_name":"Lycan","pub_win":0.503,"pub_pick":0.018,"pro_win":0.47,"pro_pick":0.01,"items":["black_king_bar","heart","assault_cuirass","blink","ultimate_scepter"]},
    {"id":77,"localized_name":"Brewmaster","pub_win":0.500,"pub_pick":0.015,"pro_win":0.47,"pro_pick":0.01,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":78,"localized_name":"Shadow Demon","pub_win":0.502,"pub_pick":0.022,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","force_staff","glimmer_cape","aether_lens","aghanims_shard"]},
    {"id":79,"localized_name":"Lone Druid","pub_win":0.495,"pub_pick":0.018,"pro_win":0.45,"pro_pick":0.01,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":80,"localized_name":"Chaos Knight","pub_win":0.512,"pub_pick":0.028,"pro_win":0.49,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","abyssal_blade","ultimate_scepter"]},
    {"id":81,"localized_name":"Meepo","pub_win":0.490,"pub_pick":0.015,"pro_win":0.44,"pro_pick":0.008,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":82,"localized_name":"Treant Protector","pub_win":0.514,"pub_pick":0.025,"pro_win":0.50,"pro_pick":0.015,"items":["ultimate_scepter","force_staff","glimmer_cape","guardian_greaves","aether_lens"]},
    {"id":83,"localized_name":"Ogre Magi","pub_win":0.516,"pub_pick":0.035,"pro_win":0.50,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":84,"localized_name":"Undying","pub_win":0.513,"pub_pick":0.028,"pro_win":0.49,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":85,"localized_name":"Rubick","pub_win":0.498,"pub_pick":0.035,"pro_win":0.47,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":86,"localized_name":"Disruptor","pub_win":0.505,"pub_pick":0.022,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":87,"localized_name":"Nyx Assassin","pub_win":0.508,"pub_pick":0.030,"pro_win":0.49,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":88,"localized_name":"Naga Siren","pub_win":0.504,"pub_pick":0.020,"pro_win":0.47,"pro_pick":0.01,"items":["manta","heart","butterfly","black_king_bar","ultimate_scepter"]},
    {"id":89,"localized_name":"Keeper of the Light","pub_win":0.502,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":90,"localized_name":"Io","pub_win":0.492,"pub_pick":0.018,"pro_win":0.45,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":91,"localized_name":"Visage","pub_win":0.500,"pub_pick":0.015,"pro_win":0.47,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":92,"localized_name":"Slark","pub_win":0.507,"pub_pick":0.035,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","abyssal_blade","ultimate_scepter"]},
    {"id":93,"localized_name":"Medusa","pub_win":0.509,"pub_pick":0.022,"pro_win":0.48,"pro_pick":0.01,"items":["manta","butterfly","skadi","heart","black_king_bar"]},
    {"id":94,"localized_name":"Troll Warlord","pub_win":0.511,"pub_pick":0.028,"pro_win":0.49,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","abyssal_blade","ultimate_scepter"]},
    {"id":95,"localized_name":"Centaur Warrunner","pub_win":0.513,"pub_pick":0.030,"pro_win":0.50,"pro_pick":0.02,"items":["blink","heart","pipe","crimson_guard","ultimate_scepter"]},
    {"id":96,"localized_name":"Magnus","pub_win":0.502,"pub_pick":0.028,"pro_win":0.48,"pro_pick":0.02,"items":["blink","ultimate_scepter","force_staff","glimmer_cape","aether_lens"]},
    {"id":97,"localized_name":"Timbersaw","pub_win":0.504,"pub_pick":0.022,"pro_win":0.47,"pro_pick":0.015,"items":["black_king_bar","heart","pipe","crimson_guard","ultimate_scepter"]},
    {"id":98,"localized_name":"Bristleback","pub_win":0.510,"pub_pick":0.032,"pro_win":0.49,"pro_pick":0.015,"items":["black_king_bar","heart","pipe","crimson_guard","ultimate_scepter"]},
    {"id":99,"localized_name":"Tusk","pub_win":0.505,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":100,"localized_name":"Skywrath Mage","pub_win":0.515,"pub_pick":0.035,"pro_win":0.50,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":101,"localized_name":"Abaddon","pub_win":0.512,"pub_pick":0.028,"pro_win":0.49,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":102,"localized_name":"Elder Titan","pub_win":0.503,"pub_pick":0.018,"pro_win":0.47,"pro_pick":0.01,"items":["blink","ultimate_scepter","force_staff","glimmer_cape","aether_lens"]},
    {"id":103,"localized_name":"Legion Commander","pub_win":0.509,"pub_pick":0.032,"pro_win":0.48,"pro_pick":0.015,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":104,"localized_name":"Techies","pub_win":0.501,"pub_pick":0.020,"pro_win":0.47,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":105,"localized_name":"Ember Spirit","pub_win":0.494,"pub_pick":0.025,"pro_win":0.46,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","greater_crit","ultimate_scepter"]},
    {"id":106,"localized_name":"Earth Spirit","pub_win":0.496,"pub_pick":0.020,"pro_win":0.46,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":107,"localized_name":"Underlord","pub_win":0.508,"pub_pick":0.022,"pro_win":0.48,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":108,"localized_name":"Terrorblade","pub_win":0.506,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["manta","butterfly","black_king_bar","heart","ultimate_scepter"]},
    {"id":109,"localized_name":"Phoenix","pub_win":0.504,"pub_pick":0.020,"pro_win":0.47,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":110,"localized_name":"Oracle","pub_win":0.502,"pub_pick":0.018,"pro_win":0.47,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":111,"localized_name":"Winter Wyvern","pub_win":0.511,"pub_pick":0.022,"pro_win":0.49,"pro_pick":0.01,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":112,"localized_name":"Arc Warden","pub_win":0.495,"pub_pick":0.018,"pro_win":0.45,"pro_pick":0.008,"items":["black_king_bar","manta","butterfly","heart","ultimate_scepter"]},
    {"id":113,"localized_name":"Monkey King","pub_win":0.503,"pub_pick":0.028,"pro_win":0.47,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","abyssal_blade","ultimate_scepter"]},
    {"id":114,"localized_name":"Dark Willow","pub_win":0.507,"pub_pick":0.030,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":119,"localized_name":"Pangolier","pub_win":0.502,"pub_pick":0.025,"pro_win":0.47,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":120,"localized_name":"Grimstroke","pub_win":0.510,"pub_pick":0.028,"pro_win":0.49,"pro_pick":0.02,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":121,"localized_name":"Hoodwink","pub_win":0.505,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","aether_lens"]},
    {"id":123,"localized_name":"Void Spirit","pub_win":0.496,"pub_pick":0.022,"pro_win":0.46,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","ultimate_scepter","aghanims_shard"]},
    {"id":126,"localized_name":"Snapfire","pub_win":0.508,"pub_pick":0.028,"pro_win":0.48,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":128,"localized_name":"Mars","pub_win":0.506,"pub_pick":0.030,"pro_win":0.48,"pro_pick":0.02,"items":["blink","black_king_bar","heart","assault_cuirass","ultimate_scepter"]},
    {"id":129,"localized_name":"Dawnbreaker","pub_win":0.509,"pub_pick":0.028,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":135,"localized_name":"Marci","pub_win":0.507,"pub_pick":0.025,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":136,"localized_name":"Primal Beast","pub_win":0.505,"pub_pick":0.022,"pro_win":0.47,"pro_pick":0.01,"items":["black_king_bar","heart","assault_cuirass","ultimate_scepter","aghanims_shard"]},
    {"id":137,"localized_name":"Muerta","pub_win":0.508,"pub_pick":0.030,"pro_win":0.48,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","ultimate_scepter","aghanims_shard"]},
    {"id":138,"localized_name":"Ringmaster","pub_win":0.510,"pub_pick":0.025,"pro_win":0.49,"pro_pick":0.015,"items":["ultimate_scepter","aghanims_shard","force_staff","glimmer_cape","guardian_greaves"]},
    {"id":139,"localized_name":"Kez","pub_win":0.504,"pub_pick":0.028,"pro_win":0.47,"pro_pick":0.015,"items":["black_king_bar","manta","butterfly","ultimate_scepter","aghanims_shard"]},
    {"id":140,"localized_name":"Wraith King","pub_win":0.513,"pub_pick":0.035,"pro_win":0.49,"pro_pick":0.015,"items":["black_king_bar","heart","assault_cuirass","abyssal_blade","ultimate_scepter"]}
];

let liveStats = {};
let metaLoaded = false;

// Глобальная функция для форматирования процентов
function pct(v) { 
    return v ? (v * 100).toFixed(1) + '%' : '—'; 
}

function getHeroStats(hero) {
    return liveStats[(hero.name || '').toLowerCase()] || null;
}

// Загрузка данных (мгновенная, без fetch!)
function loadLiveStats(showStatus) {
    const status = document.getElementById('metaStatus');
    if (showStatus && status) status.textContent = 'Мета: загрузка...';

    try {
        liveStats = {};
        LOCAL_META_DATA.forEach(h => {
            liveStats[(h.localized_name || '').toLowerCase()] = h;
        });
        metaLoaded = true;
        if (status) status.textContent = `Мета: загружено ${LOCAL_META_DATA.length} героев ✅`;
    } catch (e) {
        metaLoaded = false;
        if (status) status.textContent = 'Мета: ошибка загрузки';
        console.error('Meta error:', e);
    }
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
    
    return `📈 <strong>Актуальная мета патча:</strong><br>${rows}`;
}

function getWinrateAnswer(question) {
    const hero = (typeof findHero === 'function') ? findHero(question) : null;
    if (!hero) return null;
    const s = getHeroStats(hero);
    if (!s) return `📊 Нет данных по <strong>${hero.name}</strong>.`;
    
    return `📊 <strong>${hero.name} (${hero.ru})</strong>:<br>` +
        `• Паблик: винрейт <strong>${pct(s.pub_win)}</strong>, пикрейт ${pct(s.pub_pick)}<br>` +
        `• Просцена: винрейт <strong>${pct(s.pro_win)}</strong>, пикрейт ${pct(s.pro_pick)}`;
}
// Мета по атрибутам — топ-3 в каждом
function getMetaByAttribute() {
    if (!metaLoaded) return null;
    const groups = {Strength:[], Agility:[], Intelligence:[], Universal:[]};
    Object.values(liveStats).forEach(h => {
        const db = heroesDB.find(x => x.name === h.localized_name);
        if (db && groups[db.attr]) groups[db.attr].push(h);
    });
    const attrRu = {Strength:'💪 Сила', Agility:'🏹 Ловкость', Intelligence:'🧠 Интеллект', Universal:'🌟 Универсальный'};
    let html = '📈 <strong>Мета патча по атрибутам:</strong>';
    ['Strength','Agility','Intelligence','Universal'].forEach(attr => {
        const top = groups[attr].sort((a,b) => b.pub_win - a.pub_win).slice(0,3);
        if (!top.length) return;
        html += '<br><br><strong>' + attrRu[attr] + ':</strong><br>';
        top.forEach((h,i) => { html += (i+1) + '. ' + h.localized_name + ' — винрейт ' + pct(h.pub_win) + '<br>'; });
    });
    return html;
}

// Винрейт героя (без пикрейтов)
function getWinrateAnswer(question) {
    const hero = (typeof findHero === 'function') ? findHero(question) : null;
    if (!hero) return null;
    const s = getHeroStats(hero);
    if (!s) return '📊 Нет данных по <strong>' + hero.name + '</strong>.';
    return '📊 <strong>' + hero.name + ' (' + hero.ru + ')</strong>:<br>' +
        '• Паблик: винрейт <strong>' + pct(s.pub_win) + '</strong><br>' +
        '• Просцена: винрейт <strong>' + pct(s.pro_win) + '</strong>';
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadLiveStats();
});
