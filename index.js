//Using core Node To spin server
const http = require('http');

//create PORT
const PORT = 5000;

// Ceate a server 
const server = http.createServer((req, res) => {
    res.setHeader(200, {'Content-Type': 'text/plain'});
});