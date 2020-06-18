/**
 * @name castArray
 * @category Types
 * @summary cast `value` to `array`.
 *
 * @description
 * cast `value` to `array`.
 *
 * @param {*} value - The value to cast.
 * @returns {array} Returns the cast array.
 *
 * @example
 * castArray("hello")
 * // => {"hello"}
 *
 * castArray(1)
 * // => [1]
 */
export default function castArray(value) {
  if (value === null || value === undefined) {
    return []
  }

  if (Array.isArray(value)) {
    return value
  }

  return [value]
}
