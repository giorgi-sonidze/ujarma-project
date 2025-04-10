export default {
    logger: (app, connection) => (req, res, next) => {
      const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      const userAgent = req.headers['user-agent'];
      const contentType = req.headers['content-type'];
     
  
      const sql = "INSERT INTO clientinfo (client_ip, user_agent, content_type, connection) VALUES (?, ?, ?)";
      const values = [clientIp, userAgent, contentType];
  
      connection.query(sql, values, (err, result) => {
        if (err) {
          console.error("Error inserting client info:", err);
          // Optionally handle DB errors (don't stop request flow unless critical)
        } else {
          console.debug("Client info saved:", result.insertId);
        }        
      });
      next();
    }
  }
  