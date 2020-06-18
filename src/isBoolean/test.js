// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isBoolean from '.'
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

describe('isBoolean', function() {
  it('should return `true` for `boolean` values', function() {
    assert.deepEqual(isBoolean(new Boolean(string)), true)
    assert.deepEqual(isBoolean(Object(boolean)), true)
    assert.deepEqual(isBoolean(boolean), true)
  })
  it('should return `false` for none `boolean` values', function() {
    assert.deepEqual(isBoolean(number), false)
    assert.deepEqual(isBoolean(null), false)
    assert.deepEqual(isBoolean(string), false)
    assert.deepEqual(isBoolean(array), false)
    assert.deepEqual(isBoolean(object), false)
    assert.deepEqual(isBoolean(regex), false)
    assert.deepEqual(isBoolean(symbol), false)
    assert.deepEqual(isBoolean(noop), false)
    assert.deepEqual(isBoolean(date), false)
    assert.deepEqual(isBoolean(error), false)
  })
})
