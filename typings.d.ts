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
  function castArray(value: any): Array<any>
  namespace castArray {}

  function fromArray(arrayLike: any, mapFn: any): Array<any>
  namespace fromArray {}

  function isArray(value: any): boolean
  namespace isArray {}

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

  function chunk(array: Array<any>, size: number): any
  namespace chunk {}

  function compact(array: Array<any>): any
  namespace compact {}

  function filter(
    array: Array<any>,
    callback: (...args: Array<any>) => any
  ): Array<any>
  namespace filter {}

  function indexOf(array: any, searchElement: any, fromIndex: number): number
  namespace indexOf {}

  function last(array: any): boolean
  namespace last {}

  function map(
    array: Array<any>,
    callback: (...args: Array<any>) => any
  ): Array<any>
  namespace map {}

  function max(array: Array<any>): any
  namespace max {}

  function min(array: Array<any>): any
  namespace min {}

  function pull(array: any): boolean
  namespace pull {}

  function reduce(
    array: Array<any>,
    reducer: (...args: Array<any>) => any,
    initialValue: any
  ): any
  namespace reduce {}

  function reduceRight(
    array: Array<any>,
    reducer: (...args: Array<any>) => any,
    initialValue: any
  ): any
  namespace reduceRight {}

  function reverse(array: any): boolean
  namespace reverse {}

  function takeRight(array: Array<any>, n?: number): Array<any>
  namespace takeRight {}

  function isSymbol(value: any): boolean
  namespace isSymbol {}

  function toFinite(value: any): number
  namespace toFinite {}

  function toInteger(value: any): number
  namespace toInteger {}

  function toNumber(value: any): number
  namespace toNumber {}

  function isArrayLike(value: any): boolean
  namespace isArrayLike {}

  const MAX_SAFE_INTEGER: number

  const NAN: number

  const reTrim: object

  const reIsBadHex: object

  const reIsBinary: object

  const reIsOctal: object
}

declare module 'fns.js/castArray' {
  import { castArray } from 'fns.js'
  export default castArray
}

declare module 'fns.js/fromArray' {
  import { fromArray } from 'fns.js'
  export default fromArray
}

declare module 'fns.js/isArray' {
  import { isArray } from 'fns.js'
  export default isArray
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

declare module 'fns.js/chunk' {
  import { chunk } from 'fns.js'
  export default chunk
}

declare module 'fns.js/compact' {
  import { compact } from 'fns.js'
  export default compact
}

declare module 'fns.js/filter' {
  import { filter } from 'fns.js'
  export default filter
}

declare module 'fns.js/indexOf' {
  import { indexOf } from 'fns.js'
  export default indexOf
}

declare module 'fns.js/last' {
  import { last } from 'fns.js'
  export default last
}

declare module 'fns.js/map' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/max' {
  import { max } from 'fns.js'
  export default max
}

declare module 'fns.js/min' {
  import { min } from 'fns.js'
  export default min
}

declare module 'fns.js/pull' {
  import { pull } from 'fns.js'
  export default pull
}

declare module 'fns.js/reduce' {
  import { reduce } from 'fns.js'
  export default reduce
}

declare module 'fns.js/reduceRight' {
  import { reduceRight } from 'fns.js'
  export default reduceRight
}

declare module 'fns.js/reverse' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/takeRight' {
  import { takeRight } from 'fns.js'
  export default takeRight
}

declare module 'fns.js/isSymbol' {
  import { isSymbol } from 'fns.js'
  export default isSymbol
}

declare module 'fns.js/toFinite' {
  import { toFinite } from 'fns.js'
  export default toFinite
}

declare module 'fns.js/toInteger' {
  import { toInteger } from 'fns.js'
  export default toInteger
}

declare module 'fns.js/toNumber' {
  import { toNumber } from 'fns.js'
  export default toNumber
}

declare module 'fns.js/isArrayLike' {
  import { isArrayLike } from 'fns.js'
  export default isArrayLike
}

declare module 'fns.js/castArray/index' {
  import { castArray } from 'fns.js'
  export default castArray
}

declare module 'fns.js/fromArray/index' {
  import { fromArray } from 'fns.js'
  export default fromArray
}

declare module 'fns.js/isArray/index' {
  import { isArray } from 'fns.js'
  export default isArray
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

declare module 'fns.js/chunk/index' {
  import { chunk } from 'fns.js'
  export default chunk
}

declare module 'fns.js/compact/index' {
  import { compact } from 'fns.js'
  export default compact
}

declare module 'fns.js/filter/index' {
  import { filter } from 'fns.js'
  export default filter
}

declare module 'fns.js/indexOf/index' {
  import { indexOf } from 'fns.js'
  export default indexOf
}

declare module 'fns.js/last/index' {
  import { last } from 'fns.js'
  export default last
}

declare module 'fns.js/map/index' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/max/index' {
  import { max } from 'fns.js'
  export default max
}

declare module 'fns.js/min/index' {
  import { min } from 'fns.js'
  export default min
}

declare module 'fns.js/pull/index' {
  import { pull } from 'fns.js'
  export default pull
}

declare module 'fns.js/reduce/index' {
  import { reduce } from 'fns.js'
  export default reduce
}

declare module 'fns.js/reduceRight/index' {
  import { reduceRight } from 'fns.js'
  export default reduceRight
}

declare module 'fns.js/reverse/index' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/takeRight/index' {
  import { takeRight } from 'fns.js'
  export default takeRight
}

declare module 'fns.js/isSymbol/index' {
  import { isSymbol } from 'fns.js'
  export default isSymbol
}

declare module 'fns.js/toFinite/index' {
  import { toFinite } from 'fns.js'
  export default toFinite
}

declare module 'fns.js/toInteger/index' {
  import { toInteger } from 'fns.js'
  export default toInteger
}

declare module 'fns.js/toNumber/index' {
  import { toNumber } from 'fns.js'
  export default toNumber
}

declare module 'fns.js/isArrayLike/index' {
  import { isArrayLike } from 'fns.js'
  export default isArrayLike
}

declare module 'fns.js/castArray/index.js' {
  import { castArray } from 'fns.js'
  export default castArray
}

declare module 'fns.js/fromArray/index.js' {
  import { fromArray } from 'fns.js'
  export default fromArray
}

