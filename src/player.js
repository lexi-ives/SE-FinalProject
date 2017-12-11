// Taylor Snyder, Cameron Wandfluh
// Mizzou 2017 - Fall

function Player(name)
{
    this.name = name;
    this.level = 1;
    this.xp = 0;
    this.totalHealth = 100;
    this.currHealth = 100;
    this.strength = 10;
    this.critChance = 10;

    this.basicAttack = new Attack("basic", this.strength * this.level, 5);
    this.strongAttack = new Attack("basic", this.strength * this.level, 5);
    this.basicHeal = new Heal("basic", 25, 0);

    this.addXP = function(xpToAdd)
    {
        this.xp += xpToAdd;
    };

    this.levelUp = function()
    {

    };
}
