function Attack(name, damage, cooldown) 
{
    this.name = name;
    this.damage = damage;
    this.cooldown = cooldown;
    this.remainingCooldown = 0;
    this.isOnCooldown = false;

    this.BeginCooldown = function()
    {
        this.isOnCooldown = true;
        this.remainingCooldown = this.cooldown;
    };

    this.decrimentCooldown = function()
    {
        if(this.remainingCooldown > 0)
        {
            this.remainingCooldown -= 1;
        }
        else
        {
            this.isOnCooldown = false;
        }
    };

    this.inflictDamage = function(target)
    {
        target.currHealth -= this.damage;
    }
}

function Heal(name, healthRestore, cooldown) 
{
    this.name = name;
    this.healthRestore = healthRestore;
    this.cooldown = cooldown;
    this.remainingCooldown = 0;
    this.isOnCooldown = false;

    this.BeginCooldown = function()
    {
        this.isOnCooldown = true;
        this.remainingCooldown = this.cooldown;
    };

    this.decrimentCooldown = function()
    {
        if(this.remainingCooldown > 0)
        {
            this.remainingCooldown -= 1;
        }
        else
        {
            this.isOnCooldown = false;
        }
    };

    this.restoreHealth = function(target)
    {
        target.currHealth += this.healthRestore;
    }
}