var bossesDefeated = 0;
var fightInProgress = false;
var player;
var currBoss;


function BeginFight()
{
    fightInProgress = true;

    currBoss = GenerateRandomBoss();
    // more
}

function EndFight(playerVictorious)
{
    fightInProgress = false;


    if(playerVictorious)
    {
        player.addXP(currBoss.xpReward);
        bossesDefeated++;
    }
    else
    {
        //
    }

}

$(document).ready(function()
{
    player = new Player("playerName");

});

$("#attack1").click(function()
{
    player.basicAttack.inflictDamage(currBoss);
    currBoss.chooseRandomAttack();
    UpdateHealthBar();
});

$("#attack2").click(function()
{
    player.strongAttack.inflictDamage(currBoss);
    currBoss.chooseRandomAttack();
    UpdateHealthBar();
});

$("#attack3").click(function()
{
    player.basicHeal.restoreHealth(player);
    currBoss.chooseRandomAttack();
    UpdateHealthBar();
});

$("#attack4").click(function()
{
    player.strongAttack.inflictDamage(currBoss);
    currBoss.chooseRandomAttack();
    AliveCheck();
});

$("#fightbutton").click(function()
{
  $("#bosshpbar").animate({width: 100+"%"},"fast");
   BeginFight();
});

function UpdateHealthBar()
{
    var barpercent = currBoss.currHealth / currBoss.totalHealth*100;
    var playerhpbar = player.currHealth / player.totalHealth *100;

    if (playerhpbar > 100){playerhpbar = 100;}

    $("#bosshpbar").animate({width: barpercent+"%"},"slow");
    $("#playerhpbar").animate({width: playerhpbar+"%"},"slow");
    console.log(player.currHealth);
    console.log(currBoss.currHealth);
}

function DisableButton(id){
  $(id).addClass("oncooldown");
}

function AliveCheck()
{
  UpdateHealthBar();
      if(player.currHealth <= 0)
      {
          EndFight(false);
      }
      else if(currBoss.currHealth <= 0)
      {
          EndFight(true);
      }
}
