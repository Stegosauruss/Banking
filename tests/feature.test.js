const Bank = require('../lib/bank')
var MockDate = require('mockdate')

describe('feature', () => {
  var bank
  beforeEach(() => {
    bank = new Bank()
  })

  test('after a deposit of 50 a bank statement can be printed', () => {
    const spy = jest.spyOn(console, 'log')
    spy.mockClear()
    MockDate.set('2012-1-10')
    bank.deposit(50)
    bank.printStatement()
    expect(spy.mock.calls[0][0]).toEqual('date || credit || debit || balance')
    expect(spy.mock.calls[1][0]).toEqual('10/01/2012 || 50.00 || || 50.00')
  })

  test('after two deposits of 1000 and 2000 and a withdrawal of 500 a statement can be printed', () => {
    const spy = jest.spyOn(console, 'log')
    spy.mockClear()
    MockDate.set('2012-1-10')
    bank.deposit(1000)
    MockDate.set('2012-1-13')
    bank.deposit(2000)
    MockDate.set('2012-1-14')
    bank.withdraw(500)
    bank.printStatement()
    expect(spy.mock.calls[0][0]).toEqual('date || credit || debit || balance')
    expect(spy.mock.calls[1][0]).toEqual('14/01/2012 || || 500.00 || 2500.00')
    expect(spy.mock.calls[2][0]).toEqual('13/01/2012 || 2000.00 || || 3000.00')
    expect(spy.mock.calls[3][0]).toEqual('10/01/2012 || 1000.00 || || 1000.00')
  })
})
