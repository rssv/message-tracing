const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

// Generate a new key pair and convert them to hex-strings
const key1 = ec.genKeyPair();
const publicKey1 = key1.getPublic('hex');
const privateKey1 = key1.getPrivate('hex');

const key2 = ec.genKeyPair();
const publicKey2 = key2.getPublic('hex');
const privateKey2 = key2.getPrivate('hex');

// Print the keys to the console
console.log();
console.log('Your public key \n', publicKey1);

console.log();
console.log('Your private key \n', privateKey1);

console.log();
console.log('Your public key \n', publicKey2);

console.log();
console.log('Your private key \n', privateKey2);

