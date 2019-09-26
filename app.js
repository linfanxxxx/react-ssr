const http = require('http');
const reactHtml = require('./src/index.js');


http.createServer((req, res) => {
    console.log('get request');
    if(req.url === '/abc') {
    console.log('match url');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(reactHtml);
    }
}).listen(3000);