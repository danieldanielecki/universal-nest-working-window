/* Custom webpack server properties. */

const path = require('path');
const webpack = require('webpack');
const WebpackConfigFactory = require('@nestjs/ng-universal')
  .WebpackConfigFactory;

// Nest server's bundle for SSR.
const webpackConfig = WebpackConfigFactory.create(webpack, {
  server: './server/main.ts',
});

// Set up output folder.
webpackConfig.output = {
  filename: 'index.js', // Important in terms of Firebase Cloud Functions, because this is the default starting file to execute Cloud Functions.
  libraryTarget: 'umd', // Important in terms of Firebase Cloud Functions, because otherwise function can't be triggered in functions directory.
  path: path.join(__dirname, 'dist'), // Output path.
};

// Define plugins.
webpackConfig.plugins = [
  // Fix WARNING "Critical dependency: the request of a dependency is an expression".
  new webpack.ContextReplacementPlugin(
    /(.+)?angular(\\|\/)core(.+)?/,
    path.join(__dirname, 'src'), // Location of source files.
    {} // Map of routes.
  ),
  // Fix WARNING "Critical dependency: the request of a dependency is an expression".
  new webpack.ContextReplacementPlugin(
    /(.+)?express(\\|\/)(.+)?/,
    path.join(__dirname, 'src'), // Location of source files.
    {}
  ),
];

webpackConfig.target = 'node'; // It makes sure not to bundle built-in modules like "fs", "path", etc.

module.exports = webpackConfig; // Export all custom Webpack configs.
