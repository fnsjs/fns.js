import getObjectType from '../.utils/getObjectType';

/**
 * Checks if `value` is `Error`.
 *
 * @name isError
 * @category Types Check
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
export default function isError(value: any) {
  return (
    !!value &&
    typeof value === 'object' &&
    typeof value.message === 'string' &&
    getObjectType(value) === '[object Error]'
  );
}
