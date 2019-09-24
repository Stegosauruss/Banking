const ATM = require('../lib/atm')

describe('ATM', () => {
  var atm
  beforeEach(() => {
    var mockBank = jest.fn()
    mockBank.withdraw = jest.fn()
    mockBank.deposit = jest.fn()
    var mockBankClass = jest.fn(() => mockBank)

    var mockStatement = jest.fn()
    mockStatement.message = jest.fn()
    var mockStatementClass = jest.fn(() => mockStatement)
    atm = new ATM(mockBankClass, mockStatementClass)
  })
  describe('#withdrawal', () => {
    test('Requests withdraw from bank', () => {
      atm.withdrawal(50)
      expect(atm._Bank.withdraw).toHaveBeenCalledWith(50)
    })
  })

  describe('#deposit', () => {
    test('Requests deposit from bank', () => {
      atm.deposit(50)
      expect(atm._Bank.deposit).toHaveBeenCalledWith(50)
    })
  })

  describe('#printStatement', () => {
    test('Requests deposit from bank', () => {
      atm.printStatement()
      expect(atm._Statement.message).toHaveBeenCalled()
    })
  })
})
