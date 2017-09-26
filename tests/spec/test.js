'use strict';

var trim;
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
  trim = require('../../index.js');
} else {
  trim = returnExports;
}

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

describe('trim', function () {
  it('is a function', function () {
    expect(typeof trim).toBe('function');
  });

  it('should throw when target is null or undefined', function () {
    expect(function () {
      trim();
    }).toThrow();

    expect(function () {
      trim(void 0);
    }).toThrow();

    expect(function () {
      trim(null);
    }).toThrow();
  });

  it('Basic tests', function () {
    expect(trim(' \t\na \t\n')).toBe('a', 'strips whitespace off both sides');
    expect(trim('a')).toBe('a', 'noop when no whitespace');
    var allWhitespaceChars = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
    expect(trim(allWhitespaceChars + 'a' + allWhitespaceChars)).toBe('a', 'all expected whitespace chars are trimmed');
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
    var actual = values.map(trim);
    expect(actual).toEqual(expected);
  });

  it('should throw for Object.create(null)', function () {
    expect(function () {
      trim(Object.create(null));
    }).toThrow();
  });

  ifSymbolIt('should throw for Symbol', function () {
    var sym = Symbol('foo');
    expect(function () {
      trim(sym);
    }).toThrow();

    var symObj = Object(sym);
    expect(function () {
      trim(Object(symObj));
    }).toThrow();
  });
});
