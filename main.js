const crypto = require('crypto');
const fs = require('fs')

// Cipher
const password = 'holamundo';
const cipher = crypto.createCipher('aes128', 'a password');
var encrypted = cipher.update(password, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

// Decipher
const encrypt_password = '19851a0b803d7a2f2afe484c8d184da4';
const decipher = crypto.createDecipher('aes128','a password');
var decrypted = decipher.update(encrypt_password,'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

// Hash
const hash = crypto.createHash('sha256');
hash.on('readable', () => {
const data = hash.read();
if (data){
console.log(data.toString('hex'));
}
});
hash.write('me siento enferma');
hash.end();

// Hmac
const hmac = crypto.createHmac('sha256', 'a secret');
hmac.on('readable', () => {
  const data = hmac.read();
  if (data) {
    console.log(data.toString('hex'));
  }
});
hmac.write('mañana me quiero sentir mejor');
hmac.end();
