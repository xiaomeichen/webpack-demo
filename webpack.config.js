const path = require('path');
// const HTMLWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    /*---------------入口文件----------*/
    entry: {
        'app': './src/index.js',
        'print': './src/print.js',
        'common': './src/common.js'
    },
    /*---------------输出文件----------*/
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /*---------------加载器-----------*/
    module: {
        rules: [
            /*------------------css 加载器---------------*/
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            /*------------------图片 加载器--------------*/
            {test: /\.(png|jpg|jpeg|svg|gif)$/, use: ['file-loader']},
            /*------------------字体 加载器-------------*/
            {test: /\.(woff|woff2|eot|ttf|oft)$/, use: ['file-loader']},
            /*------------------es6 编译--------------*/
            {test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel-loader', query: {
                    presets: [ 'es2015']
                }
            }
        ]
    },
    plugins: [
        /*-----------Html插件: 自动添加更新打包js到index.html*/
        // new HTMLWebpackPlugin({
        //     title: 'Code Splitting'
        // })
        // ,
        // /*-----------插件：清理打包文件---------*/
        // new CleanWebpackPlugin(['dist'])
    ],
    /*---------------错误位置提示-------------*/
    devtool: 'inline-source-map',
    /*---------------webpack-dev-server设置：自动编译、刷新---------*/
    devServer: {contentBase: './dist'}
};