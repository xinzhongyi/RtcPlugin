const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const CleanWebpackPlugin = require('clean-webpack-plugin') ;
const webpack = require('webpack');

const config = {
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true' , path.resolve(path.resolve(__dirname), 'src')],

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin()
    ],

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },

    mode: "production",

    module: {
         rules: [
           {
                 test: /\.css$/,
                 use: [
                   'style-loader',
                   'css-loader'
                 ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
     ]
   }
}
module.exports = config