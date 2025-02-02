import connection from './config/db.conf.js';
import express from 'express'
const app = express()
const port = 3001
// Middleware to parse JSON
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!, hello georgia!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




