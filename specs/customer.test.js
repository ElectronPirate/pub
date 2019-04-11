const Customer = require('../customer');

describe('Customer', () => {

  //variables
  let bob;
  //before each - setting variables
  beforeEach(() => {
    bob = new Customer('Bob', 23, 35, 0);

  });

  //tests
  test('customer should have a name, age, wallet and drunkeness level', () => {
    expect(bob.name).toBe('Bob')
    expect(bob.age).toBe(23)
    expect(bob.wallet).toBe(35)
    expect(bob.drunkeness).toBe(0)
  })

});
