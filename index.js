const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  const query = url.parse(req.url, true).query;

  
  res.write(req);

  if (req.method === 'GET' && query['hub.mode'] === 'subscribe') {
    const challenge = query['hub.challenge'];
    const verifyToken = 'End_of_the_day'; // Replace with your verify token

    if (query['hub.verify_token'] === verifyToken) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(challenge);
    } else {
      res.writeHead(403, {'Content-Type': 'text/plain'});
      res.end('Invalid verify token');
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found'); 
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});