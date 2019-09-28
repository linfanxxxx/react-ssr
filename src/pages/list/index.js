'use strict';

var React = require('react');

module.exports = function (props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'hello this is List Page, it is staticData now.'
        )
    );
};
