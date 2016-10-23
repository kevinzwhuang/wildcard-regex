# wildcard-regex
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
