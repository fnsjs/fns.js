import toFinite from '../toFinite';

/**
 * Converts `value` to an integer.
 *
 * @module toInteger
 * @category Number
 *
 * @param value - The value to convert.
 * @returns Returns the converted integer.
 *
 * @example
 *```typescript
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 * ```
 */
function toInteger(value: any): number {
  const result = toFinite(value);
  const remainder = result % 1;

  return remainder ? result - remainder : result;
}

export default toInteger;
