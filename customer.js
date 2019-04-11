class Customer {
  constructor(name, age, wallet, drunkeness) {
    this.name = name;
    this.age = age;
    this.wallet = wallet;
    this.drunkeness = drunkeness;
  }

  customerRemoveMoney(cost) {
    this.wallet -= cost;
  }

  customerIncreaseDrunk(alchLevel) {
    this.drunkeness += alchLevel;
  }

  canAfford(name, pub1){
    const purchase = pub1.findDrinkByName(name)
    if (this.wallet >= purchase.price){
      return true;
    }

  }

  buyDrink(purchase, pub1) {
    if (pub1.reject(this) == true){
      return 'Reject';
    }else {
      let drink = pub1.findDrinkByName(purchase);
      console.log(drink);
      this.customerRemoveMoney(drink.price);
      this.customerIncreaseDrunk(drink.alcoholLevel);
      pub1.addMoney(drink.price);
      pub1.removeDrink(purchase);
    }
  }

  // buyDrink(purchase) {
  //   const buy = pub1.drinks.find((drink) =>{
  //     return drink.price === purchase;
  //   })
  //   if (this.wallet >=  drink.price){
  //   this.wallet -= drink.price;
  //   pub1.tills.money += drink.price;
  //   this.drunkeness += drink.alcoholLevel
  //   }
  // }
}


module.exports = Customer;
