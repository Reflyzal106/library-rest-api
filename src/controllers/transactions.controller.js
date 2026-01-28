const db = require('../config/db');

exports.borrow = (req, res) => {
  db.query(
    'INSERT INTO transactions VALUES (NULL,?,?,CURDATE(),NULL,"borrowed")',
    [req.user.id, req.body.book_id],
    () => res.json({ message: 'Book borrowed' })
  );
};

exports.returnBook = (req, res) => {
  db.query(
    'UPDATE transactions SET return_date=CURDATE(),status="returned" WHERE id=?',
    [req.body.transaction_id],
    () => res.json({ message: 'Book returned' })
  );
};

exports.getAll = (req, res) => {
  db.query('SELECT * FROM transactions', (e, d) => res.json(d));
};

exports.byUser = (req, res) => {
  db.query('SELECT * FROM transactions WHERE user_id=?',
    [req.params.id], (e, d) => res.json(d));
};
