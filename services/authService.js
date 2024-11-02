const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//hashing the user's password
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

//comparing the password's hash
async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

//token generation which expires in 1hr
function generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

module.exports = { hashPassword, verifyPassword, generateToken };
