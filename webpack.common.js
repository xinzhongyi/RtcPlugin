const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const CleanWebpackPlugin = require('clean-webpack-plugin') ;
const webpack = require('webpack');

const config = {
    entry: {
         app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
    ],

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
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