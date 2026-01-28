require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

/* =======================
   MIDDLEWARE GLOBAL
======================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   ROUTES
======================= */
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/categories', require('./routes/categories.routes'));
app.use('/api/books', require('./routes/books.routes'));
app.use('/api/transactions', require('./routes/transactions.routes'));

/* =======================
   DEFAULT ROUTE
======================= */
app.get('/', (req, res) => {
  res.json({
    message: 'Library REST API is running',
    endpoints: {
      auth: ['/api/auth/register', '/api/auth/login'],
      users: ['/api/users'],
      categories: ['/api/categories'],
      books: ['/api/books'],
      transactions: ['/api/transactions']
    }
  });
});

/* =======================
   404 HANDLER
======================= */
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Endpoint not found'
  });
});

/* =======================
   SERVER
======================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
