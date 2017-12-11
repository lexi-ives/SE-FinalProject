function Boss(name, level, health, damage)
{
    this.name = name;
    this.level = level;
    this.totalHealth = level * health;
    this.currHealth = level * health;
    this.damage = level * damage;
    this.xpReward = 50;
    
    this.basicAttack = new Attack("basic", 5, 0, 0);
    this.heavyAttack = new Attack("heavy", 20, 0, 0);
    this.heal = new Heal("basic", -50, 0, 0);
    
    this.chooseRandomAttack = function()
    {
        //todo
        this.basicAttack.inflictDamage(player);
    };
};

var BossNames =
[
    "Ted",
    "Biggie"
];

function GenerateRandomBoss()
{
    var newBoss = new Boss("Ted", 1, 100, 2);
    
    return newBoss;
}