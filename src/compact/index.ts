import filter from '../filter';

/**
 * Creates an array with all falsy values removed.
 *
 * @module compact
 * @category Array
 *
 * @param array The array to compact.
 * @returns Returns the new array of filtered values.
 *
 * @example
 *```typescript
 * compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 *```
 */

export default function compact<T>(array: T[]) {
  return filter(array, (value: T) => Boolean(value));
}
