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
    
    this.basicAttack = new Attack("basic", this.strength * this.level, 0, 5);
    this.heal = new Attack("heal", 0, 50, 3);
    
    this.addXP = function(xpToAdd)
    {
        this.xp += xpToAdd;
    };
    
    this.levelUp = function()
    {
        
    };
}

