import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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