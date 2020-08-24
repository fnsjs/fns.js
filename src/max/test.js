// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import max from '.'

describe('max', function () {
  var array = [12, 15, 6, 13, 9]

  it('should return the largest value from a collection', function () {
    assert.deepEqual(max(array), 15)
  })

  it('should return `undefined` for empty collections', function () {
    assert.deepEqual(max([]), undefined)
  })

  it('should work with non-numeric collection values', function () {
    assert.deepEqual(max(['b', 'c', 'r', 'z']), 'z')
  })

  it('throws TypeError exception if passed Non-array argument', function () {
    assert.throws(max.bind({}), TypeError)
    assert.throws(max.bind(null), TypeError)
  })
})
