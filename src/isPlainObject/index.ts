import getObjectType from '../.utils/getObjectType';

function isHostObject(value: any): boolean {
  let result = false;
  if (value !== null && typeof value.toString !== 'function') {
    result = !!(value + '');
  }
  return result;
}

const fnToString = Function.prototype.toString;
/**
 * @name isPlainObject
 * @category Types Check
 * @summary Checks if `value` is `object`.
 *
 * @description
 * Checks if `value` is `plain object`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `plain object`, else `false`.
 *
 * @example
 * isPlainObject({a:1, b:2})
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 *
 * isPlainObject([1, 2, 3])
 * // => false
 */
export default function isPlainObject(value: any): boolean {
  if (!value && typeof value !== 'object') {
    return false;
  }
  if (getObjectType(value) !== '[object Object]') {
    return false;
  }
  if (isHostObject(value)) {
    return false;
  }

  const proto =
    typeof value.constructor === 'function'
      ? Object.getPrototypeOf(value)
      : Object.prototype;

  if (proto === null) {
    return true;
  }
  const Ctor = proto.constructor;
  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor &&
    fnToString.call(Ctor) === fnToString.call(Object)
  );
}