declare module 'fns.js/isArray/index.js' {
  import { isArray } from 'fns.js'
  export default isArray
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

declare module 'fns.js/chunk/index.js' {
  import { chunk } from 'fns.js'
  export default chunk
}

declare module 'fns.js/compact/index.js' {
  import { compact } from 'fns.js'
  export default compact
}

declare module 'fns.js/filter/index.js' {
  import { filter } from 'fns.js'
  export default filter
}

declare module 'fns.js/indexOf/index.js' {
  import { indexOf } from 'fns.js'
  export default indexOf
}

declare module 'fns.js/last/index.js' {
  import { last } from 'fns.js'
  export default last
}

declare module 'fns.js/map/index.js' {
  import { map } from 'fns.js'
  export default map
}

declare module 'fns.js/max/index.js' {
  import { max } from 'fns.js'
  export default max
}

declare module 'fns.js/min/index.js' {
  import { min } from 'fns.js'
  export default min
}

declare module 'fns.js/pull/index.js' {
  import { pull } from 'fns.js'
  export default pull
}

declare module 'fns.js/reduce/index.js' {
  import { reduce } from 'fns.js'
  export default reduce
}

declare module 'fns.js/reduceRight/index.js' {
  import { reduceRight } from 'fns.js'
  export default reduceRight
}

declare module 'fns.js/reverse/index.js' {
  import { reverse } from 'fns.js'
  export default reverse
}

declare module 'fns.js/takeRight/index.js' {
  import { takeRight } from 'fns.js'
  export default takeRight
}

declare module 'fns.js/isSymbol/index.js' {
  import { isSymbol } from 'fns.js'
  export default isSymbol
}

declare module 'fns.js/toFinite/index.js' {
  import { toFinite } from 'fns.js'
  export default toFinite
}

declare module 'fns.js/toInteger/index.js' {
  import { toInteger } from 'fns.js'
  export default toInteger
}

declare module 'fns.js/toNumber/index.js' {
  import { toNumber } from 'fns.js'
  export default toNumber
}

declare module 'fns.js/isArrayLike/index.js' {
  import { isArrayLike } from 'fns.js'
  export default isArrayLike
}

// FP Functions

declare module 'fns.js/fp' {
  const castArray: CurriedFn1<any, Array<any>>
  namespace castArray {}

  const fromArray: CurriedFn2<any, any, Array<any>>
  namespace fromArray {}

  const isArray: CurriedFn1<any, boolean>
  namespace isArray {}

  const isBoolean: CurriedFn1<any, boolean>
  namespace isBoolean {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isError: CurriedFn1<any, boolean>
  namespace isError {}

  const isFunction: CurriedFn1<any, boolean>
  namespace isFunction {}

  const isLength: CurriedFn1<any, boolean>
  namespace isLength {}

  const isNull: CurriedFn1<any, boolean>
  namespace isNull {}

  const isNumber: CurriedFn1<any, boolean>
  namespace isNumber {}

  const isObject: CurriedFn1<any, boolean>
  namespace isObject {}

  const isObjectLike: CurriedFn1<any, boolean>
  namespace isObjectLike {}

  const isPlainObject: CurriedFn1<any, boolean>
  namespace isPlainObject {}

  const isRegExp: CurriedFn1<any, boolean>
  namespace isRegExp {}

  const isString: CurriedFn1<any, boolean>
  namespace isString {}

  const chunk: CurriedFn2<number, Array<any>, any>
  namespace chunk {}

  const compact: CurriedFn1<Array<any>, any>
  namespace compact {}

  const filter: CurriedFn2<(...args: Array<any>) => any, Array<any>, Array<any>>
  namespace filter {}

  const indexOf: CurriedFn3<number, any, any, number>
  namespace indexOf {}

  const last: CurriedFn1<any, boolean>
  namespace last {}

  const map: CurriedFn2<(...args: Array<any>) => any, Array<any>, Array<any>>
  namespace map {}

  const max: CurriedFn1<Array<any>, any>
  namespace max {}

  const min: CurriedFn1<Array<any>, any>
  namespace min {}

  const pull: CurriedFn1<any, boolean>
  namespace pull {}

  const reduce: CurriedFn3<any, (...args: Array<any>) => any, Array<any>, any>
  namespace reduce {}

  const reduceRight: CurriedFn3<
    any,
    (...args: Array<any>) => any,
    Array<any>,
    any
  >
  namespace reduceRight {}

  const reverse: CurriedFn1<any, boolean>
  namespace reverse {}

  const takeRight: CurriedFn2<number, Array<any>, Array<any>>
  namespace takeRight {}

  const isSymbol: CurriedFn1<any, boolean>
  namespace isSymbol {}

  const toFinite: CurriedFn1<any, number>
  namespace toFinite {}

  const toInteger: CurriedFn1<any, number>
  namespace toInteger {}

  const toNumber: CurriedFn1<any, number>
  namespace toNumber {}

  const isArrayLike: CurriedFn1<any, boolean>
  namespace isArrayLike {}

  const MAX_SAFE_INTEGER: number

  const NAN: number

  const reTrim: object

  const reIsBadHex: object

  const reIsBinary: object

