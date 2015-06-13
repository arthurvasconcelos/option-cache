# option-cache [![NPM version](https://badge.fury.io/js/option-cache.svg)](http://badge.fury.io/js/option-cache)  [![Build Status](https://travis-ci.org/jonschlinkert/option-cache.svg)](https://travis-ci.org/jonschlinkert/option-cache)

> Simple API for managing options in JavaScript applications.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i option-cache --save
```

## Docs

<!-- toc -->

* [API](#api)
* [Example app](#example-app)
* [Related](#related)
* [Contributing](#contributing)
* [Running tests](#running-tests)
* [Author](#author)
* [License](#license)

_(Table of contents generated by [verb](https://github.com/assemble/verb))_

<!-- tocstop -->

## API

### [Options](index.js#L31)

Create a new instance of `Options`.

**Params**

* `options` **{Object}**: Initialize with default options.

**Example**

```js
var app = new Options();
```

### [.option](index.js#L67)

Set or get an option.

**Params**

* `key` **{String}**: The option name.
* `value` **{*}**: The value to set.
* `returns` **{*}**: Returns a `value` when only `key` is defined.

**Example**

```js
app.option('a', true);
app.option('a');
//=> true
```

### [.enable](index.js#L104)

Enable `key`.

**Params**

* `key` **{String}**
* `returns` **{Object}** `Options`: to enable chaining

**Example**

```js
app.enable('a');
```

### [.disable](index.js#L120)

Disable `key`.

**Params**

* `key` **{String}**: The option to disable.
* `returns` **{Object}** `Options`: to enable chaining

**Example**

```js
app.disable('a');
```

### [.enabled](index.js#L141)

Check if `key` is enabled (truthy).

**Params**

* `key` **{String}**
* `returns` **{Boolean}**

**Example**

```js
app.enabled('a');
//=> false

app.enable('a');
app.enabled('a');
//=> true
```

### [.disabled](index.js#L162)

Check if `key` is disabled (falsey).

**Params**

* `key` **{String}**
* `returns` **{Boolean}**: Returns true if `key` is disabled.

**Example**

```js
app.disabled('a');
//=> true

app.enable('a');
app.disabled('a');
//=> false
```

### [.isTrue](index.js#L184)

Returns true if the value of `key` is strictly `true`.

**Params**

* `key` **{String}**
* `returns` **{Boolean}**: Uses strict equality for comparison.

**Example**

```js
app.option('a', 'b');
app.isTrue('a');
//=> false

app.option('c', true);
app.isTrue('c');
//=> true
```

### [.isFalse](index.js#L206)

Returns true if the value of `key` is strictly `false`.

**Params**

* `key` **{String}**
* `returns` **{Boolean}**: Uses strict equality for comparison.

**Example**

```js
app.option('a', null);
app.isFalse('a');
//=> false

app.option('c', false);
app.isFalse('c');
//=> true
```

### [.isBoolean](index.js#L229)

Return true if the value of key is either `true` or `false`.

**Params**

* `key` **{String}**
* `returns` **{Boolean}**: True if `true` or `false`.

**Example**

```js
app.option('a', 'b');
app.isBoolean('a');
//=> false

app.option('c', true);
app.isBoolean('c');
//=> true
```

### [.hasOption](index.js#L249)

Return true if `options.hasOwnProperty(key)`

**Params**

* `key` **{String}**
* `returns` **{Boolean}**: True if `key` is is on options.

**Example**

```js
app.hasOption('a');
//=> false
app.option('a', 'b');
app.hasOption('a');
//=> true
```

### [.flags](index.js#L281)

Generate an array of command line args from the given `keys` or all options.

**Params**

* `keys` **{Array}**
* `returns` **{Array}**: Array of args

**Example**

```js
// set some options
app.option('foo', 'bar');
app.option('abc', true);
app.option('xyz', 10);
app.option('one', false);

// create command line args for all options
app.flags();
//=> ['--foo=bar', '--abc', '--xyz=10', '--no-one']

// or specific options
app.flags(['foo', 'abc']);
//=> ['--foo=bar', '--abc']
```

<br>

***

<br>

## Example app

Use options-cache in your javascript application:

```js
var util = require('util');
var Options = require('options-cache');

function App(options) {
  Options.call(this, options);
  this.init();
}

util.inherits(App, Options);

App.prototype.init = function() {
  this.option('cwd', process.cwd());
  this.option('foo', 'bar');
};

App.prototype.a = function(value) {
  this.enable(value);
};

App.prototype.b = function(value) {
  if (this.enabled(value)) {
    // do something
  } else {
    // do something else
  }
};
```

<br>

***

<br>

## Related

* [cache-base](https://github.com/jonschlinkert/cache-base): Generic object cache for node.js/javascript projects.
* [config-cache](https://github.com/jonschlinkert/config-cache): General purpose JavaScript object storage methods.
* [engine-cache](https://github.com/jonschlinkert/engine-cache): express.js inspired template-engine manager.
* [helper-cache](https://github.com/jonschlinkert/helper-cache): Easily register and get helper functions to be passed to any template engine or node.js… [more](https://github.com/jonschlinkert/helper-cache)
* [loader-cache](https://github.com/jonschlinkert/loader-cache): Register loader functions that dynamically read, parse or otherwise transform file contents when the name… [more](https://github.com/jonschlinkert/loader-cache)
* [map-cache](https://github.com/jonschlinkert/map-cache): Basic cache object for storing key-value pairs.
* [parser-cache](https://github.com/jonschlinkert/parser-cache): Cache and load parsers, similiar to consolidate.js engines.

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/option-cache/issues/new)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 13, 2015._

<!-- deps:mocha -->
