import isArray from '../isArray'

/**
 * @name reverse
 * @category Array
 * @summary Checks if `value` is `Error`.
 *
 * @description
 * Checks if `value` is `Error`.
 *
 * @param {*} array The array to get last element.
 * @returns {boolean} Returns `true` if `value` is `Error`, else `false`.
 *
 * @example
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
export default function reverse(array) {
  if (!isArray(array)) {
    return array
  }
  return array.reverse()
}
