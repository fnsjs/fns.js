import toArgs from './toArgs'

/** Used as a reference to the global object. */
const root = (typeof global === 'object' && global) || this

export const args = toArgs([1, 2, 3])
export const array = [1, 2, 3]
export const noop = function() {}
export const symbol = Symbol ? Symbol('a') : undefined
export const date = new Date()
export const error = new Error()
export const object = { a: 1 }
export const number = 12345
export const boolean = true
export const string = 'hello'
export const defineProperty = Object.defineProperty
export const regex = /a/
export const push = Array.prototype.push
export const body = root.document ? root.document.body : undefined
export const falseyArray = [null, undefined, false, 0, NaN, '']
