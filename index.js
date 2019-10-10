const http = require('http');

const hostname = 'localhost';

const port = 3000;

const server = http.createServer((req, res) => {

  const { url } = req;

  if(url === '/translations') {
    const translations = { 1: 'one', 2: 'two', 3: 'three'}
    res.setHeader('Conten-Type', 'application/json');

    res.write(JSON.stringify(translations));

    res.end();
  }

  res.end('Welcome to Nodejs!');
});

server.listen(port, hostname, () => {
  console.log(`Server listening at ${hostname}:${port}`);
});
