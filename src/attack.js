function Attack(name, damage, healthRestore, cooldown) 
{
    this.name = name;
    this.damage = damage;
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

    this.inflictDamage = function(target)
    {
        target.currHealth -= this.damage;
    }
}