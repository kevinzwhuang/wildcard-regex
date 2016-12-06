var chai = require('chai');
var expect = chai.expect;
var toRegExp = require('../dist/wildcard-regex.js').toRegExp;

describe('toRegExp', function() {

  describe('when called with a String', function() {

    it('returns a RegExp object', function() {
      var wildcardString = 'We have all of your *';
      var regex = toRegExp(wildcardString);
      expect(regex.constructor).to.equal(RegExp);
    });

    it('correctly tests for patterns with a ending wildcard', function() {
      var wildcardEnd = 'The answer is *';
      var regexEnd = toRegExp(wildcardEnd);
      var correctTestString = 'The answer is here!';
      var incorrectTestString = 'Wrong!';

      expect(regexEnd.test(correctTestString)).to.equal(true);
      expect(regexEnd.test(incorrectTestString)).to.equal(false);
    });

    it('correctly tests for patterns with a starting wildcard', function() {
      var wildcardStart = '* error was found';
      var regexStart = toRegExp(wildcardStart);
      var correctTestString = '404 error was found';
      var incorrectTestString = 'Wrong!';

      expect(regexStart.test(correctTestString)).to.equal(true);
      expect(regexStart.test(incorrectTestString)).to.equal(false);
    });

    it('correctly tests for patterns with a middle wildcard', function() {
      var wildcardMiddle = 'The * was not found';
      var regexMiddle = toRegExp(wildcardMiddle);
      var correctTestString = 'The resource was not found';
      var incorrectTestString = 'Wrong!';

      expect(regexMiddle.test(correctTestString)).to.equal(true);
      expect(regexMiddle.test(incorrectTestString)).to.equal(false);
    });

    it('correctly tests for an empty string pattern', function() {
      var wildcardEmptyString = '';
      var regexEmptyString = toRegExp(wildcardEmptyString);
      var correctTestString = '';
      var incorrectTestString = 'Wrong!';

      expect(regexEmptyString.test(correctTestString)).to.equal(true);
      expect(regexEmptyString.test(incorrectTestString)).to.equal(false);
    });

    it('tests strictly & does not test for wildcards if no asterisks exist', function() {
      var wildcardString = 'github.com/kevinzwhuang/wildcard-regex';
      var regex = toRegExp(wildcardString);
      var correctTestString = 'github.com/kevinzwhuang/wildcard-regex';
      var incorrectTestString = 'https://github.com/kevinzwhuang/wildcard-regex';
      var incorrectTestString2 = 'https://github.com/kevinzwhuang/wildcard-regex/blob/master/wildcard-regex.js';

      expect(regex.test(correctTestString)).to.equal(true);
      expect(regex.test(incorrectTestString)).to.equal(false);
      expect(regex.test(incorrectTestString2)).to.equal(false);
    });

  });

  describe('when called with an Array of strings', function() {

    it('returns a RegExp object', function() {
      var wildcardArray = ['t*', 'b*b', '*em'];
      var regex = toRegExp(wildcardArray);
      expect(regex.constructor).to.equal(RegExp);
    });

    it('correctly tests for multiple patterns from an array of wildcard strings', function() {
      var wildcardArray = ['t*', 'b*b', '*em'];
      var regex = toRegExp(wildcardArray);
      expect(regex.test('test')).to.equal(true);
      expect(regex.test('bob')).to.equal(true);
      expect(regex.test('team')).to.equal(true);
      expect(regex.test('wrong')).to.equal(false);
    });

    it('correctly tests for an empty string pattern', function() {
      var wildcardEmptyArray = ['', 'test'];
      var regexEmptyArray = toRegExp(wildcardEmptyArray);

      expect(regexEmptyArray.test('')).to.equal(true);
      expect(regexEmptyArray.test('test')).to.equal(true);
      expect(regexEmptyArray.test('this will not pass')).to.equal(false);
    });

    it('tests strictly & does not test for wildcards if no asterisks exist', function() {
      var wildcardArray = ['github.com', 'wikipedia'];
      var regex = toRegExp(wildcardArray);

      expect(regex.test('github.com')).to.equal(true);
      expect(regex.test('wikipedia')).to.equal(true);
      expect(regex.test('www.github.com')).to.equal(false);
      expect(regex.test('www.wikipedia.com')).to.equal(false);
    });

  });

});
