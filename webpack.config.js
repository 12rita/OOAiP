const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',

    output: {
        path: path.resolve(process.cwd(), 'public'),
        filename: 'app-[hash:8].js'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use:   [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },


    resolve: {
        extensions: ['.js', '.css', '.jsx'],
        alias: {
            src: path.resolve(process.cwd(), 'src')
        }
    }
};