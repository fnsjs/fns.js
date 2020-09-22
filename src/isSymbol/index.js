import getObjectType from '../utils/getObjectType'

/**
 * @name isSymbol
 * @category Number
 * @summary Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @description
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
  const type = typeof value
  return (
    type === 'symbol' ||
    (type === 'object' &&
      value != null &&
      getObjectType(value) === '[object Symbol]')
  )
}

export default isSymbol
