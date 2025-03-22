export default {
  news: (connection) => (req, res) => {
    connection.query('SELECT * FROM news', (err, results) => {
      if (err) {
        console.error("Error fetching news:", err);
        return res.status(500).json({ error: "Database query failed" });
      }
      res.json(results);
    });
  },

  newsOne: (connection) => (req, res) => {
    const id = req.params.id;

    // Use a parameterized query to prevent SQL injection
    connection.query('SELECT * FROM news WHERE id = ?', [id], (err, rows) => {
      if (err) {
        console.error("Error fetching news by ID:", err);
        return res.status(500).json({ error: "Database query failed" });
      }
      res.json(rows[0] || { error: "News not found" }); // Handle case where no news is found
    });
  }
};
