class Bank {
  constructor () {
    this._balance = 0
    this._history = []
  }

  get balance () {
    return this._balance
  }

  get history () {
    return this._history
  }

  deposit (funds) {
    if (this._isNotPositive(funds)) throw new Error('Error: deposit value must be greater than 0')

    this._balance += funds
    this._record(funds, 0)
  }

  withdraw (funds) {
    if (this._isNotPositive(funds)) throw new Error('Error: withdrawal value must be greater than 0')
    if (this._insignificantBalance(funds)) throw new Error('Error: funds are not available')

    this._balance -= funds
    this._record(0, funds)
  }

  _record (credit, debit) {
    var log = {
      date: this._getDate(),
      credit: credit,
      debit: debit,
      balance: this._balance
    }
    this._history.unshift(log)
  }

  _isNotPositive (funds) {
    return funds <= 0
  }

  _insignificantBalance (funds) {
    return this._balance - funds < 0
  }

  _getDate () {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()
    return dd + '/' + mm + '/' + yyyy
  }
}

module.exports = Bank
