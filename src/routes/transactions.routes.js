const r = require('express').Router();
const a = require('../middleware/auth');
const t = require('../controllers/transactions.controller');

r.post('/borrow', a, t.borrow);
r.post('/return', a, t.returnBook);
r.get('/', a, t.getAll);
r.get('/user/:id', a, t.byUser);

module.exports = r;
