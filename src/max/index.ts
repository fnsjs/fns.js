import reduce from '../reduce';

/**
 * Computes the maximum value of array. If array is empty or falsy, undefined is returned.
 *
 * @name max
 * @category Array
 * @summary Returns the maximum value.
 *
 * @param array The array to iterate over.
 * @returns Returns the maximum value.
 *
 * @example
 *```typescript
 * max([2, 12, 9, 4]);
 * // => 12
 *
 * max([]);
 * // => undefined
 *```typescript
 */

export default function max<T>(array: T[]): T {
  return reduce<T>(array, function(acc, value) {
    if (acc < value) {
      return value;
    }
    return acc;
  });
}
