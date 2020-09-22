import isObject from '../isObject'
import isSymbol from '../isSymbol'
import { NAN, reIsBadHex, reIsBinary, reIsOctal, reTrim } from '../constants'

/**
 * @name toNumber
 * @category Number
 * @summary Converts `value` to a number.
 *
 * @description
 * Converts `value` to a number.
 *
 * @param {*} value The value to process.
 * @returns {Number} Returns the number.
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value === 'number') {
    return value
  }
  if (isSymbol(value)) {
    return NAN
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? `${other}` : other
  }
  if (typeof value !== 'string') {
    return value === 0 ? value : +value
  }
  value = value.replace(reTrim, '')
  const isBinary = reIsBinary.test(value)
  return isBinary || reIsOctal.test(value)
    ? parseInt(value.slice(2), isBinary ? 2 : 8)
    : reIsBadHex.test(value)
    ? NAN
    : +value
}

export default toNumber
