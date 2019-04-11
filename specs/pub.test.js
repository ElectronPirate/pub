const Pub = require('../pub');
const Till = require('../till');
const Drink = require('../drink');
describe('Pub', () => {

  //variables
  let pub1;
  let stella;
  //before each - setting variables
  beforeEach(() => {
    till1 = new Till(1, 400);
    stella = new Drink('Stella', 3, 2);
    pub1 = new Pub('The Black Bull', till1, []);
    pub1.addDrink(stella);
  });

  //tests
  test('should have a name, till and drinks', () => {
    expect(pub1.name).toBe('The Black Bull');
    expect(pub1.till).toEqual({ 'number': 1, 'money': 400 });
    expect(pub1.drinks[0].name).toEqual('Stella');
  });



});
