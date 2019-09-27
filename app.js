const http = require('http');
const routes = require('./src/router');
const { renderToString } = require('react-dom/server');

const fetchData = async () => {
    return await Promise((resolove) => {
        setTimeout(()=>{
            resolove({
                title: 'this is Index Page',
                url: '/detail',
                linkName: 'go to List Page',
            })
        }, 2000)
    })
}

http.createServer(async (req, res) => {
    routes.forEach(item => {
        if(item.path === req.url) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(reactHtml);
        }
    })
    console.log('get request');
    if(req.url === '/abc') {
    console.log('match url');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(reactHtml);
    }
}).listen(3000);