function BeginFight()
{
    console.log(bossesDefeated);
    fightInProgress = true;
    currBoss = GenerateRandomBoss();
    $("#bosslvl").text("Boss Level: "+ currBoss.level);
    UpdateHealthBar();

    EnableButton("#attack1");
    EnableButton("#attack2");
    EnableButton("#attack3");
    EnableButton("#attack4");

    //reset cooldowns inbetween bosses
    player.basicAttack.isOnCooldown = false;
    player.strongAttack.isOnCooldown = false;
    player.basicHeal.isOnCooldown = false;
    player.specialAttack.isOnCooldown = false;

    $("#infobox").prepend("A wild " + currBoss.name + " appears! <br/>");    
    
    $("#fightbutton").visibilityToggle();
}

function EndFight(playerVictorious)
{
    fightInProgress = false;
    turn = 0;
    player.currHealth = player.totalHealth;
    UpdateHealthBar();

    DisableButton("#attack1");
    DisableButton("#attack2");
    DisableButton("#attack3");
    DisableButton("#attack4");

    if(playerVictorious)
    {
        player.addXP(currBoss.xpReward);
        player.currHealth = player.totalHealth;
        UpdateHealthBar();
        bossesDefeated++;
        $("#infobox").prepend(player.name + " Wins! <br/>");
    }
    else
    {
      $("#infobox").prepend(currBoss.name + " Wins! <br/>");
      $("#infobox").prepend("You have lost! You will retain your level, but not your equipment! Try again! <br/>");
      bossesDefeated = 0;
    }
    
    $("#fightbutton").visibilityToggle();
}

function Critical()
{
  var crit = player.critChance * Math.floor((Math.random() * 10 + 1));
  if(crit >= 80){
    return true;
  }

  return false;
}

function AttackCycle(id){

  //double damage if Critical
  if(Critical()) { id.inflictDamage(currBoss); }

  id.inflictDamage(currBoss);
  $("#infobox").prepend("Turn: " + turn + " " + player.name + " did " + id.damage + " damage! <br/>");
  if(AliveCheck()){ return; }
  fightInProgress = false;

  //makes player wait .5 sec inbetween attacks
  setTimeout(function()
  {
    currBoss.chooseRandomAttack();
    if(AliveCheck()){ return; }
    fightInProgress = true;
  }, 500);

  DisableButton(id.name);
  id.BeginCooldown();
  CooldownDec();
}

//same as attack but healing
function HealCycle(id){
  id.restoreHealth(player);
  $("#infobox").prepend("Turn: "+ turn + " " + player.name + " healed for " + id.healthRestore + "! <br/>");
  currBoss.chooseRandomAttack();

  if(AliveCheck()){ return; }
  fightInProgress = false;

  setTimeout(function(){
    currBoss.chooseRandomAttack();
    console.log("Boss choose attack", player.currHealth);
    if(AliveCheck()){ return; }
    fightInProgress = true;
  }, 500);

  DisableButton(id.name);
  id.BeginCooldown();
  CooldownDec();
}

function AliveCheck()
{
    UpdateHealthBar();

    if(player.currHealth <= 0)
    {
        EndFight(false);
        return(true);
    }
    else if(currBoss.currHealth <= 0)
    {
        EndFight(true);
        return(true);
    }
}

function CooldownDec()
{
    player.basicAttack.decrimentCooldown();
    player.strongAttack.decrimentCooldown();
    player.basicHeal.decrimentCooldown();
    player.specialAttack.decrimentCooldown();

    if(player.basicAttack.isOnCooldown == false){
        EnableButton(player.basicAttack.name);
    }
    if(player.strongAttack.isOnCooldown == false){
        EnableButton(player.strongAttack.name);
    }
    if(player.basicHeal.isOnCooldown == false){
        EnableButton(player.basicHeal.name);
    }
    if(player.specialAttack.isOnCooldown == false){
        EnableButton(player.specialAttack.name);
    }
}

jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

jQuery.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};