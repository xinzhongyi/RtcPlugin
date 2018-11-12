const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const CleanWebpackPlugin = require('clean-webpack-plugin') ;
const config = {
    entry: './src/index.js',

    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },

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