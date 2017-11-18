var compressor = require('node-minify');

// Using Google Closure Compiler
compressor.minify({
  compressor: 'gcc',
  input: 'dist/flashexternalinterface.js',
  output: 'dist/flashexternalinterface.min.js',
  callback: function (err, min) {}
});