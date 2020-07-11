import isArray from '../isArray'

/**
 * @name map
 * @category Array
 * @summary Gets the value at path of object.
 *
 * @description
 * creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * @param {Array} array The array to iterate over.
 * @param {Function} callback that is called for every element of arr. Each time callback executes, the returned value is added to new_array.
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
export default function map(array, callback) {
  if (!isArray(array)) {
    return []
  }

  const _array = []
  const arraySize = array.length
  let index = 0

  for (; index < arraySize; index++) {
    _array[index] = callback(array[index], index, _array)
  }

  return _array
}
