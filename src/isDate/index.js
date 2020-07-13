import getObjectType from '../utils/getObjectType'

/**
 * @name isDate
 * @category Types Check
 * @summary Checks if `value` is `date`.
 *
 * @description
 * Checks if `value` is `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `date`, else `false`.
 *
 * @example
 * isDate(new Date)
 * // => true
 *
 * isDate("Thu Jun 18 2020")
 * // => false
 */
export default function isDate(value) {
  return (
    !!value &&
    typeof value === 'object' &&
    getObjectType(value) === '[object Date]'
  )
}
