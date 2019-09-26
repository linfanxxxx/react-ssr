'use strict';

var React = require('react');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

function Index(props) {
    return React.createElement(
        'h1',
        null,
        props.data.h1
    );
}

var fetchData = function fetchData() {
    return {
        title: 'react-ssr',
        h1: 'hello ssr'
    };
};

module.exports = renderToString(React.createElement(Index, { data: fetchData() }));
