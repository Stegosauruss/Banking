var Day = require('./day')

class Transaction {
  constructor (credit, debit, balance, day = new Day()) {
    this.credit = credit
    this.debit = debit
    this.balance = balance
    this.date = day.getDate()
  }
}

module.exports = Transaction
