const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetPlugin = require("css-minimizer-webpack-plugin");


module.exports = (_env, argv) => {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        // Enables source-map generation in development mode.
        devtool: isDevelopment && "cheap-module-source-map",
        // The main file of the React application
        entry: './src/index.js',
        output: {
            // The root directory to store output files in.
            path: path.resolve(__dirname, 'dist'),
            // The filename pattern to use for generated files.
            filename: 'assets/js/[name].[contenthash].js',
            // The path to the root directory where the files will be deployed on the web server.
            publicPath: "/",
            clean: true,
            // assetModuleFilename: "assets/graphics/[name].[hash:8].[ext]"
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development"
                        }
                    }
                },
                {
                    test: /\.s?css$/,
                    /**
                     * css-loader: 
                     * Parses CSS files, resolving extrernal resources, 
                     * such as images, fonts, and additioinal style imports
                     * 
                     * style-loader: 
                     * During development, 
                     * injects loaded styles into the document runtime
                     * 
                     * mini-css-extract-plugin: 
                     * Extracts loaded styles into separate files for 
                     * production use to take advantage of browser caching.
                     */
                    use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
                },
                // {
                //     test: /\.s[ac]ss$/i,
                //     use: ['style-loader', 'css-loader', 'sass-loader']
                // },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                },
                // {
                //     test: /\.ico/i,
                //     use: {
                //         loader: 'url-loader',
                //         options: {
                //             name: "favicon.ico"
                //         }
                //     }
                // },
                {
                    test: /\.svg$/,
                    // Transforms imported files into React components.
                    /**
                     * Note: For certain animations or even mouseover effects,
                     * you may need to manipulate the SVG using JavaScript
                     * Fortunately, @svgr/webpack embeds SVG contents into the
                     * JavaScript bundle by default, allowing you to bypass the 
                     * security restrictions needed for this.
                     */
                    use: ["@svgr/webpack"]
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2|pdf)$/,
                    loader: require.resolve("file-loader"),
                    options: {
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                },
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },

        devServer: {
            // Enabbles asset compression for faster reloads.
            compress: true,
            // Enables a fallback to index.html for history-based routing.
            historyApiFallback: true,
            port: 3003,
            host: '127.0.0.1',
            // Opens the browser after launching the dev server.
            open: true,


            client: {
                // Displays Webpack errors in the browser window.
                overlay: true,
                logging: 'verbose'
            }
        },
        plugins: [
            isProduction && new MiniCssExtractPlugin({
                filename: "assets/css/[name].[contenthash:8].chunk.css"
            }),
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(
                    isProduction ? "production" : "development"
                )
            }),
            new HtmlWebpackPlugin({
                // favicon: path.resolve(__dirname, 'public/favicon.ico'),
                template: path.resolve(__dirname, "public/index.html"),
                inject: true
            }),
        ].filter(Boolean),
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                }),
                new OptimizeCssAssetPlugin()
            ],
            splitChunks: {
                chunks: "all",
                minSize: 0,
                maxInitialRequests: 20,
                maxAsyncRequests: 20,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module, chunks, cacheGroupKey) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
                        }
                    },
                    common: {
                        minChunks: 2,
                        priority: -10
                    }
                }
            },
            runtimeChunk: "single"
        }
    };
};