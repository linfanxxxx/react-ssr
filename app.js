const http = require('http');
const routes = require('./src/router');
const { renderToString } = require('react-dom/server');
const components = require('./componentsMap');
const React = require('react');

const fetchData = async () => {
    return await new Promise((resolove) => {
        setTimeout(()=>{
            resolove({
                title: 'this is Index Page',
                url: '/list',
                linkName: 'go to List Page',
            })
        }, 2000)
    })
}

http.createServer(async (req, res) => {
    routes.forEach(async item => {
        if(item.path === req.url) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            const Component = components[item.component];
            const data = await fetchData();
            const reactHtml = renderToString(<Component data={data}/>);
            res.end(reactHtml);
        }
    })
}).listen(3000);