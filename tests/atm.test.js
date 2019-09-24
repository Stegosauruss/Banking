const ATM = require('../lib/atm')

describe('ATM', () => {
  var atm
  beforeEach(() => {
    var mockBank = jest.fn()
    mockBank.withdraw = jest.fn()
    mockBank.deposit = jest.fn()

    var mockStatement = jest.fn()
    mockStatement.message = jest.fn()
    atm = new ATM(mockBank, mockStatement)
  })
  describe('#withdrawal', () => {
    test('Requests withdraw from bank', () => {
      atm.withdrawal(50)
      expect(atm._bank.withdraw).toHaveBeenCalledWith(50)
    })
  })

  describe('#deposit', () => {
    test('Requests deposit from bank', () => {
      atm.deposit(50)
      expect(atm._bank.deposit).toHaveBeenCalledWith(50)
    })
  })

  describe('#printStatement', () => {
    test('Requests deposit from bank', () => {
      atm.printStatement()
      expect(atm._statement.message).toHaveBeenCalled()
    })
  })
})
