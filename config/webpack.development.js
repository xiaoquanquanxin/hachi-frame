const WebpackCommon = require('./webpack.config');
const merge = require('webpack-merge');
// //  最小化css
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {ENV} = require('./webpack.environment.js');
const postCssConfig = require('./postcss.config');

const WebpackDevelopmentConfiguration = merge(WebpackCommon, {
    mode: 'development',
    //  如何生成 source map 在生产环境中不设置就行了
    devtool: 'source-map',
    // devtool: 'nosources-source-map',
    // devtool: 'inline-cheap-module-source-map',
    // devtool: "eval",
    output: {
        // 「devtool 中模块」的文件名模板
        devtoolModuleFilenameTemplate: "webpack://[namespace]/[resource-path]?[loaders]",
        // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。
        pathinfo: true, // boolean
    },

    //  css
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    //  这玩意儿dev不更新的
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         //  开发环境配置热更新
                    //         hmr: ENV === 'development',
                    //     }
                    // },
                    {loader: 'css-loader', options: {importLoaders: 2,}},
                    {
                        loader: 'postcss-loader',
                        options: postCssConfig
                    },
                ]
            },
        ]
    },

});
module.exports = WebpackDevelopmentConfiguration;