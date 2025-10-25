const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'collec_out.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  

  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
}).listen(3000, () => {''
  console.log('Server running at http://localhost:3000/collec_out.html');
});
