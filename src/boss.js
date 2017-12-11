function Boss(name, level, health, damage)
{
    this.name = name;
    this.level = level;
    this.totalHealth = level * health;
    this.currHealth = level * health;
    this.damage = level * damage;
    this.xpReward = 50;
    
    this.basicAttack = new Attack("basic-attack", 5, 0);
    this.heavyAttack = new Attack("heavy-attack", 20, 0);
    this.basicHeal = new Heal("basic-heal", 50, 0);
    
    this.chooseRandomAttack = function()
    {
        //todo
        this.basicAttack.inflictDamage(player);
    };
};

var BossNames =
[
    "Dagr",
    "Eligia",
    "Alberich",
    "Iunia",
    "Manuel",
    "Ortrun",
    "Muriel",
    "Jayadeva",
    "Alfarr",
    "Ermingard"
];

function GenerateRandomBoss()
{
    var newBoss = new Boss("Ted", 1, 100, 2);
    
    return newBoss;
}