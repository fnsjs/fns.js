import getObjectType from '../utils/getObjectType'

/**
 * @name isError
 * @category Types Check
 * @summary Checks if `value` is `Error`.
 *
 * @description
 * Checks if `value` is `Error`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `Error`, else `false`.
 *
 * @example
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
export default function isError(value) {
  return (
    !!value &&
    typeof value === 'object' &&
    typeof value.message === 'string' &&
    getObjectType(value) === '[object Error]'
  )
}
