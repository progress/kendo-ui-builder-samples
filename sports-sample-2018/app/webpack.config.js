///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: './src/favicon.ico'
});
const commonChunkPlugin = new CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: Infinity
});
const extractCssPlugin = new ExtractTextPlugin('[name].style.css');
const copyWebpackPlugin = new CopyWebpackPlugin([{
    from: path.resolve(__dirname, 'src', 'images'),
    to: path.resolve(__dirname, '..', 'build-output', 'debug', 'images')
}, {
    from: path.resolve(__dirname, 'src', 'favicon.ico'),
    to: path.resolve(__dirname, '..', 'build-output', 'debug')
}, {
    from: path.resolve(__dirname, 'src', 'data-providers.json'),
    to: path.resolve(__dirname, '..', 'build-output', 'debug')
}, {
    from: path.resolve(__dirname, 'src', 'translations'),
    to: path.resolve(__dirname, '..', 'build-output', 'debug', 'translations')
}]);

module.exports = {
    context: __dirname,
    entry: {
        'app': './src/index.js',
        'progress': './src/progress.vendor.js',
        'vendor': './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, '..', 'build-output', 'debug'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'src', 'scripts', 'lib', 'progress.all.js')
                ],
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /style\.css/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader'],
                    fallbackLoader: 'style-loader',
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallbackLoader: 'style-loader',
                }),
                exclude: /style\.css/
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery'
            },
            {
                test: /\.(png|gif|jpg|svg|ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[hash].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate-loader',
                include: [
                    path.resolve(__dirname, 'src', 'scripts')
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                options: {
                    attrs: 'img:data-src'
                }
            }
        ]
    },
    plugins: [
        extractCssPlugin,
        htmlPlugin,
        commonChunkPlugin,
        copyWebpackPlugin
    ],
    devServer: {
        historyApiFallback: true,
        port: 4200,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    devtool: 'eval'
};