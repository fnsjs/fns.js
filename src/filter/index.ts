/**
 * creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * @module filter
 * @category Array
 *
 * @param array The array to iterate over.
 * @param callback that is called for every element of arr. Each time callback executes, the returned value is added to new_array.
 * @returns Returns A new array with each element being the result of the callback function.
 *
 * @example
 *```typescript
 * const array = [1, 4, 9, 16];
 *
 * map(array,x => x * 2);
 * // => [2, 8, 18, 32]
 *```
 */

export default function filter<T>(
  array: T[] = [],
  callback: (element: T, index: number, array: T[]) => boolean
) {
  const _array = [];
  const arraySize = array.length;
  let index = 0;

  for (; index < arraySize; index++) {
    const element = array[index];
    if (callback(element, index, _array)) {
      _array.push(element);
    }
  }

  return _array;
}
