const http = require('http');

const port = 8080;

const server = http.createServer((req, res)=> {
    console.log(req);
    if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<H1>THIS IS ABOUT US</H1>');
    }else if(req.url === '/product-page'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<H1>THIS IS PRODUCT PAGE</H1>');
    }
  
});

server.listen(port, ()=> {
    console.log(`Server running at ${port}`);
});