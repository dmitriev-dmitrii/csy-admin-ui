const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

  const isDevMode = env.mode === 'development'
  const isProdMode = env.mode === 'production'

  return {
    entry: './index.js',
    mode: isProdMode ? 'production' : 'development',

    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000
    },
    output: {
      filename: isProdMode ? '[contenthash:9].js' : 'index.js',
      clean: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/')
      },
      extensions: ["*",".scss", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
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
          test: /\.woff2?$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProdMode ? "[contenthash:9].css" : "index.css",
      }),

      new HtmlWebpackPlugin({
        template:path.resolve(__dirname, './index.html'),
        minify: isProdMode,
        hash: isProdMode,
        inject: 'body',
      }),


    ],
    optimization: {
      concatenateModules: isProdMode,
      mangleExports: isProdMode,
      minimize: isProdMode,
    }
  };

};

