function Boss(name, level, health, damage)
{
    this.name = name;
    this.level = level;
    this.totalHealth = level * health;
    this.currHealth = level * health;
    this.damage = level * damage;
    this.xpReward = 50;

    this.basicAttack = new Attack("basic-attack", this.damage, 0);
    this.heavyAttack = new Attack("heavy-attack", this.damage * 2, 0);
    this.basicHeal = new Heal("basic-heal", this.totalHealth / 4, 0);

    this.chooseRandomAttack = function()
    {
        var attackType = Math.floor(Math.random() * 10 + 1);
        if (attackType < 6) {
          this.basicAttack.inflictDamage(player);
        } else if (attackType < 9) {
          this.heavyAttack.inflictDamage(player);
        } else {
          this.basicHeal.restoreHealth(currBoss);
        }
    };
};

var BossNames =
[
    "Dagr",
    "Eligia",
    "Alberich",
    "Iunia",
    "Manuel",
    "Ortrun",
    "Muriel",
    "Jayadeva",
    "Alfarr",
    "Ermingard",
    "Ahriman",
    "Remus",
    "Ninian",
    "Phokas",
    "Constantia",
    "Primus",
    "Llyr",
    "Nuallán",
    "Leutgard"
];

function GenerateRandomBoss()
{
    var newBoss = new Boss(BossNames[Math.floor(Math.random() * BossNames.length)], bossesDefeated + 1, 100, 10);
    GetBossImage();
    return newBoss;
}

function GetBossImage()
{
  var bossImg =
  [
    'images/slime.png',
    'images/ghost.png',
    'images/golem.png',
    'images/snake.png',
    'images/bat.png'
  ]

  var newBoss = bossImg[Math.floor(Math.random() * bossImg.length)]

  $("#bossimg").html("<img src='"+newBoss+"' height='220' width='220'></img>");
}
