import getObjectType from '../utils/getObjectType'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 4.0.0
 * @category Lang
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
