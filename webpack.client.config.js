require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    bail: true,
    mode: process.env.APP_ENV || 'development',
    target: 'web',
    devtool: 'source-map',
    entry: [
        './src/client.js',
        './src/styles.sass',
    ],
    output: {
        filename: 'client.min.js',
        path: path.resolve(__dirname, 'build/public/js'),
        publicPath: '/build/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
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
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
                            outputPath: '../css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            url: true,
                            root: 'http://localhost:9000'
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'src/public'), to: path.resolve(__dirname, 'build/public') },
        ], {
                debug: process.env.APP_ENV === 'production' ? 'ignore' : 'debug',
        })
    ],
    externals: [],
};
