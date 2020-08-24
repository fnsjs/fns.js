// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import min from '.'

describe('min', function () {
  var array = [12, 15, 6, 13, 9]

  it('should return the largest value from a collection', function () {
    assert.deepEqual(min(array), 6)
  })

  it('should return `undefined` for empty collections', function () {
    assert.deepEqual(min([]), undefined)
  })

  it('should work with non-numeric collection values', function () {
    assert.deepEqual(min(['b', 'c', 'r', 'z']), 'b')
  })

  it('throws TypeError exception if passed Non-array argument', function () {
    assert.throws(min.bind({}), TypeError)
    assert.throws(min.bind(null), TypeError)
  })
})
