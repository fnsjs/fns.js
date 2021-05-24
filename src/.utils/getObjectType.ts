const toString = Object.prototype.toString;

/**
 * Gets the `ObjectType` of `value`.
 *
 * @private
 * @param value The value to query.
 * @returns Returns the `ObjectType`.
 */
export default function getObjectType(value: any): string {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
