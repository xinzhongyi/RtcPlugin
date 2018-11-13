const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const CleanWebpackPlugin = require('clean-webpack-plugin') ;
const webpack = require('webpack');

const config = {
    entry: {
        app: './src/index.js',
        polyfills: './src/polyfills.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'initial',
            minSize: 1,
            minChunks: 1,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                },
                commons: {
                    name: "commons",
                    chunks: "all",
                    minChunks: 2,
                },
                styles: {
                    name: 'styles',
                    test: /\.scss|css$/,
                    chunks: 'all',
                    enforce: true,
                    minChunks: 2,
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
    ],

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
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
            },
            {
                test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    }
}
module.exports = config