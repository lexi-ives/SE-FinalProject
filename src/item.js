// Taylor Snyder, Cameron Wandfluh
// Mizzou 2017 - Fall

var itemMap = new Map();

itemMap.set("Helmet", "images/equipment/helmet.png");
itemMap.set("Chestpiece", "images/equipment/chestpiece.png");
itemMap.set("Bracers", "images/equipment/bracer.png");
itemMap.set("Pants", "images/equipment/pants.png");
itemMap.set("Sword", "images/weapons/sword.png");
itemMap.set("Mace", "images/weapons/mace.png");
itemMap.set("Boots", "images/weapons/boots.png");

var itemTypes =
[
    "Helmet",
    "Chestpiece",
    "Bracers",
    "Pants",
    "Boots",
    "Sword",
    "Mace"
];

function Item(itemType)
{
    this.itemType = itemType;
    this.name = GenerateItemName(itemType);
    this.attributes = new Attributes();
    this.itemTypeIconPath = itemMap.get(itemType);
}

function Attributes()
{
    this.strength = Math.floor(Math.random() * 10);
    this.critChance = Math.floor(Math.random() * 5);
    this.healthBonus = Math.floor(Math.random() * 50);
}

function GenerateRandomItem()
{
    var randomItemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    
    var newItem = new Item(randomItemType);
    
    return newItem;
}

