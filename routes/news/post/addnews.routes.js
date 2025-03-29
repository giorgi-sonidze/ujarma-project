export default {
    addnews: (app, connection) => (req, res) => {
        const { title, content, created_date } = req.body;
        const sql = 'INSERT INTO news (title, content, created_date) VALUES (?, ?, ?)';
        connection.query(sql, [title, content, created_date]).then((result) => {
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(200).json({ message: 'News added successfully' });
        }).catch((err) => {
            console.error('Database Error:', err);
            return res.status(500).json({ error: err.message });
        })
    }
}