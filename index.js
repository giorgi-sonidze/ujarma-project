import connection from './config/db.conf';
import express from 'express'
const app = express()
const port = 3000
// Middleware to parse JSON
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
