export default {

    addnews: (app, connection) => (req, res) => {
        const { title, content, created_date } = req.body;
        const sql = 'INSERT INTO news (title, content, created_date) VALUES (?, ?, ?)';
        connection.query(sql, [title, content, created_date], (err, result) => {
            if (err) {
                return res.status(500).send('Error adding news');
            }
            res.status(201).send('news added successfully');

        });
    }
}