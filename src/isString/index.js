import getObjectType from '../utils/getObjectType'

/**
 * @name isString
 * @category Types Check
 * @summary Checks if `value` is `string`.
 *
 * @description
 * Checks if `value` is `string`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `string`, else `false`.
 *
 * @example
 * isString("hello")
 * // => true
 *
 * isObject({a:1})
 * // => false
 */
export default function isString(value) {
  if (typeof value === 'string') {
    return true
  }
  return (
    !!value &&
    typeof value === 'object' &&
    getObjectType(value) === '[object String]'
  )
}
