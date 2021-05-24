/**
 * Checks if `value` is `Error`.
 *
 * @name last
 * @category Array
 *
 * @param array The array to get last element.
 * @returns Returns `true` if `value` is `Error`, else `false`.
 *
 * @example
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
export default function last<T>(array: T[]): T {
  return array[array.length - 1];
}
