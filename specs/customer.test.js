const Customer = require('../customer');
const Till = require('../till');
const Pub = require('../pub');
const Drink = require('../drink');

describe('Customer', () => {

  //variables
  let pub1;
  let bob;
  let till1;
  let stella;
  //before each - setting variables
  beforeEach(() => {
    bob = new Customer('Bob', 23, 35, 0);
    till1 = new Till(1, 400);
    stella = new Drink('Stella', 3, 2);
    pub1 = new Pub('The Black Bull', [], []);
    pub1.addDrink(stella);
    pub1.addTill(till1);
  });

  //tests
  test('customer should have a name, age, wallet and drunkeness level', () => {
    expect(bob.name).toBe('Bob')
    expect(bob.age).toBe(23)
    expect(bob.wallet).toBe(35)
    expect(bob.drunkeness).toBe(0)
  })

  test('customer should be able to buy a drink from the pub', () => {
    bob.buyDrink('Stella', pub1);
    expect(bob.wallet).toBe(32);
    expect(bob.drunkeness).toBe(2);
    expect(till1.money).toBe(403);
  })

  test('remove money', () => {
    bob.customerRemoveMoney(3);
    expect(bob.wallet).toBe(32);
  })

  test('get drunk', () => {
    bob.customerIncreaseDrunk(2);
    expect(bob.drunkeness).toBe(2);
  })

  test('customer can afford drink', () => {
    expect(bob.canAfford('Stella', pub1)).toBe(true)
  })

  xtest('drunkeness should go down when a customer buys food', () => {

  })
});
