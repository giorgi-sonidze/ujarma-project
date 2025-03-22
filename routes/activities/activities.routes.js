
export default {
    activities: (app, connection) => (req, res) => {
      connection.query('SELECT * FROM activities', (err, results) => {
        if (err) {
          console.error("Error fetching activity:", err);
          return res.status(500).json({ error: "Database query failed" });
        }
        res.json(results); // Send the fetched news as JSON
      });
    },
}