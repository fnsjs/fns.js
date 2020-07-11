import isArray from '../isArray'

/**
 * @name last
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
export default function last(array) {
  return array[array.length - 1]
}
