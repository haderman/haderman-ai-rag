//@ts-check

'use strict';

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

require('dotenv').config();

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

/** @type WebpackConfig */
const config = {
  target: 'node',
  mode: 'none',
  externals: [nodeExternals()],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    watchFiles: ['src/**/*.ts', 'public/**/*'],
    client: {
      logging: 'info',
    },
    compress: true,
    port: 9000,
  },
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  devtool: 'nosources-source-map',
  infrastructureLogging: {
    level: "log", // enables logging required for problem matchers
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        SERVER_LOG_TOKEN: JSON.stringify(process.env.SERVER_LOG_TOKEN),
        SERVER_LOG_ENDPOINT: JSON.stringify(process.env.SERVER_LOG_ENDPOINT),
      },
    }),
  ],
};

module.exports = [config];
