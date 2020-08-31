import filter from '../filter'

/**
 * @name compact
 * @category Array
 * @summary Creates an array with all falsy values removed.
 *
 * @description
 * Creates an array with all falsy values removed.
 *
 * @param {Array} array The array to compact.
 * @returns {*} Returns the new array of filtered values.
 *
 * @example
 *
 * compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 *
 */

export default function compact(array) {
  return filter(array, (value) => value)
}
