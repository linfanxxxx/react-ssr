const React = require('react');
const { renderToString } = require('react-dom/server');

function Index(props) {
    return (
        <h1>{props.data.h1}</h1>
    )
}

const fetchData = function() {
    return {
        title: 'react-ssr',
        h1: 'hello ssr',
    }
}

module.exports = renderToString(<Index data={fetchData()}/>) 