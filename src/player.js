// Taylor Snyder, Cameron Wandfluh
// Mizzou 2017 - Fall

function Player(name)
{
    this.name = name;
    this.level = 1;
    this.currXP = 0;
    this.nextLevelXP = 100;
    this.totalHealth = 100;
    this.currHealth = 100;
    this.strength = 10;
    this.critChance = 10;

    this.basicAttack = new Attack("basic-attack", this.strength * this.level, 5);
    this.strongAttack = new Attack("strong-attack", this.strength * this.level, 5);
    this.basicHeal = new Heal("basic-heal", 25, 0);

    this.addXP = function(xpToAdd)
    {
        this.currXP += xpToAdd;
        
        if(this.currXP >= this.nextLevelXP)
        {
            this.level++;
            this.currXP -= this.nextLevelXP;
            this.nextLevelXP += 50;
        }
            
    };
}
