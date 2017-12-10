$(document).ready(function() {

  console.log("ready");

  var player = {
    level: 1,
    experience: 0,
    totalHealth: 100,
    currentHealth: 100,
    strength: 10,
    crit: 10,

    head: {},
    larm: {},
    chest: {},
    rarm: {},
    legs: {},
    boots: {},
    weapon: {},
  };

  function Boss(level, health, damage){
    this.level = level;
    this.totalHealth = level * health;
    this.currentHealth = level * health;
    this.damage = level * damage;
  };

  var boss = new Boss(1, 500, 25);

  console.log(boss.currentHealth);

  var turnCounter = 0;

  var attackType = {
    attack1: {
      name: "Basic Attack",
      id: "#attack1",
      damage: player.strength * player.level,
      healthRestore: 0,
      turnCooldown: 0,
      currentCooldown: 0,
      cooldown: false,
    },

    attack2: {
      name: "Strong Attack",
      id: "#attack2",
      damage: player.strength * player.level + (player.level * 5),
      healthRestore: 0,
      turnCooldown: 2,
      currentCooldown: 0,
      cooldown: false,
    },

    attack3: {
      name: "Heal",
      id: "#attack3",
      damage: 0,
      healthRestore: 20 * player.level,
      turnCooldown: 3,
      currentCooldown: 0,
      cooldown: false,
    },

    attack4: {
      name: "Special Attack",
      id: "#attack4",
      damage: player.strength * player.level * 5,
      healthRestore: player.totalHealth / 2,
      turnCooldown: 10,
      currentCooldown: 0,
      cooldown: false,
    },
  };

  function playerAttack(attackType) {
    //console.log(attackType);
    if(attackType.cooldown == true){
      return;
    }

    if(attackType.damage > 0){

      var crit = player.crit * (Math.random() * 10) + 1;
      if(crit >= 80){
        boss.currentHealth = boss.currentHealth - attackType.damage * 2;
      } else {
        boss.currentHealth = boss.currentHealth - attackType.damage;
      }
      //console.log("Crit", crit);
    }

    if(attackType.damage == 0){
      player.currentHealth = player.currentHealth + attackType.healthRestore;
      //console.log("heal", attackType.healthRestore);
    }

    if(attackType.name === "Special Attack"){
      boss.currentHealth = boss.currentHealth - attackType.damage;
      player.currentHealth = player.currentHealth + attackType.healthRestore;
    }
    attackType.cooldown = true;
    attackType.currentCooldown = 0;
    $(attackType.id).addClass("oncooldown");

    console.log(boss.currentHealth);
    console.log(player.currentHealth);
    turnCounter++;
  };

  function checkCooldowns(object) {
    if(object.currentCooldown >= object.turnCooldown){
      $(object.id).removeClass("oncooldown");
    }
  };

  //in game loop
  // attackType.attack1.currentCooldown++;
  // attackType.attack2.currentCooldown++;
  // attackType.attack3.currentCooldown++;
  // attackType.attack4.currentCooldown++;
  //
  // checkCooldowns(attackType.attack1);
  // checkCooldowns(attackType.attack1);
  // checkCooldowns(attackType.attack1);
  // checkCooldowns(attackType.attack1);

  function bossAttack() {
    if(boss.health > 0){
      var attackType = Math.random * 10 + 1;

      if(attackType < 6){
        //basic attack
        player.currentHealth -= boss.damage;
      } else if (attackType < 9) {
        //crit attack
        player.currentHealth -= boss.damage * 2;
      } else {
        //heal
        boss.currentHealth = boss.totalHealth;
      }
    }
    turnCounter++;
  };

  $("#attack1").click(function() { playerAttack(attackType.attack1); });
  $("#attack2").click(function() { playerAttack(attackType.attack2); });
  $("#attack3").click(function() { playerAttack(attackType.attack3); });
  $("#attack4").click(function() { playerAttack(attackType.attack4); });

  $("#health").text(player.totalHealth);
  $("#strength").text(player.strength);
  $("#speed").text(player.crit);



});
