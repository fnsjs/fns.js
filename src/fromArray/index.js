/**
 * @name fromArray
 * @category Types Check
 * @summary cast `value` to `array`.
 *
 * @description
 * Creates a new, shallow-copied Array instance from an array-like or iterable object.
 *
 * @param {*} arrayLike - An array-like or iterable object to convert to an array.
 * @param {*} mapFn - Map function to call on every element of the array.
 * @returns {Array} A new Array instance.
 *
 * @example
 * fromArray("hello")
 * // => {"hello"}
 *
 * fromArray(1)
 * // => [1]
 */
export default function fromArray(arrayLike, mapFn) {
  try {
    if (arrayLike === null || arrayLike === undefined) {
      return []
    }
    if (mapFn) {
      return Array.from(arrayLike, mapFn)
    }
    return Array.from(arrayLike)
  } catch (e) {
    return []
  }
}
