// @flow
/* eslint-env mocha */

import assert from 'power-assert'
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
import isString from '.'

describe('isString', function() {
  it('should return `true` for `string` values', function() {
    assert.deepEqual(isString(string), true)
    assert.deepEqual(isString(Object(string)), true)
  })
  it('should return `false` for none `string` values', function() {
    assert.deepEqual(isString(number), false)
    assert.deepEqual(isString(boolean), false)
    assert.deepEqual(isString(object), false)
    assert.deepEqual(isString(array), false)
    assert.deepEqual(isString(null), false)
    assert.deepEqual(isString(regex), false)
    assert.deepEqual(isString(symbol), false)
    assert.deepEqual(isString(noop), false)
    assert.deepEqual(isString(date), false)
    assert.deepEqual(isString(error), false)
  })
})
