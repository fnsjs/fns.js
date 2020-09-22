import toFinite from '../toFinite'

/**
 * @name toInteger
 * @category Number
 * @summary Converts `value` to an integer.
 *
 * @description
 * Converts `value` to an integer.
 *
 * @param {*} value The value to convert.
 * @returns {Number} Returns the converted integer.
 *
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value) {
  const result = toFinite(value)
  const remainder = result % 1

  return remainder ? result - remainder : result
}

export default toInteger
