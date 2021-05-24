/**
 * Determines whether the passed value is an Array.
 *
 * @name isArray
 * @category Types Check
 * @summary Checks if `value` is `Array`.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is `array`, else `false`.
 *
 * @example
 * ```typescript
 * isArray([1,2,3])
 * // => true
 *
 * isArray({})
 * // => false
 * ```
 */
export default Array.isArray;
