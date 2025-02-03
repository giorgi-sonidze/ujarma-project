import connection from './config/db.conf.js';
import express from 'express'
const app = express()
const port = 3002
// Middleware to parse JSON
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!, hello georgia!')
})


app.get('/news', (req, res) => {
  connection.query('SELECT * FROM news', (err, results) => {
    if (err) {
      console.error("Error fetching news:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results); // Send the fetched news as JSON
  });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








