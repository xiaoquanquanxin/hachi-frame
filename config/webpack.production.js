const merge = require('webpack-merge');
const WebpackCommon = require('./webpack.config');
//  最小化css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//  最小化JavaScript
const TerserPlugin = require('terser-webpack-plugin');
//  javascript tree-shaking
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//  最小化css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {ENV} = require('./webpack.environment.js');
//  postcss配置
const postCssConfig = require('./postcss.config');
const WebpackProductionConfiguration = merge(WebpackCommon, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: 4,    //   多进程
                sourceMap: true, //  仅适用于source-map，inline-source-map，hidden-source-map和nosources-source-map值的devtool选项。
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ]
    },
    //  性能
    performance: {
        // hints: "warning", // 枚举
        hints: "error", // 性能提示中抛出错误
        maxAssetSize: 1024 * 1024, // 整数类型（以字节为单位）
        maxEntrypointSize: 1024 * 1024, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //  开发环境配置热更新
                            hmr: ENV === 'development',
                        }
                    },
                    {loader: 'css-loader', options: {importLoaders: 2,}},
                    {
                        loader: 'postcss-loader',
                        options: postCssConfig
                    },
                ]
            },
        ]
    },
    plugins: [
        //  css压缩插件
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css',
            chunkFilename: 'css/[id].[chunkhash:8].css',
        }),
        new UglifyJsPlugin({}),
    ]
});
module.exports = WebpackProductionConfiguration;

