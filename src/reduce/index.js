/**
 * @name reduce
 * @category Array
 * @summary Reduces the array to a single value.
 *
 * @description
 *  Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
 *
 * @param {Array} array The array (or array-like) to reduce.
 * @param {Function} reducer The array to get last element.
 * @param {*} initialValue The initial value for the reducer, defaults to subject[0].
 * @returns {*} Returns reduce result
 *
 * @example
 *
 * const reducer = (accumulator, currentValue) => accumulator + currentValue;
 *
 * reduce([1, 2, 3, 4], reducer);
 * //=> 10
 *
 * reduce([1, 2, 3, 4], reducer, 10);
 * //=> 20
 *
 */
export default function reduce(array, reducer, initialValue) {
  var length = array.length,
    i = 0,
    result = initialValue

  if (initialValue === undefined) {
    i = 1
    result = array[0]
  }

  for (; i < length; i++) {
    result = reducer(result, array[i], i, array)
  }

  return result
}
