<a
  href="https://travis-ci.org/Xotic750/trim-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/trim-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/trim-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/trim-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/trim-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/trim-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/trim-x"
  title="npm version">
<img src="https://badge.fury.io/js/trim-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/trim-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/trim-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/trim-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/trim-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_trim-x"></a>

## trim-x

This method removes whitespace from the start and end of a string.

<a name="exp_module_math-trim-x.exports"></a>

### `module.exports(string)` ⇒ <code>number</code> ⏏

<a name="module_trim-x"></a>

### `trim-x` ⇒ <code>string</code>

This method removes whitespace from the start and end of a string. (ES2019)

**Kind**: static property of [<code>trim-x</code>](#module_trim-x)  
**Returns**: <code>string</code> - The trimmed string.  
**Throws**:

- <code>TypeError</code> If string is null or undefined or not coercible.

| Param  | Type                | Description                             |
| ------ | ------------------- | --------------------------------------- |
| string | <code>string</code> | The string to trim the whitespace from. |

**Example**

```js
import trim from 'trim-x';

console.log(trim(' \t\na \t\n') === 'a'); // true
```
