import isNull from '../isNull'

/**
 * @name isObject
 * @category Type Checkers
 * @summary Checks if `value` is `object`.
 *
 * @description
 * Checks if `value` is `object`. It doesn't consider `null` as an object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `object`, else `false`.
 *
 * @example
 * isObject({})
 * // => true
 *
 *  * isObject({})
 * // => true
 *
 * isObject(null)
 * // => false
 */
export default function isObject(value) {
  const type = typeof value
  return !isNull(value) && (type === 'object' || type === 'function')
}
