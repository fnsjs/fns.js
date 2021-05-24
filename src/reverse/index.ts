import isArray from '../isArray';

/**
 * Checks if `value` is `Error`.
 *
 * @module reverse
 * @category Array
 *
 * @param array The array to get last element.
 * @returns {boolean} Returns `true` if `value` is `Error`, else `false`.
 *
 * @example
 *```typescript
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 * ```
 */
export default function reverse<T>(array: T[]): T[] {
  if (!isArray(array)) {
    return array;
  }
  return array.reverse();
}
