'use strict';

var React = require('react');

module.exports = function (props) {
    var data = props.data;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'hello ',
            data.title
        ),
        React.createElement(
            'a',
            { href: data.url },
            data.linkName
        )
    );
};
