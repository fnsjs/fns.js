import getObjectType from '../.utils/getObjectType';

/**
 * Checks if `value` is `null`.
 *
 * @name isBoolean
 * @category Types Check
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is `boolean`, else `false`.
 *
 * @example
 * isBoolean(false)
 * // => true
 *
 * isBoolean([])
 * // => false
 */
export default function isBoolean(value: any): boolean {
  if (value === true) {
    return true;
  }
  if (value === false) {
    return false;
  }
  const _type = typeof value;
  if (value === null || _type !== 'object') {
    return false;
  }
  return _type === 'object' && getObjectType(value) === '[object Boolean]';
}
