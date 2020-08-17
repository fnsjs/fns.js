import isArray from '../isArray'

/**
 * @name takeRight
 * @category Array
 * @summary Creates a slice of array with n elements taken from the end.
 *
 * @description
 * Creates a slice of array with n elements taken from the end.
 *
 * @param {array} array The array to get slice.
 * @param {number} [n=1] The number of elements to take.
 * @returns {array} Returns the slice of `array`.
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
export default function takeRight(array, n = 1) {
  if (!isArray(array)) {
    throw new TypeError(`${array} should be Array-like value!`)
  }
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  return array.slice(-1 * n)
}
