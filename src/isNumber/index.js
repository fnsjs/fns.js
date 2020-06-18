import getObjectType from '../utils/getObjectType'

/**
 * @name isNumber
 * @category Types
 * @summary Checks if `value` is `Number`.
 *
 * @description
 * determines whether the passed value is an Number.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is `Number`, else `false`.
 *
 * @example
 * isNumber(123)
 * // => true
 *
 * isNumber({})
 * // => false
 */
export default function isNumber(value) {
  if (typeof value === 'number') {
    return true
  }
  return (
    !!value &&
    typeof value === 'object' &&
    getObjectType(value) === '[object Number]'
  )
}
