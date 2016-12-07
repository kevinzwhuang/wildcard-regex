function stringToPattern(inputString) {
  var length = inputString.length;
  var character;
  var pattern = '^';
  for (var index = 0; index < length; index++) {
    character = inputString.charAt(index);
    if (character === '*') {
      pattern = pattern + '.*'
    } else {
      pattern = pattern + character;
    }
  }
  pattern = pattern + '$';
  return pattern;
};

function arrayToPattern(inputArray) {
  var length = inputArray.length;
  var wildcardString;
  var nextSubPattern;
  var pattern = '';
  for (var index = 0; index < length; index++) {
    wildcardString = inputArray[index];
    nextSubPattern = stringToPattern(wildcardString);
    if (index === 0) {
      pattern = pattern + nextSubPattern;
    } else {
      pattern = pattern + '|' + nextSubPattern;
    }
  }
  return pattern;
};

function wildcardPattern(stringOrArray) {
  var pattern;
  if (stringOrArray.constructor === String) {
    pattern = stringToPattern(stringOrArray);
  } else if (stringOrArray.constructor === Array) {
    pattern = arrayToPattern(stringOrArray);
  } else {
    throw TypeError('WildcardRegex only accepts a string or array as an argument');
  }
  return pattern;
  var regex = new RegExp(pattern);
  return regex;
};

export default wildcardPattern;
