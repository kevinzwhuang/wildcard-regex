"use strict";

function transformWildcardToPattern(wildcard) {
  var length = wildcard.length;
  var character;
  var pattern = '';
  for (var index = 0; index < length; index++) {
    character = wildcard.charAt(index);
    if (character === '*') {
      pattern = pattern + '.*'
    } else {
      pattern = pattern + character;
    }
  }
  return pattern;
};

function wildcardRegex(string) {
  var pattern = transformWildcardToPattern(string)
  var regex = new RegExp(pattern);
  return regex;
};

module.exports = wildcardRegex;