  const reIsOctal: object
}

declare module 'fns.js/fp/castArray' {
  import { castArray } from 'fns.js/fp'
  export default castArray
}

declare module 'fns.js/fp/fromArray' {
  import { fromArray } from 'fns.js/fp'
  export default fromArray
}

declare module 'fns.js/fp/isArray' {
  import { isArray } from 'fns.js/fp'
  export default isArray
}

declare module 'fns.js/fp/isBoolean' {
  import { isBoolean } from 'fns.js/fp'
  export default isBoolean
}

declare module 'fns.js/fp/isDate' {
  import { isDate } from 'fns.js/fp'
  export default isDate
}

declare module 'fns.js/fp/isError' {
  import { isError } from 'fns.js/fp'
  export default isError
}

declare module 'fns.js/fp/isFunction' {
  import { isFunction } from 'fns.js/fp'
  export default isFunction
}

declare module 'fns.js/fp/isLength' {
  import { isLength } from 'fns.js/fp'
  export default isLength
}

declare module 'fns.js/fp/isNull' {
  import { isNull } from 'fns.js/fp'
  export default isNull
}

declare module 'fns.js/fp/isNumber' {
  import { isNumber } from 'fns.js/fp'
  export default isNumber
}

declare module 'fns.js/fp/isObject' {
  import { isObject } from 'fns.js/fp'
  export default isObject
}

declare module 'fns.js/fp/isObjectLike' {
  import { isObjectLike } from 'fns.js/fp'
  export default isObjectLike
}

declare module 'fns.js/fp/isPlainObject' {
  import { isPlainObject } from 'fns.js/fp'
  export default isPlainObject
}

declare module 'fns.js/fp/isRegExp' {
  import { isRegExp } from 'fns.js/fp'
  export default isRegExp
}

declare module 'fns.js/fp/isString' {
  import { isString } from 'fns.js/fp'
  export default isString
}

declare module 'fns.js/fp/chunk' {
  import { chunk } from 'fns.js/fp'
  export default chunk
}

declare module 'fns.js/fp/compact' {
  import { compact } from 'fns.js/fp'
  export default compact
}

declare module 'fns.js/fp/filter' {
  import { filter } from 'fns.js/fp'
  export default filter
}

declare module 'fns.js/fp/indexOf' {
  import { indexOf } from 'fns.js/fp'
  export default indexOf
}

declare module 'fns.js/fp/last' {
  import { last } from 'fns.js/fp'
  export default last
}

declare module 'fns.js/fp/map' {
  import { map } from 'fns.js/fp'
  export default map
}

declare module 'fns.js/fp/max' {
  import { max } from 'fns.js/fp'
  export default max
}

declare module 'fns.js/fp/min' {
  import { min } from 'fns.js/fp'
  export default min
}

declare module 'fns.js/fp/pull' {
  import { pull } from 'fns.js/fp'
  export default pull
}

declare module 'fns.js/fp/reduce' {
  import { reduce } from 'fns.js/fp'
  export default reduce
}

declare module 'fns.js/fp/reduceRight' {
  import { reduceRight } from 'fns.js/fp'
  export default reduceRight
}

declare module 'fns.js/fp/reverse' {
  import { reverse } from 'fns.js/fp'
  export default reverse
}

declare module 'fns.js/fp/takeRight' {
  import { takeRight } from 'fns.js/fp'
  export default takeRight
}

declare module 'fns.js/fp/isSymbol' {
  import { isSymbol } from 'fns.js/fp'
  export default isSymbol
}

declare module 'fns.js/fp/toFinite' {
  import { toFinite } from 'fns.js/fp'
  export default toFinite
}

declare module 'fns.js/fp/toInteger' {
  import { toInteger } from 'fns.js/fp'
  export default toInteger
}

declare module 'fns.js/fp/toNumber' {
  import { toNumber } from 'fns.js/fp'
  export default toNumber
}

declare module 'fns.js/fp/isArrayLike' {
  import { isArrayLike } from 'fns.js/fp'
  export default isArrayLike
}

declare module 'fns.js/fp/castArray/index' {
  import { castArray } from 'fns.js/fp'
  export default castArray
}

declare module 'fns.js/fp/fromArray/index' {
  import { fromArray } from 'fns.js/fp'
  export default fromArray
}

declare module 'fns.js/fp/isArray/index' {
  import { isArray } from 'fns.js/fp'
  export default isArray
}

declare module 'fns.js/fp/isBoolean/index' {
  import { isBoolean } from 'fns.js/fp'
  export default isBoolean
}

declare module 'fns.js/fp/isDate/index' {
  import { isDate } from 'fns.js/fp'
  export default isDate
}

declare module 'fns.js/fp/isError/index' {
  import { isError } from 'fns.js/fp'
  export default isError
}

declare module 'fns.js/fp/isFunction/index' {
  import { isFunction } from 'fns.js/fp'
  export default isFunction
}

declare module 'fns.js/fp/isLength/index' {
  import { isLength } from 'fns.js/fp'
  export default isLength
}

declare module 'fns.js/fp/isNull/index' {
  import { isNull } from 'fns.js/fp'
  export default isNull
}

declare module 'fns.js/fp/isNumber/index' {
  import { isNumber } from 'fns.js/fp'
  export default isNumber
}

declare module 'fns.js/fp/isObject/index' {
  import { isObject } from 'fns.js/fp'
  export default isObject
}

declare module 'fns.js/fp/isObjectLike/index' {
  import { isObjectLike } from 'fns.js/fp'
  export default isObjectLike
}

declare module 'fns.js/fp/isPlainObject/index' {
  import { isPlainObject } from 'fns.js/fp'
  export default isPlainObject
}

declare module 'fns.js/fp/isRegExp/index' {
  import { isRegExp } from 'fns.js/fp'
  export default isRegExp
}

declare module 'fns.js/fp/isString/index' {
  import { isString } from 'fns.js/fp'
  export default isString
}

declare module 'fns.js/fp/chunk/index' {
  import { chunk } from 'fns.js/fp'
  export default chunk
}

declare module 'fns.js/fp/compact/index' {
  import { compact } from 'fns.js/fp'
  export default compact
}

declare module 'fns.js/fp/filter/index' {
  import { filter } from 'fns.js/fp'
  export default filter
}

declare module 'fns.js/fp/indexOf/index' {
  import { indexOf } from 'fns.js/fp'
  export default indexOf
}

declare module 'fns.js/fp/last/index' {
  import { last } from 'fns.js/fp'
  export default last
}

declare module 'fns.js/fp/map/index' {
  import { map } from 'fns.js/fp'
  export default map
}

declare module 'fns.js/fp/max/index' {
  import { max } from 'fns.js/fp'
  export default max
}

declare module 'fns.js/fp/min/index' {
  import { min } from 'fns.js/fp'
  export default min
}

declare module 'fns.js/fp/pull/index' {
  import { pull } from 'fns.js/fp'
  export default pull
}

declare module 'fns.js/fp/reduce/index' {
  import { reduce } from 'fns.js/fp'
  export default reduce
}

declare module 'fns.js/fp/reduceRight/index' {
  import { reduceRight } from 'fns.js/fp'
  export default reduceRight
}

declare module 'fns.js/fp/reverse/index' {
  import { reverse } from 'fns.js/fp'
  export default reverse
}

declare module 'fns.js/fp/takeRight/index' {
  import { takeRight } from 'fns.js/fp'
  export default takeRight
}

declare module 'fns.js/fp/isSymbol/index' {
  import { isSymbol } from 'fns.js/fp'
  export default isSymbol
}

declare module 'fns.js/fp/toFinite/index' {
  import { toFinite } from 'fns.js/fp'
  export default toFinite
}

declare module 'fns.js/fp/toInteger/index' {
  import { toInteger } from 'fns.js/fp'
  export default toInteger
}

declare module 'fns.js/fp/toNumber/index' {
  import { toNumber } from 'fns.js/fp'
  export default toNumber
}

declare module 'fns.js/fp/isArrayLike/index' {
  import { isArrayLike } from 'fns.js/fp'
  export default isArrayLike
}

declare module 'fns.js/fp/castArray/index.js' {
  import { castArray } from 'fns.js/fp'
  export default castArray
}

declare module 'fns.js/fp/fromArray/index.js' {
  import { fromArray } from 'fns.js/fp'
  export default fromArray
}

declare module 'fns.js/fp/isArray/index.js' {
  import { isArray } from 'fns.js/fp'
  export default isArray
}

declare module 'fns.js/fp/isBoolean/index.js' {
  import { isBoolean } from 'fns.js/fp'
  export default isBoolean
}

declare module 'fns.js/fp/isDate/index.js' {
  import { isDate } from 'fns.js/fp'
  export default isDate
}

declare module 'fns.js/fp/isError/index.js' {
  import { isError } from 'fns.js/fp'
  export default isError
}

declare module 'fns.js/fp/isFunction/index.js' {
  import { isFunction } from 'fns.js/fp'
  export default isFunction
}

declare module 'fns.js/fp/isLength/index.js' {
  import { isLength } from 'fns.js/fp'
  export default isLength
}

declare module 'fns.js/fp/isNull/index.js' {
  import { isNull } from 'fns.js/fp'
  export default isNull
}

declare module 'fns.js/fp/isNumber/index.js' {
  import { isNumber } from 'fns.js/fp'
  export default isNumber
}

declare module 'fns.js/fp/isObject/index.js' {
  import { isObject } from 'fns.js/fp'
  export default isObject
}

declare module 'fns.js/fp/isObjectLike/index.js' {
  import { isObjectLike } from 'fns.js/fp'
  export default isObjectLike
}

declare module 'fns.js/fp/isPlainObject/index.js' {
  import { isPlainObject } from 'fns.js/fp'
  export default isPlainObject
}

declare module 'fns.js/fp/isRegExp/index.js' {
  import { isRegExp } from 'fns.js/fp'
  export default isRegExp
}

declare module 'fns.js/fp/isString/index.js' {
  import { isString } from 'fns.js/fp'
  export default isString
}

declare module 'fns.js/fp/chunk/index.js' {
  import { chunk } from 'fns.js/fp'
  export default chunk
}

declare module 'fns.js/fp/compact/index.js' {
  import { compact } from 'fns.js/fp'
  export default compact
}

declare module 'fns.js/fp/filter/index.js' {
  import { filter } from 'fns.js/fp'
  export default filter
}

declare module 'fns.js/fp/indexOf/index.js' {
  import { indexOf } from 'fns.js/fp'
  export default indexOf
}

declare module 'fns.js/fp/last/index.js' {
  import { last } from 'fns.js/fp'
  export default last
}

declare module 'fns.js/fp/map/index.js' {
  import { map } from 'fns.js/fp'
  export default map
}

declare module 'fns.js/fp/max/index.js' {
  import { max } from 'fns.js/fp'
  export default max
}

declare module 'fns.js/fp/min/index.js' {
  import { min } from 'fns.js/fp'
  export default min
}

declare module 'fns.js/fp/pull/index.js' {
  import { pull } from 'fns.js/fp'
  export default pull
}

declare module 'fns.js/fp/reduce/index.js' {
  import { reduce } from 'fns.js/fp'
  export default reduce
}

declare module 'fns.js/fp/reduceRight/index.js' {
  import { reduceRight } from 'fns.js/fp'
  export default reduceRight
}

declare module 'fns.js/fp/reverse/index.js' {
  import { reverse } from 'fns.js/fp'
  export default reverse
}

declare module 'fns.js/fp/takeRight/index.js' {
  import { takeRight } from 'fns.js/fp'
  export default takeRight
}

declare module 'fns.js/fp/isSymbol/index.js' {
  import { isSymbol } from 'fns.js/fp'
  export default isSymbol
}

declare module 'fns.js/fp/toFinite/index.js' {
  import { toFinite } from 'fns.js/fp'
  export default toFinite
}

declare module 'fns.js/fp/toInteger/index.js' {
  import { toInteger } from 'fns.js/fp'
  export default toInteger
}

declare module 'fns.js/fp/toNumber/index.js' {
  import { toNumber } from 'fns.js/fp'
  export default toNumber
}

declare module 'fns.js/fp/isArrayLike/index.js' {
  import { isArrayLike } from 'fns.js/fp'
  export default isArrayLike
}

// ECMAScript Module Functions

declare module 'fns.js/esm' {
  function castArray(value: any): Array<any>
  namespace castArray {}

