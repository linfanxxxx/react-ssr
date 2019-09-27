import React from 'react';


// todo 怎么解决先把jsx通过babel转移后再转换为字符串

module.exports = (props) => {
    return (
        <div>
            <h1>hello {this.props.title}</h1>
            <a href={this.props.url}>{this.props.linkName}</a>
        </div>
    )
}