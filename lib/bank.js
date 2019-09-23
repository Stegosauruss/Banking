class Bank {
  constructor () {
    this._balance = 0
  }

  get balance () {
    return this._balance
  }

  deposit (funds) {
    if (this._isNotPositive(funds)) throw new Error('Error: deposit value must be greater than 0')

    this._balance += funds
  }

  withdraw (funds) {
    if (this._isNotPositive(funds)) throw new Error('Error: withdrawal value must be greater than 0')

    this._balance -= funds
  }

  _isNotPositive (funds) {
    return funds <= 0
  }
}

module.exports = Bank
