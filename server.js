const path = require("path") ;
const express = require('express') ;
const webpack = require('webpack') ;
const webpackDevMiddleware = require('webpack-dev-middleware') ;
const webpackHotMiddleware = require("webpack-Hot-middleware") ;

const app = express() ;
const config = require('./webpack.dev.js') ;
const DIST_DIR = path.join(__dirname, "dist") ;
const PORT = 3000 ;
const complier = webpack(config) ;

let devMiddleware = webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath,
    quiet: true //向控制台显示任何内容
})

let hotMiddleware = webpackHotMiddleware(complier,{
    log: false,
    heartbeat: 2000,
})

app.use(devMiddleware)

app.use(hotMiddleware);

// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(express.static(DIST_DIR))

app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT)
})