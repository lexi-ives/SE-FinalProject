// Taylor Snyder, Cameron Wandfluh
// Mizzou 2017 - Fall

function Item(itemType)
{
    this.itemType = itemType;
    this.name = GenerateItemName(itemType);
    this.attributes = new Attributes();
    
    console.log('Created new Item: ' + this.name);
    
}

function Attributes()
{
    this.strength = Math.floor(Math.random() * 10);
    this.critChance = Math.floor(Math.random() * 5);
    this.healthBonus = Math.floor(Math.random() * 50);
}