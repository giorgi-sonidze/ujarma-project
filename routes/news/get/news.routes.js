import { Router } from "express";
import connection from "../../../config/db.conf.js"
const router = express.Router();
Router.get('/', async (req, res) => {
  const query = `
      SELECT 
*    
      FROM 
          news
     
  `;

  try {
      const [rows] = await connection.query(query);
      res.json(rows); // Send the result as JSON
  } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching projects.');
    }
});

export default Router;
