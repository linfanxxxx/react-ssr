const ejs = require('ejs');
const http = require('http');
const path = require('path');

http.createServer((req, res) => {
    console.log('get request');
    if(req.url === '/abc') {
    console.log('match url');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        ejs.renderFile(path.resolve('src/index.ejs'), {
            title: 'react-ssr',
            data: 'ssr - 首页',
        },(err, data) => {
            if(err) {
                console.log(err);
            } else{
                res.end(data);
            }
        })
    }
}).listen(3000);