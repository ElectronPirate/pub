const Drink = require('../drink');

describe('Drink', () => {

  //variables

  //before each - setting variables



  let stella;

  beforeEach(() => {
    stella = new Drink('Stella', 3, 2);
  });


  //tests
  test('drink should have a name and price and alcohol level', () => {
    expect(stella.name).toBe('Stella');
    expect(stella.price).toBe(3);
    expect(stella.alcoholLevel).toBe(2);
  })

});
