
export default {
  news: (app, connection) => async (req, res) => {
    try {
      const [rows] = await connection.query('SELECT * FROM news ORDER BY id DESC');
      res.json(rows);
    } catch (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: "Database query failed" });
    }
  },

  newsOne: (app, connection) => async (req, res) => {
    const id = req.params.id;
    try {
      const [rows] = await db.query('SELECT * FROM news WHERE id = ?', [id]);
      res.json(rows);
    } catch (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: "Database query failed" });
    }
  }
};
