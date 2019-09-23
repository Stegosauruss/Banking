class Bank {
  constructor () {
    this._balance = 0
  }

  get balance () {
    return this._balance
  }
}

module.exports = Bank
