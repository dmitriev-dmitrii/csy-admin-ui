const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

  const isDevMode = env.mode === 'development'
  const isProdMode = env.mode === 'production'

  return {
    entry: './index.js',
    mode: isProdMode ? 'production' : 'development',
    devtool: "source-map",
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 4000,
      host: '0.0.0.0'
    },
    output: {
      filename: isProdMode ? '[contenthash:9].js' : '[name].js',
      publicPath: '/',
      clean: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
      extensions: ["*",".scss", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              // options: { additionalData: `@import "./src/scss/common/vars.scss";` }
            }
          ],
        },
        {
          test: /\.vue\.(s?[ac]ss)$/,
          use: ["vue-style-loader", "css-loader","postcss-loader", "sass-loader"],
        },
        {
          test: /\.woff2?$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: isProdMode ? "[contenthash:9].css" : "index.css",
      }),

      new HtmlWebpackPlugin({
        template: './index.html',
        minify: isProdMode,
        hash: isProdMode,
        inject: 'body',
      }),
      new DefinePlugin({
        __VUE_OPTIONS_API__: isDevMode,
        __VUE_PROD_DEVTOOLS__: isDevMode
      }),

    ],

    optimization: {
      concatenateModules: isProdMode,
      mangleExports: isProdMode,
      minimize: isProdMode,
    }

  };

};

