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


$("#attack2").click(function() 
{ 
    player.basicAttack.inflictDamage(currBoss);
    currBoss.chooseRandomAttack();
    UpdateHealthBar();
});

$("#fightbutton").click(function() 
{
   BeginFight();
});

function UpdateHealthBar()
{
    var barpercent = currBoss.currHealth / currBoss.totalHealth*100;
    var playerhpbar = player.currHealth / player.totalHealth *100;

    if (playerhpbar > 100){playerhpbar = 100;}

    $("#bosshpbar").animate({width: barpercent+"%"},"slow");
    $("#playerhpbar").animate({width: playerhpbar+"%"},"slow");
}