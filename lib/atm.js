const Bank = require('./bank')
const Statement = require('./statement')

class ATM {
  constructor (BankClass = Bank, StatementClass = Statement) {
    this._Bank = new BankClass()
    this._Statement = new StatementClass()
  }

  withdrawal (debit) {
    this._Bank.withdraw(debit)
  }

  deposit (credit) {
    this._Bank.deposit(credit)
  }

  printStatement () {
    return this._Statement.message(this._Bank.transactionHistory)
  }
}

module.exports = ATM