  function fromArray(arrayLike: any, mapFn: any): Array<any>
  namespace fromArray {}

  function isArray(value: any): boolean
  namespace isArray {}

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

  function chunk(array: Array<any>, size: number): any
  namespace chunk {}

  function compact(array: Array<any>): any
  namespace compact {}

  function filter(
    array: Array<any>,
    callback: (...args: Array<any>) => any
  ): Array<any>
  namespace filter {}

  function indexOf(array: any, searchElement: any, fromIndex: number): number
  namespace indexOf {}

  function last(array: any): boolean
  namespace last {}

  function map(
    array: Array<any>,
    callback: (...args: Array<any>) => any
  ): Array<any>
  namespace map {}

  function max(array: Array<any>): any
  namespace max {}

  function min(array: Array<any>): any
  namespace min {}

  function pull(array: any): boolean
  namespace pull {}

  function reduce(
    array: Array<any>,
    reducer: (...args: Array<any>) => any,
    initialValue: any
  ): any
  namespace reduce {}

  function reduceRight(
    array: Array<any>,
    reducer: (...args: Array<any>) => any,
    initialValue: any
  ): any
  namespace reduceRight {}

  function reverse(array: any): boolean
  namespace reverse {}

  function takeRight(array: Array<any>, n?: number): Array<any>
  namespace takeRight {}

  function isSymbol(value: any): boolean
  namespace isSymbol {}

  function toFinite(value: any): number
  namespace toFinite {}

  function toInteger(value: any): number
  namespace toInteger {}

  function toNumber(value: any): number
  namespace toNumber {}

  function isArrayLike(value: any): boolean
  namespace isArrayLike {}

  const MAX_SAFE_INTEGER: number

  const NAN: number

  const reTrim: object

