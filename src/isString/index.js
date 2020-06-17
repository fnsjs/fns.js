import getObjectType from '../utils/getObjectType'

/**
 * @name isString
 * @category Types
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
  const type = typeof value
  return (
    type === 'string' ||
    (type === 'object' &&
      value != null &&
      !Array.isArray(value) &&
      getObjectType(value) === '[object String]')
  )
}
