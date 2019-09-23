# Banking

An app which can store deposits and withdrawals as well as printing off a bank statement.

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
I am testing using Jest. run 
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
yarn test --coverage
```

Run linter using
```
./node_modules/.bin/eslint .  
```

## Domain Model
I want to ensure that my classes have one responsibility