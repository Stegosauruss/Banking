const Bank = require('../lib/bank')

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

    test('Raises an error when depositing less than 0', () => {
      expect(() => {
        bank.deposit(-50)
      }).toThrow('Error: deposit value must be greater than 0')
    })
  })

  describe('#Withdraw', () => {
    test('A user can withdraw £30 and it is reduced from the balance', () => {
      bank.deposit(50)
      bank.withdraw(30)
      expect(bank.balance).toBe(20)
    })

    test('Raises an error when withdrawing less than 0', () => {
      bank.deposit(50)
      expect(() => {
        bank.withdraw(-50)
      }).toThrow('Error: withdrawal value must be greater than 0')
    })

    test('Raises an error when correct funds are unavailable', () => {
      expect(() => {
        bank.withdraw(50)
      }).toThrow('Error: funds are not available')
    })
  })
})
