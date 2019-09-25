const Transaction = require('../lib/transaction')

describe('Transaction', () => {
  var transaction
  var day
  beforeEach(() => {
    day = jest.fn()
    day.getDate = jest.fn()
    transaction = new Transaction(50, 0, 50, day)
  })

  describe('#credit', () => {
    test('returns the stored credit', () => {
      expect(transaction.credit).toBe(50)
    })
  })

  describe('#debit', () => {
    test('returns the stored debit', () => {
      expect(transaction.debit).toBe(0)
    })
  })

  describe('#balance', () => {
    test('returns the stored balance', () => {
      expect(transaction.balance).toBe(50)
    })
  })

  describe('#date', () => {
    test('returns the result of getDate called on a new Day object', () => {
      expect(day.getDate).toHaveBeenCalled()
      expect(transaction.date).toEqual(day.getDate())
    })
  })
})
