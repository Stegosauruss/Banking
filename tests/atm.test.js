const ATM = require('../lib/atm')

xdescribe('ATM', () => {
  var atm
  beforeEach(() => {
    atm = new ATM()
  })
  describe('#Withdrawal', () => {
    test('Requests withdraw from bank', () => {
      //assesses whether withdraw has been called on the bank mock
    })
  })

  describe('#Deposit', () => {
    test('Requests deposit from bank', () => {
      //assesses whether withdraw has been called on the bank mock
    })
  })
})
