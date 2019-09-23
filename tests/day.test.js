const Day = require('../lib/day')
var MockDate = require('mockdate')

describe('Bank', () => {
  var day
  beforeEach(() => {
    day = new Day()
  })

  describe('#getDate', () => {
    test('returns a string indicating the current date', () => {
      MockDate.set('2012-1-14')
      expect(day.getDate()).toBe('14/01/2012')
    })
  })
})
