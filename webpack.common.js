const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['postcss-preset-env']]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                resourceQuery: /raw/,
                type: 'asset/source'
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.svg/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),

        // Index
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        // Section
        new HtmlWebpackPlugin({
            template: './src/sos.html',
            filename: './sos.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/for-future.html',
            filename: './for-future.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/lifehacks.html',
            filename: './lifehacks.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/helpful.html',
            filename: './helpful.html'
        }),


        // Article
        new HtmlWebpackPlugin({
            template: './src/sos/sos-article.html',
            filename: './sos/sos-article.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/lifehacks/hack-article.html',
            filename: './lifehacks/hack-article.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/helpful/help-article.html',
            filename: './helpful/help-article.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/for-future/fut-article.html',
            filename: './for-future/fut-article.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/for-future/carchoice.html',
            filename: './for-future/carchoice.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/for-future/pdd.html',
            filename: './for-future/pdd.html'
        }),

        // Partials
        new HtmlWebpackPartialsPlugin([
            {
                path: path.join(__dirname, './src/partials/analytics.html'),
                location: 'analytics',
                template_filename: '*',
                priority: 'replace'
            }
        ])
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin()]
    }
}
