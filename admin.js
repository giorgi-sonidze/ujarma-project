import connection from './config/db.conf.js';
import express from 'express'
const app = express()
const port = 3000
// Middleware to parse JSON
app.use(express.json());


app.post('/news', (req, res) => {
    const { title, content, created_date} = req.body;
    const sql = 'INSERT INTO news (title, content, created_date) VALUES (?, ?, ?)';
    connection.query(sql, [title, content, created_date], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding news');
        }
        res.status(201).send('news added successfully');
    });
});