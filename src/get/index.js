import isObject from '../isObject'

const disallowedKeys = ['__proto__', 'prototype', 'constructor']

const isValidPath = pathSegments =>
  !pathSegments.some(segment => disallowedKeys.includes(segment))

function getPathSegments(path) {
  const pathArray = path.split('.')
  const parts = []

  for (let i = 0; i < pathArray.length; i++) {
    let p = pathArray[i]

    while (p[p.length - 1] === '\\' && pathArray[i + 1] !== undefined) {
      p = p.slice(0, -1) + '.'
      p += pathArray[++i]
    }

    parts.push(p)
  }

  if (!isValidPath(parts)) {
    return []
  }

  return parts
}

/**
 * @name get
 * @category Object
 * @summary Gets the value at path of object.
 *
 * @description
 * Gets the value at path of object.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
export default function get(object, path, defaultValue) {
  if (!isObject(object) || typeof path !== 'string') {
    return defaultValue === undefined ? object : defaultValue
  }

  const pathArray = getPathSegments(path)
  if (pathArray.length === 0) {
    return
  }

  for (let i = 0; i < pathArray.length; i++) {
    if (!Object.prototype.propertyIsEnumerable.call(object, pathArray[i])) {
      return defaultValue
    }

    object = object[pathArray[i]]

    if (object === undefined || object === null) {
      // `object` is either `undefined` or `null` so we want to stop the loop, and
      // if this is not the last bit of the path, and
      // if it did't return `undefined`
      // it would return `null` if `object` is `null`
      // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
      if (i !== pathArray.length - 1) {
        return defaultValue
      }

      break
    }
  }

  return object
}
