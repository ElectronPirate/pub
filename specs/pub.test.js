const Pub = require('../pub');
const Till = require('../till');
const Drink = require('../drink');
const Customer = require('../customer');
describe('Pub', () => {

  //variables
  let pub1;
  let stella;
  let bob;
  let till1;
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
  xtest('should have a name, till and drinks', () => {
    expect(pub1.name).toBe('The Black Bull');

    expect(pub1.tills[0]).toEqual({ 'number': 1, 'money': 400 });
    expect(pub1.drinks[0].name).toEqual('Stella');
  });

test ('should be able to add money', () => {
  pub1.addMoney(4);
  expect(pub1.tills[0].money).toBe(404)
})

test ('should be able to remove drink', () => {
  pub1.removeDrink('Stella');
  expect(pub1.drinks.length).toBe(0)

})

test('find drink by name', () => {
  expect(pub1.findDrinkByName('Stella')).toEqual({'name': 'Stella', 'price': 3, 'alcoholLevel': 2})
})

test('is customer old enough to drink?', () => {
  expect(pub1.oldEnough(bob)).toBe(true);
})

test('is customer too drunk', () => {
  expect(pub1.tooDrunk(bob)).toBe(false);
})

test('pub should reject customers too young or drunk', () => {
  expect(pub1.reject(bob)).toBe(false);
})

 xtest('pub should refuse people over a certain level of drunkeness', () => {

 })

 xtest('pub should be able to list stock', () => {

 })

 xtest('pub should be able to test total stock value', () => {

 })

});
