'use strict';

/**
 * Lazily required module dependencies
 */

// var utils = require('lazy-cache')(require);
// var fn = require;

// require = utils;
// require('arr-flatten', 'flatten');
// require('collection-visit', 'visit');
// require('get-value', 'get');
// require('has-value', 'has');
// require('kind-of', 'typeOf');
// require('set-value', 'set');
// require('to-object-path', 'toPath');
// require = fn;

var utils = {
  flatten: require('arr-flatten'),
  visit: require('collection-visit'),
  get: require('get-value'),
  has: require('has-value'),
  typeOf: require('kind-of'),
  set: require('set-value'),
  toPath: require('to-object-path')
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
