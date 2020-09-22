// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import indexOf from '.'
import map from '../map'
import { falseyArray, stubZero } from '../utils/testHelpers'

describe('last', function () {
  var array = [1, 2, 3, 1, 2, 3]

  it('`_.indexOf` should return the index of the first matched value', function () {
    assert.strictEqual(indexOf(array, 3), 2)
  })

  it('`_.indexOf` should work with a positive `fromIndex`', function () {
    assert.strictEqual(indexOf(array, 1, 2), 3)
  })

  it('`_.indexOf` should work with a negative `fromIndex`', function () {
    assert.strictEqual(indexOf(array, 2, -3), 4)
  })

  it('`_.indexOf` should work with a negative `fromIndex` <= `-length`', function () {
    var values = [-6, -8, -Infinity],
      expected = map(values, stubZero)

    var actual = map(values, function (fromIndex) {
      return indexOf(array, 1, fromIndex)
    })

    assert.deepStrictEqual(actual, expected)
  })

  it('`_.indexOf` should treat falsey `fromIndex` values as `0`', function () {
    var expected = map(falseyArray, stubZero)

    var actual = map(falseyArray, function (fromIndex) {
      return indexOf(array, 1, fromIndex)
    })

    assert.deepStrictEqual(actual, expected)
  })

  it('`_.indexOf` should coerce `fromIndex` to an integer', function () {
    assert.strictEqual(indexOf(array, 2, 1.2), 1)
  })
})
