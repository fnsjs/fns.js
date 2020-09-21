import toInteger from '../toInteger'

/**
 * @name indexOf
 * @category Array
 * @summary returns the first index at which a given element can be found in the array.
 *
 * @description
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @param {*} array The array (or array-like) to search within.
 * @param  {*} searchElement The target item to search for.
 * @param  {Number} fromIndex The position to start searching from, if known.
 * @returns {Number} Returns `true` if `value` is `Error`, else `false`.
 *
 * @example
 * const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
 *
 * indexOf(beasts, 'bison');
 * // => 1
 *
 * indexOf(beasts, 'bison', 2);
 * // => 4
 *
 * indexOf(beasts, 'giraffe');
 * // => -1
 */
export default function indexOf(array, searchElement, fromIndex) {
  const length = array === null ? 0 : array.length
  if (!length) {
    return -1
  }

  let i = fromIndex === null ? 0 : toInteger(fromIndex)
  if (i < 0) {
    i = Math.max(length + i, 0)
  }

  for (; i < length; i++) {
    const el = array[i]
    if (el === searchElement || (el !== el && el !== searchElement)) {
      return i
    }
  }

  return -1
}
