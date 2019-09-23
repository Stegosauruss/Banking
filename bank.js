class Bank {
  constructor () {
    this._balance = 0
  }

  get balance () {
    return this._balance
  }

  deposit (value) {
    this._balance += value
  }
}

module.exports = Bank
