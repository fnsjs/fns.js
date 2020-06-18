import getObjectType from '../utils/getObjectType'

const hasToStringTag =
  typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'

function tryBooleanObject(value) {
  try {
    Boolean.prototype.toString.call(value)
    return true
  } catch (e) {
    return false
  }
}

/**
 * @name isBoolean
 * @category Types
 * @summary Checks if `value` is `boolean`.
 *
 * @description
 * Checks if `value` is `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `boolean`, else `false`.
 *
 * @example
 * isBoolean(false)
 * // => true
 *
 * isBoolean([])
 * // => false
 */
export default function isBoolean(value) {
  if (value === true) {
    return true
  }
  if (value === false) {
    return false
  }
  const _type = typeof value
  if (value === null || _type !== 'object') {
    return false
  }
  return _type === 'object' && getObjectType(value) === '[object Boolean]'
}
