// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isNull from '.'

describe('isNull', function() {
  it('should return `true` for `null` values', function() {
    assert.deepEqual(isNull(null), true)
  })
  it('should return `false` for none `null` values', function() {
    assert.deepEqual(isNull(1), false)
    assert.deepEqual(isNull(false), false)
    assert.deepEqual(isNull(''), false)
    assert.deepEqual(isNull([]), false)
    assert.deepEqual(isNull({}), false)
    assert.deepEqual(isNull(/t/), false)
    assert.deepEqual(isNull(Symbol()), false)
    assert.deepEqual(isNull(() => {}), false)
    assert.deepEqual(isNull(new Date()), false)
    assert.deepEqual(isNull(new Error()), false)
  })
})
