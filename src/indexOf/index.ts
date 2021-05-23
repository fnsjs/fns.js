import toInteger from '../toInteger';

/**
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @name indexOf
 * @category Array
 *
 * @param array The array (or array-like) to search within.
 * @param searchElement The target item to search for.
 * @param fromIndex The position to start searching from, if known.
 * @returns Returns `true` if `value` is `Error`, else `false`.
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
export default function indexOf<T>(
  array: T[] = [],
  searchElement: T,
  fromIndex = 0
): number {
  const length = array.length;
  if (!length) {
    return -1;
  }

  let i = toInteger(fromIndex);
  if (i < 0) {
    i = Math.max(length + i, 0);
  }

  for (; i < length; i++) {
    const el = array[i];
    if (el === searchElement || (el !== el && el !== searchElement)) {
      return i;
    }
  }

  return -1;
}
