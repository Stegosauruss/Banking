const Bank = require('./bank')

class ATM {
  constructor (bankClass = Bank) {
    this._bank = new bankClass
  }

  withdrawal (funds) {
    this._bank.withdraw(funds)
  }

  deposit (funds) {
    this._bank.deposit(funds)
  }

  statement () {
    return "date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00"
  }
}

module.exports = ATM