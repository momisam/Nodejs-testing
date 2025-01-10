//Spin server with http module
const http = require('http');

//create PORT
const PORT = 5000;

// Ceate a server 
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Welcome to my NodeJS server");}
    else if (req.url === '/about' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This NodeJS server was created by Moses Sam');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}/`);
});