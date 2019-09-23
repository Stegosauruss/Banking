const Bank = require('./bank')
const Statement = require('./statement')

class ATM {
  constructor (BankClass = Bank, StatementClass = Statement) {
    this._bank = new BankClass()
    this._statement = new StatementClass()
  }

  withdrawal (funds) {
    this._bank.withdraw(funds)
  }

  deposit (funds) {
    this._bank.deposit(funds)
  }

  printStatement () {
    return this._statement.message(this._bank._history)
  }
}

module.exports = ATM
