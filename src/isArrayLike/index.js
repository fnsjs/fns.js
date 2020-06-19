import isLength from '../isLength'

/**
 * @name toArray
 * @category Typing
 * @summary Checks if `value` is array-like.
 *
 * @description
 * Checks if `value` is array-like.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 *
 * @example
 * isArrayLike([1, 2, 3])
 * // => {"hello"}
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
export default function toArray(value) {
  return value != null && typeof value !== 'function' && isLength(value.length)
}
