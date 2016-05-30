const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./lib/parts.js');
const autoprefixer = require('autoprefixer');

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/index.js'),
  public: path.join(__dirname, 'public'),
  nodeModules: path.join(__dirname, 'node_modules')
};

const common = {
  context: PATHS.src,
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.public,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url',
        query: {
          prefix: 'font/',
          limit: 5000,
          mimetype: 'application/font-woff'
        },
        include: PATHS.nodeModules
      },
      {
        test: /\.ttf$|\.eot|\.svg$/,
        loader: 'file',
        query: {
          prefix: 'font/'
        },
        include: PATHS.nodeModules
      }
    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  plugins: [

  ]
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      parts.setupCSS([PATHS.src, PATHS.nodeModules]),
      {
        devtool: 'source-map'
      }
    );
    break;
  default:
    config = merge(
      common,
      parts.setupCSS([PATHS.src, PATHS.nodeModules]),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
        contentBase: PATHS.public
      }),
      {
        devtool: 'eval-source-map'
      }
    );
}

module.exports = validate(config);