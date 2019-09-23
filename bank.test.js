const Bank = require('./bank')

test('Balance is initially set at 0', () => {
  const bank = new Bank()
  expect(bank.balance).toBe(0)
})
