var webpack = require("webpack");
var path = require("path");
var DIST_DIR = path.resolve(_dirname, "dist");
var SRC_DIR = path.resolve(_dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    modules: {
        plugins: [
            // ...plugins...
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: 'jquery',
                "window.jQuery": 'jquery',
                tether: 'tether',
                Tether: 'tether',
                'window.Tether': 'tether',
            }),
        ],
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                loaders: [
                    {
                        test: /\.(png|jpg)$/,
                        loader: 'url?limit=25000'
                    }
                ],
                query: {
                    presets: ["react", "es2015", "stage-2"]
                },

                rules: [
                    {
                        test: /\.(scss)$/,
                        use: [{
                            loader: 'style-loader', // inject CSS to page
                        }, {
                            loader: 'css-loader', // translates CSS into CommonJS modules
                        }, {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins: function () { // post css plugins, can be exported to postcss.config.js
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }, {
                            loader: 'sass-loader' // compiles Sass to CSS
                        }]
                    },

                ]

            },

            { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },

        ],
    },

    resolve: {
        extensions: ['', '.js', '.json', '.coffee',]
    }
};

module.exports = config;
