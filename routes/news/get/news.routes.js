
export default {
  news: (app, connection) => (req, res) => {
    connection.query('SELECT * FROM news', (err, results) => {
      if (err) {
        console.error("Error fetching news:", err);
        return res.status(500).json({ error: "Database query failed" });
      }
      res.json(results); // Send the fetched news as JSON
    });
  },
  newsOne: (app, connection) =>  (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM news WHERE id = ' + id, (err, rows, fields) => {
      if (err) throw err
      res.json(rows[0])
    })
  }
}