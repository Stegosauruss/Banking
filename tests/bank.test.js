const Bank = require('../lib/bank')

describe('Bank', () => {
  var bank
  beforeEach(() => {
    var mockStatement = jest.fn()
    mockStatement.message = jest.fn()

    var mockDay = jest.fn()
    mockDay.getDate = jest.fn(() => '14/01/2012')
    bank = new Bank(mockDay, mockStatement)
  })

  describe('#balance', () => {
    test('Initially set at 0', () => {
      expect(bank.balance).toBe(0)
    })
  })

  describe('#transactionHistory', () => {
    test('records a deposit of £50', () => {
      bank.deposit(50)
      expect(bank.transactionHistory).toEqual([
        {
          date: '14/01/2012',
          credit: 50,
          debit: 0,
          balance: 50
        }
      ])
    })

    test('records two deposit of £50', () => {
      bank.deposit(50)
      bank.deposit(50)
      expect(bank.transactionHistory).toEqual([
        {
          date: '14/01/2012',
          credit: 50,
          debit: 0,
          balance: 100
        },
        {
          date: '14/01/2012',
          credit: 50,
          debit: 0,
          balance: 50
        }
      ])
    })

    test('records a withdrawal of £50', () => {
      bank.deposit(50)
      bank.withdraw(30)
      expect(bank.transactionHistory).toEqual([
        {
          date: '14/01/2012',
          credit: 0,
          debit: 30,
          balance: 20
        },
        {
          date: '14/01/2012',
          credit: 50,
          debit: 0,
          balance: 50
        }
      ])
    })
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

  describe('#printStatement', () => {
    test('Requests deposit from bank', () => {
      bank.printStatement()
      expect(bank._statement.message).toHaveBeenCalled()
    })
  })
})
