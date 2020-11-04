const express = require('express')
const app = express()
require('dotenv').config()

// Connect to database
const connectDB = require('./config/db')
connectDB({
  host: process.env.DB_HOST,
  dbname: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

// Specify running port 
const PORT = process.env.PORT || 5000

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow the access of the api, to all clients/websites asking
  res.header('Access-Control-Allow-Headers', '*'); // which kind of header we want to accept 
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
})

// Basic testing route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Other routes
app.use('/api/scores', require('./routes/scores'))
app.use('/api/questions', require('./routes/questions'))

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
