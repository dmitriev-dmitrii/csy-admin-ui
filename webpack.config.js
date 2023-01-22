const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
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
      port: 4000
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

    ],

    optimization: {
      concatenateModules: isProdMode,
      mangleExports: isProdMode,
      minimize: isProdMode,
    }

  };

};

