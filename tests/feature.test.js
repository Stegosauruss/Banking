const ATM = require('../lib/atm')
var MockDate = require('mockdate')

describe('feature', () => {
  var atm
  beforeEach(() => {
    atm = new ATM()
  })

  test('after a deposit of 50 a bank statement can be printed', () => {
    MockDate.set('2012-1-10')
    atm.deposit(50)
    expect(atm.statement()).toBe(
      'date || credit || debit || balance\n10/01/2012 || 50.00 || || 50.00'
    )
  })

  test('after two deposits of 1000 and 2000 and a withdrawal of 500 a statement can be printed', () => {
    MockDate.set('2012-1-10')
    atm.deposit(1000)
    MockDate.set('2012-1-13')
    atm.deposit(2000)
    MockDate.set('2012-1-14')
    atm.withdrawal(500)
    expect(atm.statement()).toBe(
      'date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00'
    )
  })
})
