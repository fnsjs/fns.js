import getObjectType from '../.utils/getObjectType';

/**
 * Checks if `value` is `string`.
 *
 * @module isString
 * @category Types Check
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is `string`, else `false`.
 *
 * @example
 *```typescript
 * isString("hello")
 * // => true
 *
 * isObject({a:1})
 * // => false
 *```
 */
export default function isString(value: any): boolean {
  if (typeof value === 'string') {
    return true;
  }
  return (
    !!value &&
    typeof value === 'object' &&
    getObjectType(value) === '[object String]'
  );
}
