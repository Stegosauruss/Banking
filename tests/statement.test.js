const Statement = require('../lib/statement')

describe('Statement', () => {
  var statement
  beforeEach(() => {
    statement = new Statement()
  })
  describe('#message', () => {
    test('returns a correctly formatted string', () => {
      expect(statement.message([
        {
          date: '14/01/2012',
          credit: 50,
          debit: 0,
          balance: 50
        }
      ])).toBe(
        'date || credit || debit || balance\n14/01/2012 || 50.00 || || 50.00'
      )
    })
  })
})
