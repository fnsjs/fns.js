/**
 * @name castArray
 * @category Types
 * @summary cast `value` to `array`.
 *
 * @description
 * cast `value` to `array`.
 *
 * @param {*} args - The value to cast.
 * @returns {array} Returns the cast array.
 *
 * @example
 * castArray("hello")
 * // => {"hello"}
 *
 * castArray(1)
 * // => [1]
 */
export default function castArray(...args) {
  if (!args.length) {
    return []
  }
  const value = args[0]
  return Array.isArray(value) ? value : [value]
}
