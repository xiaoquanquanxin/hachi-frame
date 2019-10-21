const {resolve, join} = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
const WebpackDevelopmentConfiguration = require('./webpack.development');
console.log(resolve(__dirname, '../dist'));
const __dist = '../dist';
module.exports = merge({
    devServer: {
        contentBase: resolve(__dirname, __dist),
        compress: true,     //  gzip
        port: 8080,
        hot: true,      //  热更新
        headers: {
            "X-Custom-Foo": "bar"   //  响应
        },
        historyApiFallback: false,
        open: false,
        inline: true,// sssx
        progress: true,
        index: 'index.html'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}, WebpackDevelopmentConfiguration);