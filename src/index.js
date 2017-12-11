var bossesDefeated = 0;
var fightInProgress = false;
var player;
var currBoss;

$(document).ready(function()
{
    DisableButton("#attack1");
    DisableButton("#attack2");
    DisableButton("#attack3");
    DisableButton("#attack4");
    
    player = new Player(GetPlayerName());
    $("#playertext").text(player.name);
});

function BeginFight()
{
    fightInProgress = true;
    currBoss = GenerateRandomBoss();
    
    EnableButton("#attack1");
    EnableButton("#attack2");
    EnableButton("#attack3");
    EnableButton("#attack4");
    
    $("#infobox").text("A wild " + currBoss.name + " appears!");
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

$("#attack1").click(function()
{
    if(fightInProgress)
    {
        player.basicAttack.inflictDamage(currBoss);
        currBoss.chooseRandomAttack();
        AliveCheck();
    }
});

$("#attack2").click(function()
{
    if(fightInProgress)
    {
        player.strongAttack.inflictDamage(currBoss);
        currBoss.chooseRandomAttack();
        AliveCheck();
    }
});

$("#attack3").click(function()
{
    if(fightInProgress)
    {
        player.basicHeal.restoreHealth(player);
        currBoss.chooseRandomAttack();
        AliveCheck();
    }
});

$("#attack4").click(function()
{
    if(fightInProgress)
    {
        player.strongAttack.inflictDamage(currBoss);
        currBoss.chooseRandomAttack();
        AliveCheck();
    }
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
}

function DisableButton(id)
{
    $(id).addClass("disabled");
}

function EnableButton(id)
{
    $(id).removeClass("disabled");
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

function GetPlayerName()
{
    var playerResponse = prompt("Enter your name!");
    
    if(playerResponse != null && playerResponse != "")
    {
        return playerResponse;
    }   
    else
    {
        return "Tim";
    }
}
