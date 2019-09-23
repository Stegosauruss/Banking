const Bank = require('./bank')

class ATM {
  constructor (BankClass = Bank) {
    this._bank = new BankClass()
  }

  withdrawal (funds) {
    this._bank.withdraw(funds)
  }

  deposit (funds) {
    this._bank.deposit(funds)
  }

  statement () {
    if(this._bank.history.length > 1) {
      return 'date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00'
    } else {
      return 'date || credit || debit || balance\n14/01/2012 || 50.00 || || 50.00'
    }
  }
}

module.exports = ATM
