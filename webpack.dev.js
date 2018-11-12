const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true' , path.resolve(path.resolve(__dirname), 'src')],
    devtool: 'inline-source-map',
    plugins: [
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }
        ]
    },
    mode: 'development'
 });