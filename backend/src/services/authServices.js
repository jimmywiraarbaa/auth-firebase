const admin = require('./firebase');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

async function register(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await admin.auth().createUser({
    email,
    password: hashedPassword,
  });
  return user;
}

async function login(email, password) {
  const userRecord = await admin.auth().getUserByEmail(email);
  const isValid = await bcrypt.compare(password, userRecord.passwordHash);
  if (!isValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ uid: userRecord.uid }, SECRET_KEY, {
    expiresIn: '1h',
  });
  return token;
}

module.exports = { register, login };
