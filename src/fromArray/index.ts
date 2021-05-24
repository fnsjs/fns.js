/**
 * Creates a new, shallow-copied Array instance from an array-like or iterable object.
 *
 * @module fromArray
 * @category Types Check
 *
 * @param arrayLike - An array-like or iterable object to convert to an array.
 * @param mapFn - Map function to call on every element of the array.
 * @returns {A new Array instance.
 *
 * @example
 * ```typescript
 * fromArray("hello")
 * // => {"hello"}
 *
 * fromArray(1)
 * // => [1]
 * ```
 */
export default function fromArray(
  arrayLike: Iterable<any> | ArrayLike<any>,
  mapFn?: (element: any, index: number) => any
): any[] {
  if (arrayLike === null || arrayLike === undefined) {
    return [];
  }
  if (mapFn) {
    return Array.from(arrayLike, mapFn);
  }
  return Array.from(arrayLike);
}
