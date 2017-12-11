var bossesDefeated = 0;
var fightInProgress = false;
var turn = 1;
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
    UpdatePlayerStats();
});

$("#attack1").click(function()
{
    if(fightInProgress && player.basicAttack.isOnCooldown == false)
    {
        AttackCycle(player.basicAttack);
        turn++;
    }
});

$("#attack2").click(function()
{
    if(fightInProgress && player.strongAttack.isOnCooldown == false)
    {
        AttackCycle(player.strongAttack);
        turn++;
    }
});

$("#attack3").click(function()
{
    if(fightInProgress && player.basicHeal.isOnCooldown == false)
    {
        HealCycle(player.basicHeal);
        turn++
    }
});

$("#attack4").click(function()
{
    if(fightInProgress && player.specialAttack.isOnCooldown == false)
    {
        AttackCycle(player.specialAttack);
        turn++
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

    $("#bosshpbar").animate({width: barpercent+"%"},"normal");
    $("#bosshptext").text("Hp "+currBoss.currHealth);
    $("#playerhpbar").animate({width: playerhpbar+"%"},"normal");
    $("#playerhptext").text("Hp "+player.currHealth);

    //console.log(player.currHealth);
}

function UpdatePlayerStats(){
  $("#health").text(player.totalHealth);
  $("#strength").text(player.strength);
  $("#speed").text(player.level);
}

function DisableButton(id)
{
    $(id).addClass("disabled");
}

function EnableButton(id)
{
    $(id).removeClass("disabled");
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
        return "Paul Bunyan";
    }
}
