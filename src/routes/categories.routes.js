const r = require('express').Router();
const a = require('../middleware/auth');
const c = require('../controllers/categories.controller');

r.get('/', a, c.getAll);
r.post('/', a, c.create);
r.put('/:id', a, c.update);
r.delete('/:id', a, c.delete);

module.exports = r;
