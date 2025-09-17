const express = require('express')
const app = express()
const port = 3000

require('dotenv').config();

app.get('/', (req, res) => {
  res.send(process.env.DB_USER)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})