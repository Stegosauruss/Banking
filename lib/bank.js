var Day = require('./day')

class Bank {
  constructor (day = Day) {
    this._Day = new Day
    this._balance = 0
    this._transactionHistory = []
  }

  get balance () {
    return this._balance
  }

  get transactionHistory () {
    return this._transactionHistory
  }

  deposit (debit) {
    if (this._isNotPositive(debit)) throw new Error('Error: deposit value must be greater than 0')

    this._balance += debit
    this._record(debit, 0)
  }

  withdraw (credit) {
    if (this._isNotPositive(credit)) throw new Error('Error: withdrawal value must be greater than 0')
    if (this._insufficientBalance(credit)) throw new Error('Error: funds are not available')

    this._balance -= credit
    this._record(0, credit)
  }

  _record (credit, debit) {
    var log = {
      date: this._Day.getDate(),
      credit: credit,
      debit: debit,
      balance: this.balance
    }
    this._transactionHistory.unshift(log)
  }

  _isNotPositive (funds) {
    return funds <= 0
  }

  _insufficientBalance (funds) {
    return this._balance - funds < 0
  }
}

module.exports = Bank