  const reIsBadHex: object

  const reIsBinary: object

  const reIsOctal: object
}

declare module 'fns.js/esm/castArray' {
  import { castArray } from 'fns.js/esm'
  export default castArray
}

declare module 'fns.js/esm/fromArray' {
  import { fromArray } from 'fns.js/esm'
  export default fromArray
}

declare module 'fns.js/esm/isArray' {
  import { isArray } from 'fns.js/esm'
  export default isArray
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

declare module 'fns.js/esm/chunk' {
  import { chunk } from 'fns.js/esm'
  export default chunk
}

declare module 'fns.js/esm/compact' {
  import { compact } from 'fns.js/esm'
  export default compact
}

declare module 'fns.js/esm/filter' {
  import { filter } from 'fns.js/esm'
  export default filter
}

declare module 'fns.js/esm/indexOf' {
  import { indexOf } from 'fns.js/esm'
  export default indexOf
}

declare module 'fns.js/esm/last' {
  import { last } from 'fns.js/esm'
  export default last
}

declare module 'fns.js/esm/map' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/max' {
  import { max } from 'fns.js/esm'
  export default max
}

declare module 'fns.js/esm/min' {
  import { min } from 'fns.js/esm'
  export default min
}

declare module 'fns.js/esm/pull' {
  import { pull } from 'fns.js/esm'
  export default pull
}

declare module 'fns.js/esm/reduce' {
  import { reduce } from 'fns.js/esm'
  export default reduce
}

declare module 'fns.js/esm/reduceRight' {
  import { reduceRight } from 'fns.js/esm'
  export default reduceRight
}

declare module 'fns.js/esm/reverse' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/takeRight' {
  import { takeRight } from 'fns.js/esm'
  export default takeRight
}

declare module 'fns.js/esm/isSymbol' {
  import { isSymbol } from 'fns.js/esm'
  export default isSymbol
}

declare module 'fns.js/esm/toFinite' {
  import { toFinite } from 'fns.js/esm'
  export default toFinite
}

declare module 'fns.js/esm/toInteger' {
  import { toInteger } from 'fns.js/esm'
  export default toInteger
}

declare module 'fns.js/esm/toNumber' {
  import { toNumber } from 'fns.js/esm'
  export default toNumber
}

declare module 'fns.js/esm/isArrayLike' {
  import { isArrayLike } from 'fns.js/esm'
  export default isArrayLike
}

declare module 'fns.js/esm/castArray/index' {
  import { castArray } from 'fns.js/esm'
  export default castArray
}

declare module 'fns.js/esm/fromArray/index' {
  import { fromArray } from 'fns.js/esm'
  export default fromArray
}

declare module 'fns.js/esm/isArray/index' {
  import { isArray } from 'fns.js/esm'
  export default isArray
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

declare module 'fns.js/esm/chunk/index' {
  import { chunk } from 'fns.js/esm'
  export default chunk
}

declare module 'fns.js/esm/compact/index' {
  import { compact } from 'fns.js/esm'
  export default compact
}

declare module 'fns.js/esm/filter/index' {
  import { filter } from 'fns.js/esm'
  export default filter
}

declare module 'fns.js/esm/indexOf/index' {
  import { indexOf } from 'fns.js/esm'
  export default indexOf
}

declare module 'fns.js/esm/last/index' {
  import { last } from 'fns.js/esm'
  export default last
}

declare module 'fns.js/esm/map/index' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/max/index' {
  import { max } from 'fns.js/esm'
  export default max
}

declare module 'fns.js/esm/min/index' {
  import { min } from 'fns.js/esm'
  export default min
}

declare module 'fns.js/esm/pull/index' {
  import { pull } from 'fns.js/esm'
  export default pull
}

declare module 'fns.js/esm/reduce/index' {
  import { reduce } from 'fns.js/esm'
  export default reduce
}

declare module 'fns.js/esm/reduceRight/index' {
  import { reduceRight } from 'fns.js/esm'
  export default reduceRight
}

declare module 'fns.js/esm/reverse/index' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/takeRight/index' {
  import { takeRight } from 'fns.js/esm'
  export default takeRight
}

declare module 'fns.js/esm/isSymbol/index' {
  import { isSymbol } from 'fns.js/esm'
  export default isSymbol
}

declare module 'fns.js/esm/toFinite/index' {
  import { toFinite } from 'fns.js/esm'
  export default toFinite
}

declare module 'fns.js/esm/toInteger/index' {
  import { toInteger } from 'fns.js/esm'
  export default toInteger
}

declare module 'fns.js/esm/toNumber/index' {
  import { toNumber } from 'fns.js/esm'
  export default toNumber
}

declare module 'fns.js/esm/isArrayLike/index' {
  import { isArrayLike } from 'fns.js/esm'
  export default isArrayLike
}

declare module 'fns.js/esm/castArray/index.js' {
  import { castArray } from 'fns.js/esm'
  export default castArray
}

declare module 'fns.js/esm/fromArray/index.js' {
  import { fromArray } from 'fns.js/esm'
  export default fromArray
}

declare module 'fns.js/esm/isArray/index.js' {
  import { isArray } from 'fns.js/esm'
  export default isArray
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

declare module 'fns.js/esm/chunk/index.js' {
  import { chunk } from 'fns.js/esm'
  export default chunk
}

declare module 'fns.js/esm/compact/index.js' {
  import { compact } from 'fns.js/esm'
  export default compact
}

declare module 'fns.js/esm/filter/index.js' {
  import { filter } from 'fns.js/esm'
  export default filter
}

declare module 'fns.js/esm/indexOf/index.js' {
  import { indexOf } from 'fns.js/esm'
  export default indexOf
}

declare module 'fns.js/esm/last/index.js' {
  import { last } from 'fns.js/esm'
  export default last
}

declare module 'fns.js/esm/map/index.js' {
  import { map } from 'fns.js/esm'
  export default map
}

declare module 'fns.js/esm/max/index.js' {
  import { max } from 'fns.js/esm'
  export default max
}

declare module 'fns.js/esm/min/index.js' {
  import { min } from 'fns.js/esm'
  export default min
}

declare module 'fns.js/esm/pull/index.js' {
  import { pull } from 'fns.js/esm'
  export default pull
}

declare module 'fns.js/esm/reduce/index.js' {
  import { reduce } from 'fns.js/esm'
  export default reduce
}

declare module 'fns.js/esm/reduceRight/index.js' {
  import { reduceRight } from 'fns.js/esm'
  export default reduceRight
}

declare module 'fns.js/esm/reverse/index.js' {
  import { reverse } from 'fns.js/esm'
  export default reverse
}

declare module 'fns.js/esm/takeRight/index.js' {
  import { takeRight } from 'fns.js/esm'
  export default takeRight
}

declare module 'fns.js/esm/isSymbol/index.js' {
  import { isSymbol } from 'fns.js/esm'
  export default isSymbol
}

declare module 'fns.js/esm/toFinite/index.js' {
  import { toFinite } from 'fns.js/esm'
  export default toFinite
}

declare module 'fns.js/esm/toInteger/index.js' {
  import { toInteger } from 'fns.js/esm'
  export default toInteger
}

declare module 'fns.js/esm/toNumber/index.js' {
  import { toNumber } from 'fns.js/esm'
  export default toNumber
}

declare module 'fns.js/esm/isArrayLike/index.js' {
  import { isArrayLike } from 'fns.js/esm'
  export default isArrayLike
}

// ECMAScript Module FP Functions

declare module 'fns.js/esm/fp' {
  const castArray: CurriedFn1<any, Array<any>>
  namespace castArray {}

