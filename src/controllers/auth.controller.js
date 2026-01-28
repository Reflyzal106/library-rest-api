const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 8);

  db.query(
    'INSERT INTO users (name,email,password) VALUES (?,?,?)',
    [name, email, hashed],
    () => res.json({ message: 'Register success' })
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email=?', [email], (err, result) => {
    if (!result.length) return res.status(404).json({ message: 'User not found' });

    const valid = bcrypt.compareSync(password, result[0].password);
    if (!valid) return res.status(401).json({ message: 'Wrong password' });

    const token = jwt.sign(
      { id: result[0].id, role: result[0].role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token });
  });
};
