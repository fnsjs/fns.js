/**
 * @name isArray
 * @category Types Check
 * @summary Checks if `value` is `Array`.
 *
 * @description
 * determines whether the passed value is an Array.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is `array`, else `false`.
 *
 * @example
 * isArray([1,2,3])
 * // => true
 *
 * isArray({})
 * // => false
 */
export default Array.isArray
