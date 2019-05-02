const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entryConponents = require('./components.json');

module.exports = {
  mode: process.env.DEV ? 'development' : 'production',
  entry: entryConponents,
  // devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: '[name].js',
    // publicPath: '/lib/',
    library: 'continens-UI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['wildcard', [
              '@babel/plugin-transform-runtime', {
                'regenerator': true
              }
            ]],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  externals: [
    {
      react: { 
        root: 'React', 
        commonjs2: './react', 
        commonjs: ['./react'], 
        amd: 'react', 
      }, 
      'react-dom': { 
        root: 'ReactDOM', 
        commonjs2: './react-dom', 
        commonjs: ['./react-dom'], 
        amd: 'react-dom', 
      }
    },
    /@material-ui\/core\/.*/
  ], 
};