  const fromArray: CurriedFn2<any, any, Array<any>>
  namespace fromArray {}

  const isArray: CurriedFn1<any, boolean>
  namespace isArray {}

  const isBoolean: CurriedFn1<any, boolean>
  namespace isBoolean {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isError: CurriedFn1<any, boolean>
  namespace isError {}

  const isFunction: CurriedFn1<any, boolean>
  namespace isFunction {}

  const isLength: CurriedFn1<any, boolean>
  namespace isLength {}

  const isNull: CurriedFn1<any, boolean>
  namespace isNull {}

  const isNumber: CurriedFn1<any, boolean>
  namespace isNumber {}

  const isObject: CurriedFn1<any, boolean>
  namespace isObject {}

  const isObjectLike: CurriedFn1<any, boolean>
  namespace isObjectLike {}

  const isPlainObject: CurriedFn1<any, boolean>
  namespace isPlainObject {}

  const isRegExp: CurriedFn1<any, boolean>
  namespace isRegExp {}

  const isString: CurriedFn1<any, boolean>
  namespace isString {}

  const chunk: CurriedFn2<number, Array<any>, any>
  namespace chunk {}

  const compact: CurriedFn1<Array<any>, any>
  namespace compact {}

  const filter: CurriedFn2<(...args: Array<any>) => any, Array<any>, Array<any>>
  namespace filter {}

  const indexOf: CurriedFn3<number, any, any, number>
  namespace indexOf {}

  const last: CurriedFn1<any, boolean>
  namespace last {}

  const map: CurriedFn2<(...args: Array<any>) => any, Array<any>, Array<any>>
  namespace map {}

  const max: CurriedFn1<Array<any>, any>
  namespace max {}

  const min: CurriedFn1<Array<any>, any>
  namespace min {}

  const pull: CurriedFn1<any, boolean>
  namespace pull {}

  const reduce: CurriedFn3<any, (...args: Array<any>) => any, Array<any>, any>
  namespace reduce {}

  const reduceRight: CurriedFn3<
    any,
    (...args: Array<any>) => any,
    Array<any>,
    any
  >
  namespace reduceRight {}

  const reverse: CurriedFn1<any, boolean>
  namespace reverse {}

  const takeRight: CurriedFn2<number, Array<any>, Array<any>>
  namespace takeRight {}

  const isSymbol: CurriedFn1<any, boolean>
  namespace isSymbol {}

  const toFinite: CurriedFn1<any, number>
  namespace toFinite {}

  const toInteger: CurriedFn1<any, number>
  namespace toInteger {}

  const toNumber: CurriedFn1<any, number>
  namespace toNumber {}

  const isArrayLike: CurriedFn1<any, boolean>
  namespace isArrayLike {}

  const MAX_SAFE_INTEGER: number

  const NAN: number

  const reTrim: object

  const reIsBadHex: object

  const reIsBinary: object

