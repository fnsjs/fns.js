/**
 *  Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
 *
 * @name reduce
 * @category Array
 *
 * @param array The array (or array-like) to reduce.
 * @param reducer The array to get last element.
 * @param initialValue The initial value for the reducer, defaults to subject[0].
 * @returns Returns reduce result
 *
 * @example
 *```typescript
 * const reducer = (accumulator, currentValue) => accumulator + currentValue;
 *
 * reduce([1, 2, 3, 4], reducer);
 * //=> 10
 *
 * reduce([1, 2, 3, 4], reducer, 10);
 * //=> 20
 * ```
 */
export default function reduce<T>(
  array: T[],
  reducer: (result: any, value: T, index: number, array: T[]) => any,
  initialValue?: any
) {
  var length = array.length,
    i = 0,
    result = initialValue;

  if (initialValue === undefined) {
    i = 1;
    result = array[0];
  }

  for (; i < length; i++) {
    result = reducer(result, array[i], i, array);
  }

  return result;
}
