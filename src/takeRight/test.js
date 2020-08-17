// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import takeRight from '.'
import map from '../map'

describe('takeRight', function() {
  var array = [1, 2, 3]

  it('should take the last two elements', function() {
    assert.deepEqual(takeRight(array, 2), [2, 3])
  })

  it('should take the last element when the second argument is empty', function() {
    assert.deepEqual(takeRight(array), [3])
  })

  it('should return [] when array is empty', function() {
    assert.deepEqual(takeRight([], 2), [])
  })

  it('should return all elements when `n` >= `length`', function() {
    assert.deepEqual(takeRight(array, 10), array)
  })

  it('should work as an iteratee for methods like `map`', function() {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    assert.deepEqual(map(array, takeRight), [[1, 2, 3], [6], [8, 9]])
  })

  it('throws TypeError exception if passed Non-array like argument', function() {
    assert.throws(takeRight.bind({}), TypeError)
    assert.throws(takeRight.bind(null, 1), TypeError)
  })
})
