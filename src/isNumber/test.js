// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isNumber from '.'
import {
  array,
  boolean,
  number,
  regex,
  string,
  symbol,
  noop,
  object,
  date,
  error
} from '../utils/testHelpers'

describe('isNumber', function() {
  it('should return `true` for `number` values', function() {
    assert.deepEqual(isNumber(number), true)
  })
  it('should return `false` for none `number` values', function() {
    assert.deepEqual(isNumber(array), false)
    assert.deepEqual(isNumber(boolean), false)
    assert.deepEqual(isNumber(string), false)
    assert.deepEqual(isNumber(null), false)
    assert.deepEqual(isNumber(undefined), false)
    assert.deepEqual(isNumber(object), false)
    assert.deepEqual(isNumber(regex), false)
    assert.deepEqual(isNumber(symbol), false)
    assert.deepEqual(isNumber(noop), false)
    assert.deepEqual(isNumber(date), false)
    assert.deepEqual(isNumber(error), false)
  })
})
