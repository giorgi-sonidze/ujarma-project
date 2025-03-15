import connection from './config/db.conf.js';
import express from 'express'
const app = express()
const port = 3002
// Middleware to parse JSON
app.use(express.json());



app.post ('/addactivities', (req,res) => {
  const {name ,description, days, created_date} = req.body;
  const sql = 'INSERT INTO activities (name, description, days, created_date) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name ,description, days, created_date], (err, result) => {
     if (err) {
      return res.status(500).send('Error adding activity');
     }
     res.status(201).send('activity added successfully');
  });
});

app.post ('/addsights', (req,res) => {
  const {name, content, created_date} = req.body;
  const sql = 'INSERT INTO sights (name, content, created_date) VALUES (?, ?, ?)';
  connection.query(sql, [name ,content ,created_date], (err, result) => {
    if (err) {
      return res.status(500).send('Error adding sight');
     }
     res.status(201).send('sight added successfully');
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