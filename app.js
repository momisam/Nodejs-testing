//import http module 
const http = require('http');

//create PORT
const PORT = 4000;
//create server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/' && req.method === 'GET'){
        res.statusCode = 200;
        res.end('Welcome to my Website');
    } else if (req.url === '/contact' && req.method === 'GET'){
        res.statusCode = 200;
        res.end('Contact Page: ithack434@gmail.com');
    } else if (req.url === '/about' && req.method === 'GET'){
        res.statusCode = 200;
        res.end('This server was created by MOSES SAM');
    } else {
        res.statusCode = 404;
        res.end('404 Page Not FOund');
    }
    
   
});

//start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});