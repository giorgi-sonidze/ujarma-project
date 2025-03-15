
export default {
    editnews: (app, connection) =>  (req, res) => {
        const newsId = req.params.id;
        const { title, content, created_date } = req.body;

        if (!title || !content) {
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
    },
}