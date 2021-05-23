import toNumber from '../toNumber';

const INFINITY = 1 / 0;
const MAX_INTEGER = 1.7976931348623157e308;

/**
 * Converts `value` to a finite number.
 *
 * @module toFinite
 * @category Number
 *
 * @param value The value to convert.
 * @returns Returns the converted number.
 * @example
 *
 * @example
 *```typescript
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 * ```
 */
function toFinite(value: any): number {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return !isNaN(value) ? value : 0;
}

export default toFinite;
