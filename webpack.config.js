var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry : {
        index : './src/js/index.js'
    },
    output : {
        path : 'build',
        publicPath: '../',
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "Firefox >= 20", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4", "Firefox 15"]}!sass-loader')
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            filename: 'view/index.html',
            template: 'src/view/index.html',
            inject: true,
            hash: true
        })
    ]
};
