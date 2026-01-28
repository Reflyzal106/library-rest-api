const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM books', (e, d) => res.json(d));
};

exports.getById = (req, res) => {
  db.query('SELECT * FROM books WHERE id=?',
    [req.params.id], (e, d) => res.json(d[0]));
};

exports.create = (req, res) => {
  const { title, author, category_id, stock } = req.body;
  db.query(
    'INSERT INTO books VALUES (NULL,?,?,?,?)',
    [title, author, category_id, stock],
    () => res.json({ message: 'Book added' })
  );
};

exports.update = (req, res) => {
  const { title, author, category_id, stock } = req.body;
  db.query(
    'UPDATE books SET title=?,author=?,category_id=?,stock=? WHERE id=?',
    [title, author, category_id, stock, req.params.id],
    () => res.json({ message: 'Book updated' })
  );
};

exports.delete = (req, res) => {
  db.query('DELETE FROM books WHERE id=?',
    [req.params.id],
    () => res.json({ message: 'Book deleted' }));
};

exports.byCategory = (req, res) => {
  db.query('SELECT * FROM books WHERE category_id=?',
    [req.params.id], (e, d) => res.json(d));
};
