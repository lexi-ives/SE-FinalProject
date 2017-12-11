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

    this.basicAttack = new Attack("#attack1", this.strength * this.level, 0);
    this.strongAttack = new Attack("#attack2", this.strength * this.level * 2, 3);
    this.basicHeal = new Heal("#attack3", 25 * this.level, 3);
    this.specialAttack = new Attack("#attack4", this.strength * this.level * 5, 10);

    this.addXP = function(xpToAdd)
    {
        this.currXP += xpToAdd;

        if(this.currXP >= this.nextLevelXP)
        {
            this.level++;
            UpdatePlayerStats();
            this.currXP -= this.nextLevelXP;
            this.nextLevelXP += 50;
        }

    };
}
