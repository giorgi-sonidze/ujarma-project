import connection from './config/db.conf.js';
import express from 'express';
import newsRoutes from './routes/news/get/news.routes.js';
import editnewsroutes from './routes/news/put/editnews.routes.js';
import addnewsroutes from './routes/news/post/addnews.routes.js';
const app = express()
const port = 3003
// Middleware to parse JSON
app.use(express.json());
app.get('/news', newsRoutes.news(app, connection));
app.get('/news/:id', newsRoutes.newsOne(app, connection));
app.put('/editnews/:id', editnewsroutes.editnews(app, connection));
app.post('/addnews', addnewsroutes.addnews(app, connection));



app.get('/', (req, res) => {
  res.send('Hello World!, hello georgia!')
})

app.get('/activities/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM activities WHERE id = ' + id, (err, rows, fields) => {
    if (err) throw err;
    if (rows.length == 1) {
      res.json({ status: true, result: rows[0] })
    } else {
      res.status(404).json({ status: false, result: 'record not found' })
    }
  })
});

app.get('/sights/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM sights WHERE id = ' + id, (err, rows, fields) => {
    if (err) throw err
    res.json(rows[0])
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








