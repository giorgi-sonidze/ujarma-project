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

app.put('/news/:id', (req,res) => {
    const newsId = req.params.id;
    const { title, content, created_date } = req.body;

    if (!title || !content || !created_date) {
        return res.status(400).json({ error: 'All fields (title, content, created_date) are required' });
    }

    const sql = 'UPDATE news SET title = ?, content = ?, created_date = ? WHERE id = ?';
    connection.query(sql, [title, content, created_date, newsId], (err, result) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.status(200).json({ message: 'News updated successfully' });
    });
});



app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM news WHERE id = ?";
    
    CONNET.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Record not found" });
      }
  
      res.json({ message: "Record deleted successfully" });
    });
  });
  
 



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })