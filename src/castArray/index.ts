/**
 * cast `value` to `array`.
 *
 * @module castArray
 * @category Array
 *
 * @param value - The value to cast.
 * @returns Returns the cast array.
 *
 * @example
 *```typescript
 * castArray("hello")
 * // => {"hello"}
 *
 * castArray(1)
 * // => [1]
 *```
 */
export default function castArray(value: any) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}
