// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

// FP Interfaces

interface CurriedFn1<A, R> {
  (a: A): R
}

interface CurriedFn2<A, B, R> {
  (a: A): CurriedFn1<B, R>
  (a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  (a: A): CurriedFn2<B, C, R>
  (a: A, b: B): CurriedFn1<C, R>
  (a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  (a: A): CurriedFn3<B, C, D, R>
  (a: A, b: B): CurriedFn2<C, D, R>
  (a: A, b: B, c: C): CurriedFn1<D, R>
  (a: A, b: B, c: C, d: D): R
}

// Type Aliases

// Exported Type Aliases

declare module 'fns.js' {}

// Regular Functions

declare module 'fns.js' {
  function castArray(value: any): array
  namespace castArray {}

  function fromArray(arrayLike: any, mapFn: any): array
  namespace fromArray {}

  function get(object: Object, path: Array | string, defaultValue?: any): any
  namespace get {}

  function isArray(value: any): boolean
  namespace isArray {}

  function isArrayLike(value: any): boolean
  namespace isArrayLike {}

  function isBoolean(value: any): boolean
  namespace isBoolean {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isError(value: any): boolean
  namespace isError {}

  function isFunction(value: any): boolean
  namespace isFunction {}

  function isLength(value: any): boolean
  namespace isLength {}

  function isNull(value: any): boolean
  namespace isNull {}

  function isNumber(value: any): boolean
  namespace isNumber {}

  function isObject(value: any): boolean
  namespace isObject {}

  function isObjectLike(value: any): boolean
  namespace isObjectLike {}

  function isPlainObject(value: any): boolean
  namespace isPlainObject {}

  function isRegExp(value: any): boolean
  namespace isRegExp {}

  function isString(value: any): boolean
  namespace isString {}

  function last(array: any): boolean
  namespace last {}

  function map(array: Array, callback: (...args: Array<any>) => any): Array
  namespace map {}

  function map(array: Array, callback: (...args: Array<any>) => any): Array
  namespace map {}

  function reverse(array: any): boolean
  namespace reverse {}

  function reverse(array: any): boolean
  namespace reverse {}

  function takeRight(array: array, n?: number): array
  namespace takeRight {}

  const MAX_SAFE_INTEGER: number
}

declare module 'fns.js/castArray' {
  import { castArray } from 'fns.js'
  export default castArray
}

declare module 'fns.js/fromArray' {
  import { fromArray } from 'fns.js'
  export default fromArray
}

declare module 'fns.js/get' {
  import { get } from 'fns.js'
  export default get
}

declare module 'fns.js/isArray' {
  import { isArray } from 'fns.js'
  export default isArray
}

declare module 'fns.js/isArrayLike' {
  import { isArrayLike } from 'fns.js'
  export default isArrayLike
}

declare module 'fns.js/isBoolean' {
  import { isBoolean } from 'fns.js'
  export default isBoolean
}

declare module 'fns.js/isDate' {
  import { isDate } from 'fns.js'
  export default isDate
}

declare module 'fns.js/isError' {
  import { isError } from 'fns.js'
  export default isError
}

declare module 'fns.js/isFunction' {
  import { isFunction } from 'fns.js'
  export default isFunction
}

declare module 'fns.js/isLength' {
  import { isLength } from 'fns.js'
  export default isLength
}

declare module 'fns.js/isNull' {
  import { isNull } from 'fns.js'
  export default isNull
}

declare module 'fns.js/isNumber' {
  import { isNumber } from 'fns.js'
  export default isNumber
}

declare module 'fns.js/isObject' {
  import { isObject } from 'fns.js'
  export default isObject
}

declare module 'fns.js/isObjectLike' {
  import { isObjectLike } from 'fns.js'
  export default isObjectLike
}

declare module 'fns.js/isPlainObject' {
  import { isPlainObject } from 'fns.js'
  export default isPlainObject
}

declare module 'fns.js/isRegExp' {
  import { isRegExp } from 'fns.js'
  export default isRegExp
}

declare module 'fns.js/isString' {
  import { isString } from 'fns.js'
  export default isString
}

declare module 'fns.js/last' {
  import { last } from 'fns.js'
  export default last
}

declare module 'fns.js/map' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/map' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/reverse' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/reverse' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/takeRight' {
  import { takeRight } from 'fns.js'
  export default takeRight
}

declare module 'fns.js/castArray/index' {
  import { castArray } from 'fns.js'
  export default castArray
}

declare module 'fns.js/fromArray/index' {
  import { fromArray } from 'fns.js'
  export default fromArray
}

declare module 'fns.js/get/index' {
  import { get } from 'fns.js'
  export default get
}

declare module 'fns.js/isArray/index' {
  import { isArray } from 'fns.js'
  export default isArray
}

declare module 'fns.js/isArrayLike/index' {
  import { isArrayLike } from 'fns.js'
  export default isArrayLike
}

declare module 'fns.js/isBoolean/index' {
  import { isBoolean } from 'fns.js'
  export default isBoolean
}

declare module 'fns.js/isDate/index' {
  import { isDate } from 'fns.js'
  export default isDate
}

declare module 'fns.js/isError/index' {
  import { isError } from 'fns.js'
  export default isError
}

declare module 'fns.js/isFunction/index' {
  import { isFunction } from 'fns.js'
  export default isFunction
}

declare module 'fns.js/isLength/index' {
  import { isLength } from 'fns.js'
  export default isLength
}

declare module 'fns.js/isNull/index' {
  import { isNull } from 'fns.js'
  export default isNull
}

declare module 'fns.js/isNumber/index' {
  import { isNumber } from 'fns.js'
  export default isNumber
}

declare module 'fns.js/isObject/index' {
  import { isObject } from 'fns.js'
  export default isObject
}

declare module 'fns.js/isObjectLike/index' {
  import { isObjectLike } from 'fns.js'
  export default isObjectLike
}

declare module 'fns.js/isPlainObject/index' {
  import { isPlainObject } from 'fns.js'
  export default isPlainObject
}

declare module 'fns.js/isRegExp/index' {
  import { isRegExp } from 'fns.js'
  export default isRegExp
}

declare module 'fns.js/isString/index' {
  import { isString } from 'fns.js'
  export default isString
}

declare module 'fns.js/last/index' {
  import { last } from 'fns.js'
  export default last
}

declare module 'fns.js/map/index' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/map/index' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/reverse/index' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/reverse/index' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/takeRight/index' {
  import { takeRight } from 'fns.js'
  export default takeRight
}

declare module 'fns.js/castArray/index.js' {
  import { castArray } from 'fns.js'
  export default castArray
}

declare module 'fns.js/fromArray/index.js' {
  import { fromArray } from 'fns.js'
  export default fromArray
}

declare module 'fns.js/get/index.js' {
  import { get } from 'fns.js'
  export default get
}

declare module 'fns.js/isArray/index.js' {
  import { isArray } from 'fns.js'
  export default isArray
}

declare module 'fns.js/isArrayLike/index.js' {
  import { isArrayLike } from 'fns.js'
  export default isArrayLike
}

declare module 'fns.js/isBoolean/index.js' {
  import { isBoolean } from 'fns.js'
  export default isBoolean
}

declare module 'fns.js/isDate/index.js' {
  import { isDate } from 'fns.js'
  export default isDate
}

declare module 'fns.js/isError/index.js' {
  import { isError } from 'fns.js'
  export default isError
}

declare module 'fns.js/isFunction/index.js' {
  import { isFunction } from 'fns.js'
  export default isFunction
}

declare module 'fns.js/isLength/index.js' {
  import { isLength } from 'fns.js'
  export default isLength
}

declare module 'fns.js/isNull/index.js' {
  import { isNull } from 'fns.js'
  export default isNull
}

declare module 'fns.js/isNumber/index.js' {
  import { isNumber } from 'fns.js'
  export default isNumber
}

declare module 'fns.js/isObject/index.js' {
  import { isObject } from 'fns.js'
  export default isObject
}

declare module 'fns.js/isObjectLike/index.js' {
  import { isObjectLike } from 'fns.js'
  export default isObjectLike
}

declare module 'fns.js/isPlainObject/index.js' {
  import { isPlainObject } from 'fns.js'
  export default isPlainObject
}

declare module 'fns.js/isRegExp/index.js' {
  import { isRegExp } from 'fns.js'
  export default isRegExp
}

declare module 'fns.js/isString/index.js' {
  import { isString } from 'fns.js'
  export default isString
}

declare module 'fns.js/last/index.js' {
  import { last } from 'fns.js'
  export default last
}

declare module 'fns.js/map/index.js' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/map/index.js' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/reverse/index.js' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/reverse/index.js' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/takeRight/index.js' {
  import { takeRight } from 'fns.js'
  export default takeRight
}

// FP Functions

declare module 'fns.js/fp' {
  const MAX_SAFE_INTEGER: number
}

// ECMAScript Module Functions

declare module 'fns.js/esm' {
  function castArray(value: any): array
  namespace castArray {}

  function fromArray(arrayLike: any, mapFn: any): array
  namespace fromArray {}

  function get(object: Object, path: Array | string, defaultValue?: any): any
  namespace get {}

  function isArray(value: any): boolean
  namespace isArray {}

  function isArrayLike(value: any): boolean
  namespace isArrayLike {}

  function isBoolean(value: any): boolean
  namespace isBoolean {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isError(value: any): boolean
  namespace isError {}

  function isFunction(value: any): boolean
  namespace isFunction {}

  function isLength(value: any): boolean
  namespace isLength {}

  function isNull(value: any): boolean
  namespace isNull {}

  function isNumber(value: any): boolean
  namespace isNumber {}

  function isObject(value: any): boolean
  namespace isObject {}

  function isObjectLike(value: any): boolean
  namespace isObjectLike {}

  function isPlainObject(value: any): boolean
  namespace isPlainObject {}

  function isRegExp(value: any): boolean
  namespace isRegExp {}

  function isString(value: any): boolean
  namespace isString {}

  function last(array: any): boolean
  namespace last {}

  function map(array: Array, callback: (...args: Array<any>) => any): Array
  namespace map {}

  function map(array: Array, callback: (...args: Array<any>) => any): Array
  namespace map {}

  function reverse(array: any): boolean
  namespace reverse {}

  function reverse(array: any): boolean
  namespace reverse {}

  function takeRight(array: array, n?: number): array
  namespace takeRight {}

  const MAX_SAFE_INTEGER: number
}

declare module 'fns.js/esm/castArray' {
  import { castArray } from 'fns.js/esm'
  export default castArray
}

declare module 'fns.js/esm/fromArray' {
  import { fromArray } from 'fns.js/esm'
  export default fromArray
}

declare module 'fns.js/esm/get' {
  import { get } from 'fns.js/esm'
  export default get
}

declare module 'fns.js/esm/isArray' {
  import { isArray } from 'fns.js/esm'
  export default isArray
}

declare module 'fns.js/esm/isArrayLike' {
  import { isArrayLike } from 'fns.js/esm'
  export default isArrayLike
}

declare module 'fns.js/esm/isBoolean' {
  import { isBoolean } from 'fns.js/esm'
  export default isBoolean
}

declare module 'fns.js/esm/isDate' {
  import { isDate } from 'fns.js/esm'
  export default isDate
}

declare module 'fns.js/esm/isError' {
  import { isError } from 'fns.js/esm'
  export default isError
}

declare module 'fns.js/esm/isFunction' {
  import { isFunction } from 'fns.js/esm'
  export default isFunction
}

declare module 'fns.js/esm/isLength' {
  import { isLength } from 'fns.js/esm'
  export default isLength
}

declare module 'fns.js/esm/isNull' {
  import { isNull } from 'fns.js/esm'
  export default isNull
}

declare module 'fns.js/esm/isNumber' {
  import { isNumber } from 'fns.js/esm'
  export default isNumber
}

declare module 'fns.js/esm/isObject' {
  import { isObject } from 'fns.js/esm'
  export default isObject
}

declare module 'fns.js/esm/isObjectLike' {
  import { isObjectLike } from 'fns.js/esm'
  export default isObjectLike
}

declare module 'fns.js/esm/isPlainObject' {
  import { isPlainObject } from 'fns.js/esm'
  export default isPlainObject
}

declare module 'fns.js/esm/isRegExp' {
  import { isRegExp } from 'fns.js/esm'
  export default isRegExp
}

declare module 'fns.js/esm/isString' {
  import { isString } from 'fns.js/esm'
  export default isString
}

declare module 'fns.js/esm/last' {
  import { last } from 'fns.js/esm'
  export default last
}

declare module 'fns.js/esm/map' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/map' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/reverse' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/reverse' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/takeRight' {
  import { takeRight } from 'fns.js/esm'
  export default takeRight
}

declare module 'fns.js/esm/castArray/index' {
  import { castArray } from 'fns.js/esm'
  export default castArray
}

declare module 'fns.js/esm/fromArray/index' {
  import { fromArray } from 'fns.js/esm'
  export default fromArray
}

declare module 'fns.js/esm/get/index' {
  import { get } from 'fns.js/esm'
  export default get
}

declare module 'fns.js/esm/isArray/index' {
  import { isArray } from 'fns.js/esm'
  export default isArray
}

declare module 'fns.js/esm/isArrayLike/index' {
  import { isArrayLike } from 'fns.js/esm'
  export default isArrayLike
}

declare module 'fns.js/esm/isBoolean/index' {
  import { isBoolean } from 'fns.js/esm'
  export default isBoolean
}

declare module 'fns.js/esm/isDate/index' {
  import { isDate } from 'fns.js/esm'
  export default isDate
}

declare module 'fns.js/esm/isError/index' {
  import { isError } from 'fns.js/esm'
  export default isError
}

declare module 'fns.js/esm/isFunction/index' {
  import { isFunction } from 'fns.js/esm'
  export default isFunction
}

declare module 'fns.js/esm/isLength/index' {
  import { isLength } from 'fns.js/esm'
  export default isLength
}

declare module 'fns.js/esm/isNull/index' {
  import { isNull } from 'fns.js/esm'
  export default isNull
}

declare module 'fns.js/esm/isNumber/index' {
  import { isNumber } from 'fns.js/esm'
  export default isNumber
}

declare module 'fns.js/esm/isObject/index' {
  import { isObject } from 'fns.js/esm'
  export default isObject
}

declare module 'fns.js/esm/isObjectLike/index' {
  import { isObjectLike } from 'fns.js/esm'
  export default isObjectLike
}

declare module 'fns.js/esm/isPlainObject/index' {
  import { isPlainObject } from 'fns.js/esm'
  export default isPlainObject
}

declare module 'fns.js/esm/isRegExp/index' {
  import { isRegExp } from 'fns.js/esm'
  export default isRegExp
}

declare module 'fns.js/esm/isString/index' {
  import { isString } from 'fns.js/esm'
  export default isString
}

declare module 'fns.js/esm/last/index' {
  import { last } from 'fns.js/esm'
  export default last
}

declare module 'fns.js/esm/map/index' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/map/index' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/reverse/index' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/reverse/index' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/takeRight/index' {
  import { takeRight } from 'fns.js/esm'
  export default takeRight
}

declare module 'fns.js/esm/castArray/index.js' {
  import { castArray } from 'fns.js/esm'
  export default castArray
}

declare module 'fns.js/esm/fromArray/index.js' {
  import { fromArray } from 'fns.js/esm'
  export default fromArray
}

declare module 'fns.js/esm/get/index.js' {
  import { get } from 'fns.js/esm'
  export default get
}

declare module 'fns.js/esm/isArray/index.js' {
  import { isArray } from 'fns.js/esm'
  export default isArray
}

declare module 'fns.js/esm/isArrayLike/index.js' {
  import { isArrayLike } from 'fns.js/esm'
  export default isArrayLike
}

declare module 'fns.js/esm/isBoolean/index.js' {
  import { isBoolean } from 'fns.js/esm'
  export default isBoolean
}

declare module 'fns.js/esm/isDate/index.js' {
  import { isDate } from 'fns.js/esm'
  export default isDate
}

declare module 'fns.js/esm/isError/index.js' {
  import { isError } from 'fns.js/esm'
  export default isError
}

declare module 'fns.js/esm/isFunction/index.js' {
  import { isFunction } from 'fns.js/esm'
  export default isFunction
}

declare module 'fns.js/esm/isLength/index.js' {
  import { isLength } from 'fns.js/esm'
  export default isLength
}

declare module 'fns.js/esm/isNull/index.js' {
  import { isNull } from 'fns.js/esm'
  export default isNull
}

declare module 'fns.js/esm/isNumber/index.js' {
  import { isNumber } from 'fns.js/esm'
  export default isNumber
}

declare module 'fns.js/esm/isObject/index.js' {
  import { isObject } from 'fns.js/esm'
  export default isObject
}

declare module 'fns.js/esm/isObjectLike/index.js' {
  import { isObjectLike } from 'fns.js/esm'
  export default isObjectLike
}

declare module 'fns.js/esm/isPlainObject/index.js' {
  import { isPlainObject } from 'fns.js/esm'
  export default isPlainObject
}

declare module 'fns.js/esm/isRegExp/index.js' {
  import { isRegExp } from 'fns.js/esm'
  export default isRegExp
}

declare module 'fns.js/esm/isString/index.js' {
  import { isString } from 'fns.js/esm'
  export default isString
}

declare module 'fns.js/esm/last/index.js' {
  import { last } from 'fns.js/esm'
  export default last
}

declare module 'fns.js/esm/map/index.js' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/map/index.js' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/reverse/index.js' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/reverse/index.js' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/takeRight/index.js' {
  import { takeRight } from 'fns.js/esm'
  export default takeRight
}

// ECMAScript Module FP Functions

declare module 'fns.js/esm/fp' {
  const MAX_SAFE_INTEGER: number
}

// dateFns Global Interface

interface dateFns {
  castArray(value: any): array

  fromArray(arrayLike: any, mapFn: any): array

  get(object: Object, path: Array | string, defaultValue?: any): any

  isArray(value: any): boolean

  isArrayLike(value: any): boolean

  isBoolean(value: any): boolean

  isDate(value: any): boolean

  isError(value: any): boolean

  isFunction(value: any): boolean

  isLength(value: any): boolean

  isNull(value: any): boolean

  isNumber(value: any): boolean

  isObject(value: any): boolean

  isObjectLike(value: any): boolean

  isPlainObject(value: any): boolean

  isRegExp(value: any): boolean

  isString(value: any): boolean

  last(array: any): boolean

  map(array: Array, callback: (...args: Array<any>) => any): Array

  map(array: Array, callback: (...args: Array<any>) => any): Array

  reverse(array: any): boolean

  reverse(array: any): boolean

  takeRight(array: array, n?: number): array

  MAX_SAFE_INTEGER: number
}
