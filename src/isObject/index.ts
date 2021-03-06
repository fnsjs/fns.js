/**
 * @name isObject
 * @category Types Check
 * @summary Checks if `value` is `object`.
 *
 * @description
 * Checks if `value` is `object`. It doesn't consider `null` as an object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `object`, else `false`.
 *
 * @example
 * isObject({})
 * // => true
 *
 * isObject({})
 * // => true
 *
 * isObject(null)
 * // => false
 */
export default function isObject(value: any): boolean {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
}
