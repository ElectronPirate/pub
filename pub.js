class Pub {
  constructor(name, till, drink) {
    this.name = name;
    this.till = till;
    this.drinks = [];
  }

  addDrink(drink) {
    this.drinks.push(drink);
  }
}



module.exports = Pub;
