/**
 * Creates an array of elements split into groups the length of size.
 *
 * @module chunk
 * @category Array
 *
 * @param array The array to chunk.
 * @param size The length of each chunk.
 * @returns Returns the new array of filtered values.
 *
 *@example
 *```typescript
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 *```
 */

export default function chunk<T>(array: T[], size = 1): T[] {
  const len = array == null ? 0 : array.length;
  size = Math.max(parseInt(String(size)), 0);

  if (!len || size < 1) {
    return [];
  }
  let chunks = Math.ceil(len / size),
    i = 0,
    j = 0;
  const result = Array(chunks);

  for (; i < chunks; i++, j += size) {
    result[i] = array.slice(j, j + size);
  }

  return result;
}
