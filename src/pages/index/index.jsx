const React = require('react');

module.exports = (props) => {
    const { data } = props;
    return (
        <div>
            <h1>hello {data.title}</h1>
            <a href={data.url}>{data.linkName}</a>
        </div>
    )
}