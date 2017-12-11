// Taylor Snyder, Cameron Wandfluh
// Mizzou 2017 - Fall

var itemTypes =
[
    "Helmet",
    "Chestpiece",
    "Bracers",
    "Necklace",
    "Ring",
    "Pants",
    "Boots",
    "Sword",
    "Hammer"
];

function Item(itemType)
{
    this.itemType = itemType;
    this.name = GenerateItemName(itemType);
    this.attributes = new Attributes();
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