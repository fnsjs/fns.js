import getObjectType from '../.utils/getObjectType';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @module isSymbol
 * @category Number
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is a symbol, else `false`.
 * @example
 *```typescript
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 *```
 */
function isSymbol(value: any): boolean {
  const type = typeof value;
  return (
    type === 'symbol' ||
    (type === 'object' &&
      value != null &&
      getObjectType(value) === '[object Symbol]')
  );
}

export default isSymbol;
