
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(process.cwd(), 'geometry.js'),

    output: {
        path: path.resolve(process.cwd(), 'public'),
        filename: 'app-[hash:8].js'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './3d.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.css'],
        alias: {
            src: path.resolve(process.cwd(), 'src')
        }
    }
};