/**
 * Remove elements from an array by predicate.
 *
 * @module pull
 * @category Array
 *
 * @param array The array to modify.
 * @param [removeList] The values to remove.
 * @returns Returns `array`.
 *
 * @example
 *```typescript
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 * ```
 */
export default function pull<T>(array: T[], ...removeList: T[]): T[] {
  const removeSet = new Set(removeList);
  return array.filter(el => !removeSet.has(el));
}
