const Bank = require('./bank')
const Statement = require('./statement')

class ATM {
  constructor (bank = new Bank, statement = new Statement) {
    this._bank = bank
    this._statement = statement
  }

  withdrawal (debit) {
    this._bank.withdraw(debit)
  }

  deposit (credit) {
    this._bank.deposit(credit)
  }

  printStatement () {
    return this._statement.message(this._bank.transactionHistory)
  }
}

module.exports = ATM