  const reIsOctal: object
}

declare module 'fns.js/esm/fp/castArray' {
  import { castArray } from 'fns.js/esm/fp'
  export default castArray
}

declare module 'fns.js/esm/fp/fromArray' {
  import { fromArray } from 'fns.js/esm/fp'
  export default fromArray
}

declare module 'fns.js/esm/fp/isArray' {
  import { isArray } from 'fns.js/esm/fp'
  export default isArray
}

declare module 'fns.js/esm/fp/isBoolean' {
  import { isBoolean } from 'fns.js/esm/fp'
  export default isBoolean
}

declare module 'fns.js/esm/fp/isDate' {
  import { isDate } from 'fns.js/esm/fp'
  export default isDate
}

declare module 'fns.js/esm/fp/isError' {
  import { isError } from 'fns.js/esm/fp'
  export default isError
}

declare module 'fns.js/esm/fp/isFunction' {
  import { isFunction } from 'fns.js/esm/fp'
  export default isFunction
}

declare module 'fns.js/esm/fp/isLength' {
  import { isLength } from 'fns.js/esm/fp'
  export default isLength
}

declare module 'fns.js/esm/fp/isNull' {
  import { isNull } from 'fns.js/esm/fp'
  export default isNull
}

declare module 'fns.js/esm/fp/isNumber' {
  import { isNumber } from 'fns.js/esm/fp'
  export default isNumber
}

declare module 'fns.js/esm/fp/isObject' {
  import { isObject } from 'fns.js/esm/fp'
  export default isObject
}

declare module 'fns.js/esm/fp/isObjectLike' {
  import { isObjectLike } from 'fns.js/esm/fp'
  export default isObjectLike
}

declare module 'fns.js/esm/fp/isPlainObject' {
  import { isPlainObject } from 'fns.js/esm/fp'
  export default isPlainObject
}

declare module 'fns.js/esm/fp/isRegExp' {
  import { isRegExp } from 'fns.js/esm/fp'
  export default isRegExp
}

declare module 'fns.js/esm/fp/isString' {
  import { isString } from 'fns.js/esm/fp'
  export default isString
}

declare module 'fns.js/esm/fp/chunk' {
  import { chunk } from 'fns.js/esm/fp'
  export default chunk
}

declare module 'fns.js/esm/fp/compact' {
  import { compact } from 'fns.js/esm/fp'
  export default compact
}

declare module 'fns.js/esm/fp/filter' {
  import { filter } from 'fns.js/esm/fp'
  export default filter
}

declare module 'fns.js/esm/fp/indexOf' {
  import { indexOf } from 'fns.js/esm/fp'
  export default indexOf
}

declare module 'fns.js/esm/fp/last' {
  import { last } from 'fns.js/esm/fp'
  export default last
}

declare module 'fns.js/esm/fp/map' {
  import { map } from 'fns.js/esm/fp'
  export default map
}

declare module 'fns.js/esm/fp/max' {
  import { max } from 'fns.js/esm/fp'
  export default max
}

declare module 'fns.js/esm/fp/min' {
  import { min } from 'fns.js/esm/fp'
  export default min
}

declare module 'fns.js/esm/fp/pull' {
  import { pull } from 'fns.js/esm/fp'
  export default pull
}

declare module 'fns.js/esm/fp/reduce' {
  import { reduce } from 'fns.js/esm/fp'
  export default reduce
}

declare module 'fns.js/esm/fp/reduceRight' {
  import { reduceRight } from 'fns.js/esm/fp'
  export default reduceRight
}

declare module 'fns.js/esm/fp/reverse' {
  import { reverse } from 'fns.js/esm/fp'
  export default reverse
}

declare module 'fns.js/esm/fp/takeRight' {
  import { takeRight } from 'fns.js/esm/fp'
  export default takeRight
}

declare module 'fns.js/esm/fp/isSymbol' {
  import { isSymbol } from 'fns.js/esm/fp'
  export default isSymbol
}

declare module 'fns.js/esm/fp/toFinite' {
  import { toFinite } from 'fns.js/esm/fp'
  export default toFinite
}

declare module 'fns.js/esm/fp/toInteger' {
  import { toInteger } from 'fns.js/esm/fp'
  export default toInteger
}

declare module 'fns.js/esm/fp/toNumber' {
  import { toNumber } from 'fns.js/esm/fp'
  export default toNumber
}

declare module 'fns.js/esm/fp/isArrayLike' {
  import { isArrayLike } from 'fns.js/esm/fp'
  export default isArrayLike
}

declare module 'fns.js/esm/fp/castArray/index' {
  import { castArray } from 'fns.js/esm/fp'
  export default castArray
}

declare module 'fns.js/esm/fp/fromArray/index' {
  import { fromArray } from 'fns.js/esm/fp'
  export default fromArray
}

declare module 'fns.js/esm/fp/isArray/index' {
  import { isArray } from 'fns.js/esm/fp'
  export default isArray
}

declare module 'fns.js/esm/fp/isBoolean/index' {
  import { isBoolean } from 'fns.js/esm/fp'
  export default isBoolean
}

declare module 'fns.js/esm/fp/isDate/index' {
  import { isDate } from 'fns.js/esm/fp'
  export default isDate
}

declare module 'fns.js/esm/fp/isError/index' {
  import { isError } from 'fns.js/esm/fp'
  export default isError
}

declare module 'fns.js/esm/fp/isFunction/index' {
  import { isFunction } from 'fns.js/esm/fp'
  export default isFunction
}

declare module 'fns.js/esm/fp/isLength/index' {
  import { isLength } from 'fns.js/esm/fp'
  export default isLength
}

declare module 'fns.js/esm/fp/isNull/index' {
  import { isNull } from 'fns.js/esm/fp'
  export default isNull
}

declare module 'fns.js/esm/fp/isNumber/index' {
  import { isNumber } from 'fns.js/esm/fp'
  export default isNumber
}

declare module 'fns.js/esm/fp/isObject/index' {
  import { isObject } from 'fns.js/esm/fp'
  export default isObject
}

declare module 'fns.js/esm/fp/isObjectLike/index' {
  import { isObjectLike } from 'fns.js/esm/fp'
  export default isObjectLike
}

declare module 'fns.js/esm/fp/isPlainObject/index' {
  import { isPlainObject } from 'fns.js/esm/fp'
  export default isPlainObject
}

declare module 'fns.js/esm/fp/isRegExp/index' {
  import { isRegExp } from 'fns.js/esm/fp'
  export default isRegExp
}

declare module 'fns.js/esm/fp/isString/index' {
  import { isString } from 'fns.js/esm/fp'
  export default isString
}

declare module 'fns.js/esm/fp/chunk/index' {
  import { chunk } from 'fns.js/esm/fp'
  export default chunk
}

declare module 'fns.js/esm/fp/compact/index' {
  import { compact } from 'fns.js/esm/fp'
  export default compact
}

declare module 'fns.js/esm/fp/filter/index' {
  import { filter } from 'fns.js/esm/fp'
  export default filter
}

declare module 'fns.js/esm/fp/indexOf/index' {
  import { indexOf } from 'fns.js/esm/fp'
  export default indexOf
}

declare module 'fns.js/esm/fp/last/index' {
  import { last } from 'fns.js/esm/fp'
  export default last
}

declare module 'fns.js/esm/fp/map/index' {
  import { map } from 'fns.js/esm/fp'
  export default map
}

declare module 'fns.js/esm/fp/max/index' {
  import { max } from 'fns.js/esm/fp'
  export default max
}

declare module 'fns.js/esm/fp/min/index' {
  import { min } from 'fns.js/esm/fp'
  export default min
}

declare module 'fns.js/esm/fp/pull/index' {
  import { pull } from 'fns.js/esm/fp'
  export default pull
}

declare module 'fns.js/esm/fp/reduce/index' {
  import { reduce } from 'fns.js/esm/fp'
  export default reduce
}

declare module 'fns.js/esm/fp/reduceRight/index' {
  import { reduceRight } from 'fns.js/esm/fp'
  export default reduceRight
}

declare module 'fns.js/esm/fp/reverse/index' {
  import { reverse } from 'fns.js/esm/fp'
  export default reverse
}

declare module 'fns.js/esm/fp/takeRight/index' {
  import { takeRight } from 'fns.js/esm/fp'
  export default takeRight
}

declare module 'fns.js/esm/fp/isSymbol/index' {
  import { isSymbol } from 'fns.js/esm/fp'
  export default isSymbol
}

declare module 'fns.js/esm/fp/toFinite/index' {
  import { toFinite } from 'fns.js/esm/fp'
  export default toFinite
}

declare module 'fns.js/esm/fp/toInteger/index' {
  import { toInteger } from 'fns.js/esm/fp'
  export default toInteger
}

declare module 'fns.js/esm/fp/toNumber/index' {
  import { toNumber } from 'fns.js/esm/fp'
  export default toNumber
}

declare module 'fns.js/esm/fp/isArrayLike/index' {
  import { isArrayLike } from 'fns.js/esm/fp'
  export default isArrayLike
}

declare module 'fns.js/esm/fp/castArray/index.js' {
  import { castArray } from 'fns.js/esm/fp'
  export default castArray
}

declare module 'fns.js/esm/fp/fromArray/index.js' {
  import { fromArray } from 'fns.js/esm/fp'
  export default fromArray
}

declare module 'fns.js/esm/fp/isArray/index.js' {
  import { isArray } from 'fns.js/esm/fp'
  export default isArray
}

declare module 'fns.js/esm/fp/isBoolean/index.js' {
  import { isBoolean } from 'fns.js/esm/fp'
  export default isBoolean
}

declare module 'fns.js/esm/fp/isDate/index.js' {
  import { isDate } from 'fns.js/esm/fp'
  export default isDate
}

declare module 'fns.js/esm/fp/isError/index.js' {
  import { isError } from 'fns.js/esm/fp'
  export default isError
}

declare module 'fns.js/esm/fp/isFunction/index.js' {
  import { isFunction } from 'fns.js/esm/fp'
  export default isFunction
}

declare module 'fns.js/esm/fp/isLength/index.js' {
  import { isLength } from 'fns.js/esm/fp'
  export default isLength
}

declare module 'fns.js/esm/fp/isNull/index.js' {
  import { isNull } from 'fns.js/esm/fp'
  export default isNull
}

declare module 'fns.js/esm/fp/isNumber/index.js' {
  import { isNumber } from 'fns.js/esm/fp'
  export default isNumber
}

declare module 'fns.js/esm/fp/isObject/index.js' {
  import { isObject } from 'fns.js/esm/fp'
  export default isObject
}

declare module 'fns.js/esm/fp/isObjectLike/index.js' {
  import { isObjectLike } from 'fns.js/esm/fp'
  export default isObjectLike
}

declare module 'fns.js/esm/fp/isPlainObject/index.js' {
  import { isPlainObject } from 'fns.js/esm/fp'
  export default isPlainObject
}

declare module 'fns.js/esm/fp/isRegExp/index.js' {
  import { isRegExp } from 'fns.js/esm/fp'
  export default isRegExp
}

declare module 'fns.js/esm/fp/isString/index.js' {
  import { isString } from 'fns.js/esm/fp'
  export default isString
}

declare module 'fns.js/esm/fp/chunk/index.js' {
  import { chunk } from 'fns.js/esm/fp'
  export default chunk
}

declare module 'fns.js/esm/fp/compact/index.js' {
  import { compact } from 'fns.js/esm/fp'
  export default compact
}

declare module 'fns.js/esm/fp/filter/index.js' {
  import { filter } from 'fns.js/esm/fp'
  export default filter
}

declare module 'fns.js/esm/fp/indexOf/index.js' {
  import { indexOf } from 'fns.js/esm/fp'
  export default indexOf
}

declare module 'fns.js/esm/fp/last/index.js' {
  import { last } from 'fns.js/esm/fp'
  export default last
}

declare module 'fns.js/esm/fp/map/index.js' {
  import { map } from 'fns.js/esm/fp'
  export default map
}

declare module 'fns.js/esm/fp/max/index.js' {
  import { max } from 'fns.js/esm/fp'
  export default max
}

declare module 'fns.js/esm/fp/min/index.js' {
  import { min } from 'fns.js/esm/fp'
  export default min
}

declare module 'fns.js/esm/fp/pull/index.js' {
  import { pull } from 'fns.js/esm/fp'
  export default pull
}

declare module 'fns.js/esm/fp/reduce/index.js' {
  import { reduce } from 'fns.js/esm/fp'
  export default reduce
}

declare module 'fns.js/esm/fp/reduceRight/index.js' {
  import { reduceRight } from 'fns.js/esm/fp'
  export default reduceRight
}

declare module 'fns.js/esm/fp/reverse/index.js' {
  import { reverse } from 'fns.js/esm/fp'
  export default reverse
}

declare module 'fns.js/esm/fp/takeRight/index.js' {
  import { takeRight } from 'fns.js/esm/fp'
  export default takeRight
}

declare module 'fns.js/esm/fp/isSymbol/index.js' {
  import { isSymbol } from 'fns.js/esm/fp'
  export default isSymbol
}

declare module 'fns.js/esm/fp/toFinite/index.js' {
  import { toFinite } from 'fns.js/esm/fp'
  export default toFinite
}

declare module 'fns.js/esm/fp/toInteger/index.js' {
  import { toInteger } from 'fns.js/esm/fp'
  export default toInteger
}

declare module 'fns.js/esm/fp/toNumber/index.js' {
  import { toNumber } from 'fns.js/esm/fp'
  export default toNumber
}

declare module 'fns.js/esm/fp/isArrayLike/index.js' {
  import { isArrayLike } from 'fns.js/esm/fp'
  export default isArrayLike
}

// fnsJS Global Interface

interface dateFns {
  castArray(value: any): Array<any>

  fromArray(arrayLike: any, mapFn: any): Array<any>

  isArray(value: any): boolean

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

  chunk(array: Array<any>, size: number): any

  compact(array: Array<any>): any

  filter(array: Array<any>, callback: (...args: Array<any>) => any): Array<any>

  indexOf(array: any, searchElement: any, fromIndex: number): number

  last(array: any): boolean

  map(array: Array<any>, callback: (...args: Array<any>) => any): Array<any>

  max(array: Array<any>): any

  min(array: Array<any>): any

  pull(array: any): boolean

  reduce(
    array: Array<any>,
    reducer: (...args: Array<any>) => any,
    initialValue: any
  ): any

  reduceRight(
    array: Array<any>,
    reducer: (...args: Array<any>) => any,
    initialValue: any
  ): any

  reverse(array: any): boolean

  takeRight(array: Array<any>, n?: number): Array<any>

  isSymbol(value: any): boolean

  toFinite(value: any): number

  toInteger(value: any): number

  toNumber(value: any): number

  isArrayLike(value: any): boolean

  MAX_SAFE_INTEGER: number

  NAN: number

  reTrim: object

  reIsBadHex: object

  reIsBinary: object

  reIsOctal: object
}
