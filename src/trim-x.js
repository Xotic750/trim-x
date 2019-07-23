import trimStart from 'trim-left-x';
import trimEnd from 'trim-right-x';

/**
 * This method removes whitespace from the start and end of a string.
 * (ES2019).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */
const trim = function trim(string) {
  return trimStart(trimEnd(string));
};

export default trim;
