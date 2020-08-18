/**
 * @name castArray
 * @category Types Check
 * @summary cast `value` to `array`.
 *
 * @description
 * cast `value` to `array`.
 *
 * @param {*} value - The value to cast.
 * @returns {Array} Returns the cast array.
 *
 * @example
 * castArray("hello")
 * // => {"hello"}
 *
 * castArray(1)
 * // => [1]
 */
export default function castArray(value) {
  if (!value) {
    return []
  }

  if (Array.isArray(value)) {
    return value
  }

  return [value]
}
