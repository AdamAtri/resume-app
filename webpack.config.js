const webpack = require('webpack');
const merge = require('webpack-merge');
const { join } = require('path');

const node_env = process.env.NODE_ENV;
const businessConsts = require('./business/constants.js');

const
  HTMLWebpackPlugin = require('html-webpack-plugin'),
  HTMLWebpackMountpointPlugin = require('html-webpack-mountpoint-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: node_env !== 'production'
});

const BASE = {
  module: {
    rules: [
      { // lint javascript
        test: /\.js$/,
        enforce: 'pre',
        use: [ 'eslint-loader' ],
        exclude: [ 'node_modules' ]
      },
      { // load files
        test: /\.(png|svg|jpg|gif|woff2|woff|ttf|eot)$/,
        exclude: /node_modules/,
        use: [{
          loader:"file-loader",
          options: {
            includePaths: [join(__dirname, 'src', 'assets')]
          }
        }]
      },
      { // load style
        test: /\.scss$/,
        include: [join(__dirname, 'src'), join(__dirname, 'node_modules')],
        use: extractSass.extract({
          use: [
            {loader:'css-loader'},
            {
              loader:'sass-loader',
              options:{
                includePaths:['node_modules']
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}),
    new webpack.ProvidePlugin({_: 'underscore'}),
    new webpack.ProvidePlugin({Bb: 'backbone'}),
    new webpack.ProvidePlugin({Mn: 'backbone.marionette'}),
    extractSass,
    new webpack.DefinePlugin(
      Object.assign(businessConsts, {IS_PROD: node_env === 'production'})
    ),
  ],
  resolve: {
    modules: [ 'node_modules', join(__dirname, 'src') ],
    extensions: ['.js', '.json', '.scss', '.css']
  }
};
const TEST = {
  entry: {
    tester: join(__dirname, 'test', 'test-driver.js')
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'tests.bundle.js',
    path: join(__dirname, 'test')
  },
  devServer: {
    contentBase: [join(__dirname, 'test'), join(__dirname, 'node_modules')],
  },
};

const COMMON = {
  entry: {
    app: join(__dirname, 'src', 'driver.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'public')
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'MoveOn.org Application',
      filename: 'index.html',
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"}
      ]
    }),
    new HTMLWebpackMountpointPlugin({
      tagName: 'section',
      mountPoints: ['app-mount', 'activity-mount']
    })
  ],
};

const DEV = {
  devServer: {
    contentBase: join(__dirname, 'public'),
    compress: true,
    host: '192.168.1.68',
    port: 9995,
    headers: {
      'X-Powered-By': 'caffeine and sarcasm'
    },
    https: true
  },
  devtool: "inline-source-map"
};


const VIEW = function({filename, viewargs}) {
  /**
    --env variables:
    - .filename - path of the view relative to the `src` dir.
    - .viewargs - a stringified array or object that will be JSON parsed and passed to the
              view's constructor
  */
  return {
    entry: {view: join(__dirname, 'src', 'view-driver.js')},
    output: {
      filename: '[name].bundle.js',
      path: join(__dirname, 'public')
    },
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.DefinePlugin({
        TESTVIEW: JSON.stringify(filename),
        VIEWARGS: viewargs ? JSON.parse(JSON.stringify(viewargs)) : null,
      }),
      new HTMLWebpackPlugin({
        title: 'ViewTEST',
        filename: 'index.html',
        meta: [
          {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ]
      }),
      new HTMLWebpackMountpointPlugin({
        mountPoints: [
          {
            id: 'app-mount',
            tagName: 'section'
          },
        ],
      })
    ]
  };
};

module.exports = env => {
  let BUILD = merge({mode: node_env}, BASE);
  if (env && env.type === 'view') {
    return merge(BUILD, VIEW(env))
  }
  if (env && env.type === 'testing') {
    let x = merge(BUILD, DEV);
    return merge([x, TEST]);
  }
  return merge(BUILD, COMMON, DEV);
};
