var chai = require('chai');
var expect = chai.expect;
var wildcardPattern = require('../src/wildcardPattern').default

describe('wildcardPattern', function() {

  describe('when called with a String', function() {

    it('returns a pattern string', function() {
      var wildcardString = 'We have all of your *';
      var pattern = wildcardPattern(wildcardString);
      expect(pattern).to.equal('^We have all of your .*$');
    });

    it('returns an accurate regex pattern string for a string with an ending wildcard', function() {
      var wildcardEnd = 'The answer is *';
      var pattern = wildcardPattern(wildcardEnd);
      expect(pattern).to.equal('^The answer is .*$');
    });

    it('returns an accurate regex pattern string for a string with an starting wildcard', function() {
      var wildcardStart = '* error was found';
      var pattern = wildcardPattern(wildcardStart);
      expect(pattern).to.equal('^.* error was found$');
    });

    it('returns an accurate regex pattern string for a string with an middle wildcard', function() {
      var wildcardMiddle = 'The * was not found';
      var pattern = wildcardPattern(wildcardMiddle);
      expect(pattern).to.equal('^The .* was not found$');
    });

    it('returns an accurate regex pattern string for an empty string', function() {
      var wildcardEmptyString = '';
      var pattern = wildcardPattern(wildcardEmptyString);

      expect(pattern).to.equal('^$');
    });

    it('returns an accurate regex pattern string for a string string without wildcards', function() {
      var wildcardString = 'github.com/kevinzwhuang/wildcard-regex';
      var pattern = wildcardPattern(wildcardString);
      expect(pattern).to.equal('^github.com/kevinzwhuang/wildcard-regex$');
    });

  });

  describe('when called with an Array of strings', function() {

    it('returns an accurate regex pattern string', function() {
      var wildcardArray = ['t*', 'b*b', '*em'];
      var pattern = wildcardPattern(wildcardArray);
      expect(pattern).to.equal('^t.*$|^b.*b$|^.*em$');
    });

    it('handles empty string patterns correctly', function() {
      var wildcardEmptyArray = ['', 'test'];
      var pattern = wildcardPattern(wildcardEmptyArray);
      expect(pattern).to.equal('^$|^test$');
    });

    it('returns strict regex patterns without wildcards correctly', function() {
      var wildcardArray = ['github.com', 'wikipedia'];
      var pattern = wildcardPattern(wildcardArray);
      expect(pattern).to.equal('^github.com$|^wikipedia$');
    });

  });

});
