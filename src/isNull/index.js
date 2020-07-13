/**
 * @name isNull
 * @category Types Check
 * @summary Checks if `value` is `null`.
 *
 * @description
 * Checks if `value` is `null`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 *
 * @example
 * isNull(null)
 * // => true
 *
 * isNull("")
 * // => false
 */
export default function isNull(value) {
  return value === null
}
