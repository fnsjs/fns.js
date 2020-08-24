import reduce from '../reduce'
import isArray from '../isArray'

/**
 * @name max
 * @category Array
 * @summary Returns the maximum value.
 *
 * @description
 * Computes the maximum value of array. If array is empty or falsey, undefined is returned.
 *
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @throws {TypeError} should be Array value.
 *
 * @example
 *
 * max([2, 12, 9, 4]);
 * // => 12
 *
 * max([]);
 * // => undefined
 */

export default function max(array) {
  if (!isArray(array)) {
    throw new TypeError(`${Array} should be Array value!`)
  }

  return reduce(array, function (acc, value) {
    if (acc < value) {
      return value
    }
    return acc
  })
}
