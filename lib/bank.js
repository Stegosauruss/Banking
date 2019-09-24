var Statement = require('./statement')
var Transaction = require('./transaction')

class Bank {
  constructor (statement = new Statement(), TransactionClass = Transaction) {
    this._TransactionClass = TransactionClass
    this._statement = statement
    this._balance = 0
    this._transactionHistory = []
  }

  deposit (credit) {
    if (this._isNotPositive(credit)) throw new Error('Error: deposit value must be greater than 0')

    this._balance += credit
    var transaction = this._record(credit, 0)
    return transaction
  }

  withdraw (debit) {
    if (this._isNotPositive(debit)) throw new Error('Error: withdrawal value must be greater than 0')
    if (this._insufficientBalance(debit)) throw new Error('Error: funds are not available')

    this._balance -= debit
    var transaction = this._record(0, debit)
    return transaction
  }

  printStatement () {
    this._statement.message(this._transactionHistory)
  }

  _record (credit, debit) {
    var transactionLog = new this._TransactionClass(credit, debit, this._balance)
    this._transactionHistory.unshift(transactionLog)
    return transactionLog
  }

  _isNotPositive (funds) {
    return funds <= 0
  }

  _insufficientBalance (funds) {
    return this._balance - funds < 0
  }
}

module.exports = Bank
