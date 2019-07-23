import noop from 'lodash/noop';
import trim from 'src/trim-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('trim', function() {
  const allWhitespaceChars =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function() {
    it('trim is a function', function() {
      expect.assertions(1);
      expect(typeof trim).toBe('function');
    });
  });

  describe('trim', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        trim();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trim(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trim(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(4);
      expect(trim(' \t\na \t\n')).toBe('a', 'strips whitespace off the left and right side');
      expect(trim('a')).toBe('a', 'noop when no whitespace');
      expect(trim(`${allWhitespaceChars}a${allWhitespaceChars}`)).toBe('a', 'all expected whitespace chars are trimmed');
      const zeroWidth = '\u200b';
      expect(trim(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(String);
      const actual = values.map(trim);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        trim(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);

      const sym = Symbol('foo');
      expect(function() {
        trim(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        trim(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
