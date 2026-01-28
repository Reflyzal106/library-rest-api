const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM categories', (e, d) => res.json(d));
};

exports.create = (req, res) => {
  db.query('INSERT INTO categories (name) VALUES (?)',
    [req.body.name],
    () => res.json({ message: 'Category added' }));
};

exports.update = (req, res) => {
  db.query('UPDATE categories SET name=? WHERE id=?',
    [req.body.name, req.params.id],
    () => res.json({ message: 'Category updated' }));
};

exports.delete = (req, res) => {
  db.query('DELETE FROM categories WHERE id=?',
    [req.params.id],
    () => res.json({ message: 'Category deleted' }));
};
