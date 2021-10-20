// yarn add webpack@4.43 webpack-cli@3.3.0 webpack-dev-server
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin")                       // 根据html模板，生成html文件

module.exports = {
    mode: 'development',                                                // 模式
    entry: './src/index.js',                                            // 入口文件
    output: {                                                           // 出口
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlPlugin({                    // html模板
            template: 'public/index.html',
            filename: 'index.html'
        }),
    ],
    module: {
        rules: [
            {							// 引入处理css的loader [webpack只有处理js的能力]
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
        ],
    },
    devServer: {
        open: true,
        progress: true,
        hot: true,
    },
}