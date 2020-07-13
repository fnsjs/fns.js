/**
 * @name isObjectLike
 * @category Types Check
 * @summary Checks if `value` is `object`.
 *
 * @description
 * Checks if `value` is `object-like`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `object-like`, else `false`.
 *
 * @example
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(null)
 * // => false
 */
export default function isObjectLike(value) {
  return !!value && typeof value === 'object'
}
