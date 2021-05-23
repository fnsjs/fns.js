import isArray from '../isArray';

/**
 * Creates a slice of array with n elements taken from the end.
 *
 * @module takeRight
 * @category Array
 *
 * @param array The array to get slice.
 * @param [n=1] The number of elements to take.
 * @returns Returns the slice of `array`.
 * @throws {TypeError} should be Array-like value.
 *
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 */
export default function takeRight<T>(array: T[], n = 1): T[] {
  if (!isArray(array)) {
    throw new TypeError(`${Array} should be Array-like value!`);
  }
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  return array.slice(-1 * n);
}
