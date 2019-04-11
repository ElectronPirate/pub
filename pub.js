class Pub {
  constructor(name, till, drink) {
    this.name = name;
    this.tills = [];
    this.drinks = [];
  }

  addDrink(drink) {
    this.drinks.push(drink);
  }

  addTill(till){
    this.tills.push(till);
  }

  addMoney(price){
    this.tills[0].money += price
  }

  findDrinkByName(name){
    return this.drinks.find((drink) => {
      return drink.name === name;
    })
  }

  removeDrink(toBeRemoved){
    let index = this.drinks.findIndex(function(drink, i){
      return toBeRemoved === drink;
    })

    this.drinks.splice(index, 1);
  }

  oldEnough(customer){
    return (customer.age > 18 ? true:false)
  }

  tooDrunk(customer){
    return (customer.drunkeness > 10 ? true:false)
  }

  reject(customer){
    if (this.oldEnough(customer) == false || this.tooDrunk(customer) == true) {
      return true;
    }
    return false;
  }
}



module.exports = Pub;
