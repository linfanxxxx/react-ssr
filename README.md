# react-ssr学习

## v0.1.0 通过ejs模板渲染

利用node的http模块监听3000端口。并且使用ejs库来解析.ejs模板并传入参数，在成功回调中获取到完整的dom后返回response。

拉取v0.1.0的代码后，执行

> yarn 

> yarn start 

## v0.2.0 通过jsx代替ejs作为渲染模板

用jsx替代ejs作为渲染模板，但是需要先通过babel把jsx转为es5的js。最终index.js导出html字符串，作为response返回。

> yarn 

> npx babel src/index.jsx -o src/index.js

> yarn start

## v0.3.0 实现多页面跳转

整理了下目录，删除了v0.1和v0.2的一些文件，需要的话可以从git记录里找。实现了多个页面的跳转，但是目前还非常麻烦，需要babel非常多的文件，希望能改进这一点。

> yarn

> npx babel app.js -o app-babel.js

> npx babel src/pages/index/index.jsx -o src/pages/index/index.js

> npx babel src/pages/index/list.jsx -o src/pages/index/list.js

> node app-babel.js