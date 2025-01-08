// Assignment on how to spin up server
//import http server 
const http = require('http');
 
// create PORT
const PORT = 4000;

// create server 
const server = http.createServer((req, res) => {
    // handling requests goes here
if (req.url === '/' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome!</h1><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Submit</button></form>');
}else if (req.url === '/users' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<ul><li>User 1</li><li>User 2</li></ul>');
    } else if (req.url === '/create-user' && req.method === 'POST'){
    
        const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const username = parsedBody.split('=')[1];
        console.log('Username:', username);
        
        res.writeHead(302, {Location: '/'});
        res.end();
    });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Page Not Found</h1>');
    }
});


server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});
