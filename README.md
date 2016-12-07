# wildcard-regex [![npm](https://img.shields.io/npm/v/wildcard-regex.svg)](https://www.npmjs.com/package/wildcard-regex) [![Build Status](https://travis-ci.org/kevinzwhuang/wildcard-regex.svg?branch=master)](https://travis-ci.org/kevinzwhuang/wildcard-regex)

Super simple wildcard tools for generating string patterns and RegExp objects

## Installation

To install `wildcard-regex` to your project, run:

```
npm install --save wildcard-regex
```

## Getting Started

`wildcard-regex` is a simple set of tools that can convert raw wildcard
patterns (strings or array of strings with wildcards denoted as `*`) to
pattern strings or RegExp objects.

Using `wildcard-regex` to create a RegExp object for pattern matching is as
simple as requiring it as a variable in your script and giving it a raw
wildcard pattern.

ES6/ES2015 Syntax
```es6
import { wildcardRegExp } from 'wildcard-regex';
const regex = wildcardRegExp('Begin the sentence*and end it here');
// This generates the following RegExp object:
// /Begin the sentence.*and end it here/
regex.test('Begin the sentence, then add this portion and end it here');
// true
```

Older ES5 Syntax
```js
var wildcard = require('wildcard-regex');
var regex = wildcard.wildcardRegExp('Begin the sentence*and end it here');
// This generates the following RegExp object:
// /Begin the sentence.*and end it here/
regex.test('Begin the sentence, then add this portion and end it here');
// true
```

You can also test for an array of wildcard patterns by passing them into
`wildcard-regex` as an `Array` of `Strings`, as such:

ES6/ES2015 Syntax
```es6
import { wildcardRegExp } from 'wildcard-regex';
const regex = wildcardRegExp(['Test*This'], ['Or*This']);
```

Older ES5 Syntax
```js
var wildcard= require('wildcard-regex');
var regex = wildcard.wildcardRegExp(['Test*This'], ['Or*This']);
```

If you want to **store** your wildcard pattern in a manner that does not
work with RegExp objects, you might want to create a pattern string
to represent the regex pattern instead of a full RegExp object.

This is easy to do by using the `wildcardPattern` method, which returns a
string pattern instead of a RegExp object. Here's an example:

ES6/ES2015 Syntax
```es6
import { wildcardPattern } from 'wildcard-regex';
const pattern = wildcardPattern('*kevinzwhuang/wildcard-regex')
// This creates a string ready for storage and for conversion to a RegExp
// object later.
// '^.*kevinzwhuang/wildcard-regex$'
const regex = new RegExp(pattern);
// Call the RegExp constructor with the pattern to create a new RegExp object.
```

Older ES5 Syntax
```js
var wildcard= require('wildcard-regex');
var pattern = wildcard.wildcardPattern('*kevinzwhuang/wildcard-regex')
// This creates a string ready for storage and for conversion to a RegExp
// object later.
// '^.*kevinzwhuang/wildcard-regex$'
var regex = new RegExp(pattern);
// Call the RegExp constructor with the pattern to create a new RegExp object.
```

## API

`wildcardRegExp(stringOrArray: String || Array) : Function => RegExp`

Takes in a string or array of possible wildcard patterns as an argument.

Returns a `RegExp` object.

`wildcardPattern(stringOrArray: String || Array) : Function => String`

Takes in a string or array of possible wildcard patterns as an argument.

Returns a `String` that represents the regex pattern for easy storage and later
conversion to a RegExp object..

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
