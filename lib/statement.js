class Statement {
  message (history) {
    console.log('date || credit || debit || balance')
    var self = this

    history.forEach(function (log) {
      var logMessage = self._formatMessage(log)
      console.log(logMessage)
    })
  }

  _formatMessage (log) {
    return `${log.date} ||${this._format(log.credit)} ||${this._format(log.debit)} ||${this._format(log.balance)}`
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
