const Bank = require('./bank')

describe('Bank', () => {
  var bank
  beforeEach(() => {
    bank = new Bank()
  })

  test('Balance is initially set at 0', () => {
    expect(bank.balance).toBe(0)
  })

  describe('#Deposit', () => {
    test('A user can deposit £50 and it is recorded', () => {
      bank.deposit(50)
      expect(bank.balance).toBe(50)
    })
  })
})
