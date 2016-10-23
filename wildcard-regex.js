"use strict";

function transformWildcardToPattern(wildcardString) {
  var length = wildcardString.length;
  var character;
  var pattern = '';
  for (var index = 0; index < length; index++) {
    character = wildcardString.charAt(index);
    if (character === '*') {
      pattern = pattern + '.*'
    } else {
      pattern = pattern + character;
    }
  }
  return pattern;
};

function transformArrayToPattern(arrayOfWildcardStrings) {
  var length = arrayOfWildcardStrings.length;
  var wildcardString;
  var nextSubPattern;
  var pattern = '';
  for (var index = 0; index < length; index++) {
    wildcardString = arrayOfWildcardStrings[index];
    nextSubPattern = transformWildcardToPattern(wildcardString);
    if (index === 0) {
      pattern = pattern + nextSubPattern;
    } else {
      pattern = pattern + '|' + nextSubPattern;
    }
  }
  return pattern;
};

function wildcardRegex(stringOrArray) {
  var pattern;
  if (stringOrArray.constructor === String) {
    pattern = transformWildcardToPattern(string)
  } else if (stringOrArray.constructor === Array) {
    pattern = transformArrayToPattern(stringOrArray)
  }
  var regex = new RegExp(pattern);
  return regex;
};

module.exports = wildcardRegex;
