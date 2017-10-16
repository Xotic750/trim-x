'use strict';

var lib;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var trim = lib.trim;
var trim2016 = lib.trim2016;
var trim2018 = lib.trim2018;

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

describe('trim', function () {
  var allWhitespaceChars2016 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  var allWhitespaceChars2018 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function () {
    it('trim is a function', function () {
      expect(typeof trim).toBe('function');
    });

    it('trim is a function', function () {
      expect(typeof trim2016).toBe('function');
    });

    it('trim is a function', function () {
      expect(typeof trim2018).toBe('function');
    });

    it('trim should be trim2018', function () {
      expect(trim).toBe(trim2018);
    });

    it('trim should not be trim2016', function () {
      expect(trim).not.toBe(trim2016);
    });
  });

  describe('trim2016', function () {
    it('should throw when target is null or undefined', function () {
      expect(function () {
        trim2016();
      }).toThrow();

      expect(function () {
        trim2016(void 0);
      }).toThrow();

      expect(function () {
        trim2016(null);
      }).toThrow();
    });

    it('Basic tests', function () {
      expect(trim2016(' \t\na \t\n')).toBe('a', 'strips whitespace off the left and right side');
      expect(trim2016('a')).toBe('a', 'noop when no whitespace');
      expect(trim2016(allWhitespaceChars2016 + 'a' + allWhitespaceChars2016)).toBe('a', 'all expected whitespace chars are trimmed');
      var zeroWidth = '\u200b';
      expect(trim(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function () {
      var values = [
        true,
        'abc',
        1,
        function () {},
        [],
        /r/
      ];

      var expected = values.map(String);
      var actual = values.map(trim2016);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        trim2016(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        trim2016(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        trim2016(Object(symObj));
      }).toThrow();
    });
  });

  describe('trim2018', function () {
    it('should throw when target is null or undefined', function () {
      expect(function () {
        trim2018();
      }).toThrow();

      expect(function () {
        trim2018(void 0);
      }).toThrow();

      expect(function () {
        trim2018(null);
      }).toThrow();
    });

    it('Basic tests', function () {
      expect(trim2018(' \t\na \t\n')).toBe('a', 'strips whitespace off the left and right side');
      expect(trim2018('a')).toBe('a', 'noop when no whitespace');
      expect(trim2018(allWhitespaceChars2018 + 'a' + allWhitespaceChars2018)).toBe('a', 'all expected whitespace chars are trimmed');
      var zeroWidth = '\u200b';
      expect(trim(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function () {
      var values = [
        true,
        'abc',
        1,
        function () {},
        [],
        /r/
      ];

      var expected = values.map(String);
      var actual = values.map(trim2018);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        trim2018(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        trim2018(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        trim2018(Object(symObj));
      }).toThrow();
    });
  });
});
