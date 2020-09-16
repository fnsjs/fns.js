/**
 * @name reduceRight
 * @category Array
 * @summary Reduces the array (from right-to-left) to a single value.
 *
 * @description
 *  The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
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
 * reduceRight([1, 2, 3, 4], reducer);
 * //=> 10
 *
 * reduceRight([1, 2, 3, 4], reducer, 10);
 * //=> 20
 *
 */
export default function reduceRight(array, reducer, initialValue) {
  var length = array.length,
    i,
    result

  if (initialValue === undefined) {
    i = length - 2
    result = array[length - 1]
  } else {
    i = length - 1
    result = initialValue
  }

  for (; i >= 0; i--) {
    result = reducer(result, array[i], i, array)
  }

  return result
}
