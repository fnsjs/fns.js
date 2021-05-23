import { MAX_SAFE_INTEGER } from '../.constants';

/**
 * @name isLength
 * @category Types Check
 * @summary Checks if `value` is a valid array-like length.
 *
 * @description
 * Checks if `value` is a valid array-like length.
 *
 * @param value - The value to check.
 * @returns Returns `true` if `value` is a valid length, else `false`.
 *
 * @example
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
export default function isLength(value: any): boolean {
  return (
    typeof value === 'number' &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}
