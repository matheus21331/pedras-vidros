'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

const paths = {
    appSrc: resolveApp('src'),
    appBuild: resolveApp('assets'),
    appIndexJs: resolveApp('src/js/main.js'),
    appIndexImg: resolveApp('src/img/'),
    appDestImg: resolveApp('assets/img/'),
    appIndexFonts: resolveApp('src/fonts/'),
    appDestFonts: resolveApp('assets/fonts/'),
    appNodeModules: resolveApp('node_modules'),
    appIndexCSS: resolveApp('src/sass/style.scss'),
};

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const DEV = process.env.NODE_ENV === 'development';

module.exports = {
    bail: !DEV,
    mode: DEV ? 'development' : 'production',
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    target: 'web',
    devtool: DEV ? 'cheap-eval-source-map' : 'source-map',
    entry: [paths.appIndexJs],
    output: {
        path: paths.appBuild,
        filename: DEV ? 'app.js' : 'app.[hash:8].js',
        publicPath: paths.appBuild,
    },
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
        // Disable require.ensure as it's not a standard language feature.
        { parser: { requireEnsure: false } },
        // Transform ES6 with Babel
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            include: paths.appSrc,
        },
        {
            test: /.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
            {
                loader: "css-loader?url=false",
            },
            {
                loader: "postcss-loader",
                options: {
                    ident: 
                        "postcss", // https://webpack.js.org/guides/migrating/#complex-options
                        plugins: () => [
                            autoprefixer({
                                overrideBrowserslist: [
                                    ">1%",
                                    "last 4 versions",
                                    "Firefox ESR",
                                    "not ie < 9" // React doesn't support IE8 anyway
                                ]
                            })
                        ]
                    }
                },
                "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader?url=false'
                ]
            },
            { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.vue/,
                loader: 'vue-loader'
            }
            ],
        },
        optimization: {
            minimize: !DEV,
            minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    }
                }
            }),
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        warnings: false
                    },
                    output: {
                        comments: false
                    }
                },
                sourceMap: true
            })
            ]
        },
        plugins: [
        !DEV && new CleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({
            filename: DEV ? 'app.css' : 'app.[hash:8].css'
        }),
        new webpack.EnvironmentPlugin({
        NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
        DEBUG: true,
    }),
    DEV &&
    new FriendlyErrorsPlugin({
        clearConsole: false,
    }),
    DEV &&
    new BrowserSyncPlugin({
        notify: false,
        host: 'localhost',
        port: 4000,
        logLevel: 'silent',
        files: ['**/*.php'],
        proxy: 'http://your-domain.dev.com',
    }),
    new VueLoaderPlugin(),
    new WebpackNotifierPlugin({ title: 'Webpack Santins', }),
    new CopyWebpackPlugin([
        {
          from: paths.appIndexImg,
          to: paths.appDestImg,
        },
        {
          from: paths.appIndexFonts,
          to: paths.appDestFonts,
        }
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '90-95'
      }
    }),
    ].filter(Boolean),
};