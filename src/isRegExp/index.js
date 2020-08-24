import getObjectType from '../utils/getObjectType'

/**
 * @name isRegExp
 * @category Types Check
 * @summary Checks if `value` is `RegExp`.
 *
 * @description
 * Checks if `value` is `RegExp`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `RegExp`, else `false`.
 *
 * @example
 * isRegExp(/a/)
 * // => true
 *
 * isRegExp("hello")
 * // => false
 */
export default function isRegExp(value) {
  const type = typeof value
  return (
    !!value &&
    (type === 'object' || type === 'function') &&
    getObjectType(value) === '[object RegExp]'
  )
}
