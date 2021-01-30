const path = require('path');
const webpack = require('webpack');

const hotModuleReplacement = new webpack.HotModuleReplacementPlugin();

module.exports = {
    mode: 'development',
    resolve: { extensions: ['*', '.js', '.jsx'] },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 1138,
        publicPath: 'http://localhost:1138/dist/',
        hotOnly: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] },
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
        ],
    },
    plugins: [
        hotModuleReplacement,
    ],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
};