const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

function generateAccessToken(email) {
    return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }

module.exports = generateAccessToken