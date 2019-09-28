'use strict';

var http = require('http');
var routes = require('./src/router');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

var components = require('./componentsMap');
var React = require('react');

var fetchData = async function fetchData() {
    return await new Promise(function (resolove) {
        setTimeout(function () {
            resolove({
                title: 'this is Index Page',
                url: '/list',
                linkName: 'go to List Page'
            });
        }, 2000);
    });
};

http.createServer(async function (req, res) {
    routes.forEach(async function (item) {
        if (item.path === req.url) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            var Component = components[item.component];
            var data = await fetchData();
            var reactHtml = renderToString(React.createElement(Component, { data: data }));
            res.end(reactHtml);
        }
    });
}).listen(3000);
