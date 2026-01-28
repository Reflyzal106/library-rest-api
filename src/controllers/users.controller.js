const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT id,name,email,role FROM users', (e, d) => res.json(d));
};

exports.getById = (req, res) => {
  db.query('SELECT id,name,email,role FROM users WHERE id=?',
    [req.params.id], (e, d) => res.json(d[0]));
};

exports.update = (req, res) => {
  const { name, email } = req.body;
  db.query('UPDATE users SET name=?,email=? WHERE id=?',
    [name, email, req.params.id],
    () => res.json({ message: 'User updated' }));
};

exports.delete = (req, res) => {
  db.query('DELETE FROM users WHERE id=?',
    [req.params.id],
    () => res.json({ message: 'User deleted' }));
};
