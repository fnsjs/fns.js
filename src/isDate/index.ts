import getObjectType from '../.utils/getObjectType';

/**
 * Checks if `value` is `null`.
 *
 * @name isDate
 * @category Types Check
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is `date`, else `false`.
 *
 * @example
 * isDate(new Date)
 * // => true
 *
 * isDate("Thu Jun 18 2020")
 * // => false
 */
export default function isDate(value: any): boolean {
  return (
    !!value &&
    typeof value === 'object' &&
    getObjectType(value) === '[object Date]'
  );
}
