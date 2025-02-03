import connection from './config/db.conf.js';
import express from 'express'
const app = express()
const port = 3002
// Middleware to parse JSON
app.use(express.json());


app.post('/addnews', (req, res) => {
    const { title, content, created_date} = req.body;
    const sql = 'INSERT INTO news (title, content, created_date) VALUES (?, ?, ?)';
    connection.query(sql, [title, content, created_date], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding news');
        }
        res.status(201).send('news added successfully');
        
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })