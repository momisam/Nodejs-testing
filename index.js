//Using core Node To spin server
const http = require('http');

//create PORT
const PORT = 5000;

// Ceate a server 
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Welcome to my NodeJS server");
});

server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}/`);
});