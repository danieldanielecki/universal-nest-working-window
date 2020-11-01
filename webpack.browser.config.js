/* Custom webpack server properties. */

const webpackConfig = {
  node: { global: true, fs: 'empty' }, // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
  output: {
    libraryTarget: 'umd', // Fix: "Uncaught ReferenceError: exports is not defined".
  },
};

module.exports = webpackConfig; // Export all custom Webpack configs.
