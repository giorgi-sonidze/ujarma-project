export default {
  activities: (app, db) => async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM activities ORDER BY id DESC');
      res.json(rows);
    } catch (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: "Database query failed" });
    }
  },
}