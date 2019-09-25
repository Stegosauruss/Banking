var Day = require('./day')

class Transaction {
  constructor (credit, debit, balance, day = new Day()) {
    this._credit = credit
    this._debit = debit
    this._balance = balance
    this._date = day.getDate()
  }

  get credit () {
    return this._credit
  }

  get debit () {
    return this._debit
  }

  get balance () {
    return this._balance
  }

  get date () {
    return this._date
  }
}

module.exports = Transaction
