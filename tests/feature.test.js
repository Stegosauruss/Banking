const ATM = require('../lib/atm')

describe('feature', () => {
  var atm
  beforeEach(() => {
    atm = new ATM()
  })

  test('client can print a bank statement', () => {
    //set date to 10/01/2012
    atm.deposit(1000)
    //set date to 13/01/2012
    atm.deposit(2000)
    //set date to 14/01/2012
    atm.withdrawal(500)
    expect(atm.statement()).toBe(
      "date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00"
    )
  })
})