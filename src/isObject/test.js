// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isObject from '.'

describe('isObject', function() {
  it('should return `true` for `object` values', function() {
    assert.deepEqual(isObject({ a: 1 }), true)
  })
  it('should return `false` for none `object` values', function() {
    assert.deepEqual(isObject(1), false)
    assert.deepEqual(isObject(false), false)
    assert.deepEqual(isObject(''), false)
    assert.deepEqual(isObject([1, 2, 3]), false)
    assert.deepEqual(isObject(null), false)
    assert.deepEqual(isObject(/t/), false)
    assert.deepEqual(isObject(Symbol()), false)
    assert.deepEqual(isObject(() => {}), false)
    assert.deepEqual(isObject(new Date()), false)
    assert.deepEqual(isObject(new Error()), false)
  })
})
