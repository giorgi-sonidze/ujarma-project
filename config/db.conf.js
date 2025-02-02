import mysql from 'mysql';


const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'ujarma'
});
// Test the connection
(async () => {
    try {
        const result = await connection.query('SELECT 1'); // Simple test query
        console.log('Database connected successfully!');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
})();
export default connection;