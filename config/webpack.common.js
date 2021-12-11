const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

require('dotenv').config();

const paths = require('./paths');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.sass', '.css'],
    alias: {
      '@static': path.resolve(__dirname, '../src/static'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@helpers': path.resolve(__dirname, '../src/helpers'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@locales': path.resolve(__dirname, '../src/locales'),
      //redux
      '@constants': path.resolve(__dirname, '../src/redux/constants'),
      '@middleware': path.resolve(__dirname, '../src/redux/middleware'),
      '@reducers': path.resolve(__dirname, '../src/redux/reducers'),
      '@actions': path.resolve(__dirname, '../src/redux/actions'),
    },
  },
  // Customize the webpack build process
  plugins: [
    new DashboardPlugin(),
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.public + '/favicon.svg',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    }),

    // ESLint configuration
    // new ESLintPlugin({
    //   files: ['.', 'src', 'config'],
    //   formatter: 'table',
    // }),

    // Prettier configuration
    new PrettierPlugin(),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // lingui
      {
        test: /\.json$/,
        exclude: /(data)/,
        loader: '@lingui/loader',
        type: 'javascript/auto',
      },
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
};
