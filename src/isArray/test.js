// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isArray from '.'

describe('isNull', function() {
  it('should return `true` for `array` values', function() {
    assert.deepEqual(isArray([1, 2, 3]), true)
  })
  it('should return `false` for none `array` values', function() {
    assert.deepEqual(isArray(1), false)
    assert.deepEqual(isArray(false), false)
    assert.deepEqual(isArray(''), false)
    assert.deepEqual(isArray(null), false)
    assert.deepEqual(isArray(undefined), false)
    assert.deepEqual(isArray({}), false)
    assert.deepEqual(isArray(/t/), false)
    assert.deepEqual(isArray(Symbol()), false)
    assert.deepEqual(isArray(() => {}), false)
    assert.deepEqual(isArray(new Date()), false)
    assert.deepEqual(isArray(new Error()), false)
  })
})
