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



app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM news WHERE id = ' + id, (err, rows, fields) => {
      if (err) throw err
      res.json(rows[0])
  })
})

app.get('/activities/:id', (req,res) => {
  const id =req.params.id;
  connection.query('SELECT * FROM activities WHERE id = ' + id, (err,rows, fields) => {
    if (err) throw err
    res.json(rows[0])

  })
})
app.get('/sights/:id', (req,res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM sights WHERE id = ' + id, (err, rows, fields) => {
    if (err) throw err
    res.json(rows[0])
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








