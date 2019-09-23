# Banking

An app which can store deposits and withdrawals as well as printing off a bank statement.

## How to use
run node
```bash
node
```
require the atm class
```
var ATM = require'./lib/atm.js'
```
Create a new ATM
```
atm = new ATM()
```
To make a withdrawal of £50 use
```
atm.withdrawal(50)
```
To make a deposit of £30 use
```
atm.deposit(30)
```
To print your statement use
```
atm.printStatement()
```

## User Stories

```
As a user,
In order to store my money,
I would like to make a deposit at a particular date.
```

```
As a user,
In order to access my money,
I would like to make a withdrawal at a particular date.
```

```
as a user,
In order to see which transactions I have conducted,
I would like to print a bank statement.
```

```
as a user,
In order to never go into a negative balance,
I would like to see an error message when I try to withdraw money I do not have.
```

## Testing
To install jest to your own machine run:
```
npm install --save-dev jest
```
to install dependencies.

Run tests using

```
npm run test

```
Or to see coverage
```
npm test -- --coverage
```

Run linter using
```
eslint .  
```

## Domain Model
I want to ensure that my classes have one responsibility. I originally began my domain model with two classes. An interface named ATM and a class called Bank which stored transaction history.


When I was completing the logic required for printing a statement it became clear to me that ATM was picking up methods which could be stored somewhere else so I seperated out those methods into their own class.