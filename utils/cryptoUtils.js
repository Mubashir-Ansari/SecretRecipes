const crypto = require('crypto');

if (!process.env.SECRET_KEY) {
    console.error("SECRET_KEY is not defined. Make sure to set it in your .env file.");
    process.exit(1);
}

// AES 256 encryption algorithm for Secret Recipes
const key = Buffer.from(process.env.SECRET_KEY, 'hex'); 
const algorithm = 'aes-256-cbc';
const ivLength = 16;

function encrypt(text) {
    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

function decrypt(encryptedText) {
    const [ivHex, encrypted] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = { encrypt, decrypt };
