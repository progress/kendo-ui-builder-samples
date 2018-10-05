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
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CompressionPlugin = require("compression-webpack-plugin");

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
    to: path.resolve(__dirname, '..', 'build-output', 'release', 'images')
}, {
    from: path.resolve(__dirname, 'src', 'favicon.ico'),
    to: path.resolve(__dirname, '..', 'build-output', 'release')
}, {
    from: path.resolve(__dirname, 'src', 'data-providers.json'),
    to: path.resolve(__dirname, '..', 'build-output', 'release')
}, {
    from: path.resolve(__dirname, 'src', 'translations'),
    to: path.resolve(__dirname, '..', 'build-output', 'release', 'translations')
}]);
const uglifyJs = new UglifyJsPlugin({
    comments: false,
    compress: {
        'screw_ie8': true
    },
    mangle: {
        'screw_ie8': true
    }
});
const occurrenceOrderPlugin = new OccurrenceOrderPlugin(true);
const compressionPlugin = new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$/,
    threshold: 10240,
    minRatio: 0.8
});

module.exports = {
    context: __dirname,
    entry: {
        'app': './src/index.js',
        'progress': './src/progress.vendor.js',
        'vendor': './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, '..', 'build-output', 'release'),
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
        copyWebpackPlugin,
        occurrenceOrderPlugin,
        compressionPlugin,
        uglifyJs
    ],
    devtool: 'source-map'
};