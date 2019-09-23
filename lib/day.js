class Day {
  getDate () {
    var today = new Date()
    var day = String(today.getDate()).padStart(2, '0')
    var month = String(today.getMonth() + 1).padStart(2, '0')
    var year = today.getFullYear()
    return day + '/' + month + '/' + year
  }
}

module.exports = Day