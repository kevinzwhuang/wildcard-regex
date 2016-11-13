# wildcard-regex [![npm](https://img.shields.io/npm/v/wildcard-regex.svg)](https://www.npmjs.com/package/wildcard-regex) [![Build Status](https://travis-ci.org/kevinzwhuang/wildcard-regex.svg?branch=master)](https://travis-ci.org/kevinzwhuang/wildcard-regex)

Super simple wildcard matching implementation for strings using Regex

## Installation

To install `wildcard-regex` to your project, run:

```
npm install --save wildcard-regex
```

## Getting Started

`wildcard-regex` is a simple tool to convert wildcard patterns into a JavaScript
regular expression(a `RegExp` object).

Using `wildcard-regex` is as simple as requiring it as a variable and giving it
a wildcard `String`. For example:

```js
var wildcardRegex = require('wildcard-regex');
var regex = wildcardRegex('Begin the sentence*and end it here');
// This generates the following RegExp object:
// /Begin the sentence.*and end it here/
regex.test('Begin the sentence, then add this portion and end it here');
// true
```

You can also test for an array of wildcard patterns by passing them into
`wildcard-regex` as an `Array` of `Strings`, as such:

```js
var wildcardRegex = require('wildcard-regex');
var regex = wildcardRegex(['Test*This'], ['Or*This']);
```

## API

`wildcardRegex(stringOrArray: String || Array) : Function => RegExp`

Takes in a string or array of possible wildcard patterns as an argument.

Returns a `RegExp` object.

## Development

`wildcard-regex` is written to be portable for most Node and browser
environments(even IE) without any need for transpilers. To develop your
`wildcard-regex`, start by cloning this repo by running:

```
git clone https://github.com/kevinzwhuang/wildcard-regex.git
```

Then make sure to run `npm install` to install the `devDependencies` necessary
for testing. To test `wildcard-regex`, run `npm test`.

## Tests

`wildcard-regex` uses Mocha to test with Node for backend environments and
Karma with Mocha to test for browser environments. You can run tests for both
backend and frontend environments by running `npm test`.

To run tests for specific environments, you can run `npm run test:node` or `npm
run test:browser`.

You can find tests within the `./tests/` folder.
