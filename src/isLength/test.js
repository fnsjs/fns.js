// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isLength from '.'
import {
  array,
  noop,
  symbol,
  regex,
  date,
  error,
  object,
  number,
  boolean,
  string
} from '../utils/testHelpers'

describe('isLength', function() {
  it('should return `true` for `boolean` values', function() {
    assert.deepEqual(isLength(number), true)
    assert.deepEqual(isLength(9007199254740991), true)
  })
  it('should return `false` for none `boolean` values', function() {
    assert.deepEqual(isLength(9007199254740991 + 1), false)
    assert.deepEqual(isLength(boolean), false)
    assert.deepEqual(isLength(string), false)
    assert.deepEqual(isLength(null), false)
    assert.deepEqual(isLength(array), false)
    assert.deepEqual(isLength(string), false)
    assert.deepEqual(isLength(object), false)
    assert.deepEqual(isLength(regex), false)
    assert.deepEqual(isLength(symbol), false)
    assert.deepEqual(isLength(noop), false)
    assert.deepEqual(isLength(date), false)
    assert.deepEqual(isLength(error), false)
  })
})
