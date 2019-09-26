# react-ssr学习

## v0.1.0 通过ejs模板渲染

利用node的http模块监听3000端口。并且使用ejs库来解析.ejs模板并传入参数，在成功回调中获取到完整的dom后返回response。

拉取v0.1.0的代码后，执行

> yarn 

> yarn start 

## v0.2.0 通过jsx代替ejs作为渲染模板

> yarn 

> npx babel src/index.jsx -o src/index.js

> yarn start
