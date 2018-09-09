require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    bail: true,
    mode: process.env.APP_ENV || 'development',
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            target: {
                                browsers: ['last 2 versions']
                            }
                        }]
                    ],
                    plugins: [
                        "transform-class-properties",
                    ]
                }
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            url: true,
                            root: 'http://localhost:9000'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    externals: [
        webpackNodeExternals(),
    ],
    plugins: [
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'src/config/ssl'), to: path.resolve(__dirname, 'build/ssl') },
        ], {
            debug: process.env.APP_ENV === 'production' ? 'ignore' : 'debug',
        })
    ]
};
