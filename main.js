const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const Key1 = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

// From that we can calculate your public key (which doubles as your account address)
const account1 = Key1.getPublic('hex');

const Key2 = ec.keyFromPrivate('a3da28dec5cff123c96115aa0b6a4ced481dc74c293ca0907cb2b503db9b5e5c');

// From that we can calculate your public key (which doubles as your account address)
const account2 = Key2.getPublic('hex');

// Create new instance of Blockchain class
const msgChain = new Blockchain();

// Create a transaction & sign it with your key
const tx1 = new Transaction(account2, account1, '100');
tx1.signTransaction(Key2);
msgChain.addTransaction(tx1);

// Mine block
msgChain.minePendingTransactions();

// Create second transaction
const tx2 = new Transaction(account1, account2, '50');
tx2.signTransaction(Key1);
msgChain.addTransaction(tx2);

// Mine block
msgChain.minePendingTransactions();

console.log('Blockchain valid?', msgChain.isChainValid() ? 'Yes' : 'No');
