import reduce from '../reduce'
import isArray from '../isArray'

/**
 * @name min
 * @category Array
 * @summary Returns the minimum value.
 *
 * @description
 * Computes the minimum value of array. If array is empty or falsey, undefined is returned.
 *
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @throws {TypeError} should be Array value.
 *
 * @example
 *
 * min([2, 12, 9, 4]);
 * // => 2
 *
 * min([]);
 * // => undefined
 */

export default function min(array) {
  if (!isArray(array)) {
    throw new TypeError(`${Array} should be Array value!`)
  }

  return reduce(array, function (acc, value) {
    if (acc > value) {
      return value
    }
    return acc
  })
}
