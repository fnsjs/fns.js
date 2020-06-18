// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isDate from '.'
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

describe('isDate', function() {
  it('should return `true` for `Date` values', function() {
    assert.deepEqual(isDate(date), true)
  })
  it('should return `false` for none `Date` values', function() {
    assert.deepEqual(isDate(number), false)
    assert.deepEqual(isDate(boolean), false)
    assert.deepEqual(isDate(string), false)
    assert.deepEqual(isDate(array), false)
    assert.deepEqual(isDate(object), false)
    assert.deepEqual(isDate(regex), false)
    assert.deepEqual(isDate(symbol), false)
    assert.deepEqual(isDate(noop), false)
    assert.deepEqual(isDate(error), false)
  })
})
