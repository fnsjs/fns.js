import isLength from '../isLength';

/**
 * Checks if `value` is array-like.
 * @name isArrayLike
 * @category Typing
 *
 * @param value - The value to check.
 * @returns Returns `true` if `value` is array-like, else `false`.
 *
 * @example
 * ```typescript
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
 * ```
 */
export default function isArrayLike(value: any): boolean {
  return value != null && typeof value !== 'function' && isLength(value.length);
}
