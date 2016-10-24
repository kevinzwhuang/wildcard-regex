var chai = require('chai');
var expect = chai.expect;
var wildcardRegex = require('../wildcard-regex.js')

describe('wildcardRegex', function() {

  describe('when called with a String', function() {

    it('returns a RegExp object', function() {
      var wildcardString = 'We have all of your *';
      var regex = wildcardRegex(wildcardString);
      expect(regex.constructor).to.equal(RegExp);
    });

    it('correctly tests for patterns with a ending wildcard', function() {
      var wildcardEnd = 'The answer is *';
      var regexEnd = wildcardRegex(wildcardEnd);
      var correctTestString = 'The answer is here!';
      var incorrectTestString = 'Wrong!';

      expect(regexEnd.test(correctTestString)).to.equal(true);
      expect(regexEnd.test(incorrectTestString)).to.equal(false);
    });

    it('correctly tests for patterns with a starting wildcard', function() {
      var wildcardStart = '* error was found';
      var regexStart = wildcardRegex(wildcardStart);
      var correctTestString = '404 error was found';
      var incorrectTestString = 'Wrong!';

      expect(regexStart.test(correctTestString)).to.equal(true);
      expect(regexStart.test(incorrectTestString)).to.equal(false);
    });

    it('correctly tests for patterns with a middle wildcard', function() {
      var wildcardMiddle = 'The * was not found';
      var regexMiddle = wildcardRegex(wildcardMiddle);
      var correctTestString = 'The resource was not found';
      var incorrectTestString = 'Wrong!';

      expect(regexMiddle.test(correctTestString)).to.equal(true);
      expect(regexMiddle.test(incorrectTestString)).to.equal(false);
    });

  });

  describe('when called with an Array of strings', function() {

    it('returns a RegExp object', function() {
      var wildcardArray = ['t*', 'b*b', '*em'];
      var regex = wildcardRegex(wildcardArray);
      expect(regex.constructor).to.equal(RegExp);
    });

    it('correctly tests for multiple patterns from an array of wildcard strings', function() {
      var wildcardArray = ['t*', 'b*b', '*em'];
      var regex = wildcardRegex(wildcardArray);
      expect(regex.test('test')).to.equal(true);
      expect(regex.test('bob')).to.equal(true);
      expect(regex.test('team')).to.equal(true);
      expect(regex.test('wrong')).to.equal(false);
    });

  });

});
