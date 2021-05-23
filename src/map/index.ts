/**
 * creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * @name map
 * @category Array
 *
 * @param array The array to iterate over.
 * @param callback that is called for every element of arr. Each time callback executes, the returned value is added to new_array.
 * @returns {Array} A new array with each element being the result of the callback function.
 *
 * @example
 *
 * const array = [1, 4, 9, 16];
 *
 * map(array,x => x * 2);
 * // => [2, 8, 18, 32]
 *
 */

export default function map<T>(
  array: T[],
  callback: (item: T, index: number, array: T[]) => any
): any[] {
  const arraySize = array.length;
  const _array = new Array(arraySize);
  let index = 0;

  for (; index < arraySize; index++) {
    _array[index] = callback(array[index], index, array);
  }

  return _array;
}
