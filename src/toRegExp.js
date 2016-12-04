import toPatternString from './toPatternString';

function toRegExp(stringOrArray) {
  var pattern = toPatternString(stringOrArray);
  var regExp = new RegExp(pattern);
  return regExp;
};

export default toRegExp;
