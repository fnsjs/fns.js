/**
 * @name chunk
 * @category Array
 * @summary Creates an array of elements split into groups the length of size.
 *
 * @description
 * Creates an array of elements split into groups the length of size.
 *
 * @param {Array} array The array to chunk.
 * @param {number} size The length of each chunk.
 * @returns {*} Returns the new array of filtered values.
 *
 * @example
 *
 *
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 *
 */

export default function chunk(array, size) {
  const len = array == null ? 0 : array.length
  size = Math.max(parseInt(size), 0)

  if (!len || size < 1) {
    return []
  }
  let chunks = Math.ceil(len / size),
    i = 0,
    j = 0
  const result = Array(chunks)

  for (; i < chunks; i++, j += size) {
    result[i] = array.slice(j, j + size)
  }

  return result
}
