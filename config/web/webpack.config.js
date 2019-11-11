console.log('这是webpack.config.js🍌');
console.log('这是webpack.config.js🍌');
console.log('这是webpack.config.js🍌');
const {resolve} = require("path");
const webpack = require('webpack');
//  打包模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//  清理dist目录【webapp】
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//  处理*.vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//  白屏加载loading
const AppLoadingPage = require('./customPlugins/AppLoadingPage');

//  src的位置
const __src = '../../src/web';
const __dist = '../../dist/web';
//  public路径
const publicPath = '/';


module.exports = {
    entry: {
        app: ['babel-polyfill', resolve(__dirname, __src),],
    },

    output: {
        // 输出解析文件的目录，url 相对于 HTML 页面,   就是js的src前面是什么，用了webpack的hmr，必须是'/'
        publicPath: publicPath,
        path: resolve(__dirname, __dist),
        filename: "js/[name].[hash:8].js",
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
        /** 高级输出配置 */
        // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。
        pathinfo: false, // boolean

        // 「附加分块(additional chunk)」的文件名模板
        // chunkFilename: "[id].js",
        // chunkFilename: "[chunkhash].js", // 长效缓存(/guides/caching)

        //  带凭据(credential)启用跨域加载 with credentials
        // crossOriginLoading: "use-credentials"

    },

    // 禁用/启用缓存
    cache: false, // boolean

    // 启用观察 开启了就相当于dev-server了
    watch: false, // boolean，
    externals: {
        'vue': 'Vue',
        'element-ui': "eui",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',

                    options: {
                        "presets": ["@babel/preset-env"],
                        include: [resolve(__dirname, __src)],
                        exclude: /node_modules/,
                    }
                }
            },
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            //  常规文件
            {
                test: /\.(png|jpg|gif|ttf|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                            //  输出位置
                            outputPath: 'static/',
                            useRelativePath: true,
                        }
                    }
                ]
            }
        ]
    },
    //  路径配置
    resolve: {
        // 用于查找模块的目录
        modules: [
            "node_modules",
            resolve(__dirname, "../node_modules"),
        ],
        // 使用的扩展名
        extensions: [".js", ".json", ".jsx", ".css", "vue"],
        alias: {
            "@aliasComponents": resolve(__dirname, `${__src}/components`),
            "@aliasAssets": resolve(__dirname, `${__src}/assets`),
            '@aliasConfig': resolve(__dirname,),
        },
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: false,         //  显示删除了谁
            dry: false,             //  false删除文件夹
        }),
        new HtmlWebpackPlugin({
            filename: `index.html`,      //  达成的包，最后在/page下
            template: resolve(__dirname, __src, 'index.html'),                     //  模板来自于/template
            title: '欢迎使用hachi IOT',
            style: AppLoadingPage.StyleString,
            appLoading: AppLoadingPage.HtmlString,
        }),

        new VueLoaderPlugin({}),

    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxSize: 0,
            minSize: 5 * 1024,//   拆分前的大小
            minChunks: 1,       //  最小被引用数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -15,
                    filename: 'js/vendors.[hash:8].js',
                },
                // others: {
                //     maxSize: 1024 * 1024,
                //     priority: -20,
                //     reuseExistingChunk: true,
                //     chunks: 'initial',
                //     filename: 'js/main.[chunkhash:8].js',
                // }
            }
        }
    },

    stats: {
        children: false,
        chunks: false,
        chunkModules: false,
        assets: true,
        builtAt: false,
        modules: false,
        entrypoints: false
    }
};