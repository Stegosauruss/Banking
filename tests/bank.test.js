const Bank = require('../lib/bank')

describe('Bank', () => {
  var bank
  var mockTransaction
  var mockTransactionClass
  var mockStatement

  beforeEach(() => {
    mockStatement = jest.fn()
    mockStatement.message = jest.fn()
    mockTransaction = jest.fn()
    mockTransactionClass = jest.fn(() => mockTransaction)
    bank = new Bank(mockStatement, mockTransactionClass)
  })

  describe('#Deposit', () => {
    test('A user can deposit £50 and it returns a transaction object', () => {
      expect(bank.deposit(50)).toEqual(mockTransaction)
    })

    test('Raises an error when depositing less than 0', () => {
      expect(() => {
        bank.deposit(-50)
      }).toThrow('Error: deposit value must be greater than 0')
    })
  })

  describe('#Withdraw', () => {
    test('A user can withdraw £30 and it returns a transaction object', () => {
      expect(bank.deposit(50)).toEqual(mockTransaction)
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
