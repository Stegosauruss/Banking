class Statement {
  message (history) {
    var message = 'date || credit || debit || balance'
    var self = this

    history.forEach(function (log) {
      var logMessage = self._formatMessage(log)
      message = message.concat(logMessage)
    })

    return message
  }

  _formatMessage (log) {
    return `\n${log.date} ||${this._format(log.credit)} ||${this._format(log.debit)} ||${this._format(log.balance)}`
  }

  _format (value) {
    if (value === 0) {
      return ''
    } else {
      return ' ' + value.toFixed(2)
    }
  }
}

module.exports = Statement
