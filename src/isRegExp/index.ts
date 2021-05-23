import getObjectType from '../.utils/getObjectType';

/**
 * Checks if `value` is `RegExp`.
 *
 * @name isRegExp
 * @category Types Check
 * @summary Checks if `value` is `RegExp`.
 *
 * @param value The value to check.
 * @returns Returns `true` if `value` is `RegExp`, else `false`.
 *
 * @example
 *```typescript
 * isRegExp(/a/)
 * // => true
 *
 * isRegExp("hello")
 * // => false
 *```
 */
export default function isRegExp(value: any): boolean {
  const type = typeof value;
  return (
    !!value &&
    (type === 'object' || type === 'function') &&
    getObjectType(value) === '[object RegExp]'
  );
}
