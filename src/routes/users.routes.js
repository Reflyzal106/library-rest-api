const r = require('express').Router();
const a = require('../middleware/auth');
const u = require('../controllers/users.controller');

r.get('/', a, u.getAll);
r.get('/:id', a, u.getById);
r.put('/:id', a, u.update);
r.delete('/:id', a, u.delete);

module.exports = r;
