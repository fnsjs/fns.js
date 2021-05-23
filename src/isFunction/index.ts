import getObjectType from '../.utils/getObjectType';

/**
 * @name isFunction
 * @category Types Check
 * @summary Checks if `value` is `function`.
 *
 * @description
 * Checks if `value` is `function`.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is `function`, else `false`.
 *
 * @example
 * isFunction(()=>{})
 * // => true
 *
 * isFunction({})
 * // => false
 */
export default function isFunction(value: any): boolean {
  const type = typeof value;
  return (
    !!value &&
    (type === 'object' || type === 'function') &&
    (getObjectType(value) === '[object Function]' ||
      getObjectType(value) === '[object AsyncFunction]')
  );
}
