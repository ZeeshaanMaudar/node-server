const http = require('http');

const hostname = 'localhost';

const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Welcome to Nodejs!');
});

server.listen(port, hostname, () => {
  console.log(`Server listening at ${hostname}:${port}`);
});