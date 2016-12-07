import wildcardPattern from './wildcardPattern';

function wildcardRegExp(stringOrArray) {
  var pattern = wildcardPattern(stringOrArray);
  var regExp = new RegExp(pattern);
  return regExp;
};

export default wildcardRegExp;
