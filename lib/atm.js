const Bank = require('./bank')

class ATM {
  constructor (BankClass = Bank) {
    this._bank = new BankClass()
  }

  withdrawal (funds) {
    this._bank.withdraw(funds)
  }

  deposit (funds) {
    this._bank.deposit(funds)
  }

  statement () {
    var message = 'date || credit || debit || balance'
    var self = this

    this._bank.history.forEach(function (log) {
      var logMessage = self._formatMessage(log)
      message = message.concat(logMessage)
    })

    return message
  }

  _formatMessage (log) {
    return '\n' + log.date + ' ||' + this._format(log.credit) + ' ||' + this._format(log.debit) + ' ||' + this._format(log.balance)
  }

  _format (value) {
    if (value === 0) {
      return ''
    } else {
      return ' ' + value.toFixed(2)
    }
  }
}

module.exports = ATM
