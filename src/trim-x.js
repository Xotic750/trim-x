import trimLeft, {trimLeft2016} from 'trim-left-x';
import trimRight, {trimRight2016} from 'trim-right-x';

/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */
export function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}

/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */
const trim2018 = function trim2018(string) {
  return trimLeft(trimRight(string));
};

export default trim2018;
