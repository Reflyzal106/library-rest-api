const r = require('express').Router();
const a = require('../middleware/auth');
const b = require('../controllers/books.controller');

r.get('/', a, b.getAll);
r.get('/:id', a, b.getById);
r.get('/category/:id', a, b.byCategory);
r.post('/', a, b.create);
r.put('/:id', a, b.update);
r.delete('/:id', a, b.delete);

module.exports = r;
