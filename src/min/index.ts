import reduce from '../reduce';

/**
 * Computes the minimum value of array. If array is empty or falsy, undefined is returned.
 *
 * @module min
 * @category Array
 *
 * @param array The array to iterate over.
 * @returns Returns the minimum value.
 *
 * @example
 *```typescript
 * min([2, 12, 9, 4]);
 * // => 2
 *
 * min([]);
 * // => undefined
 * ```
 */

export default function min<T>(array: T[]): T {
  return reduce<T>(array, function(acc, value) {
    if (acc > value) {
      return value;
    }
    return acc;
  });
}
