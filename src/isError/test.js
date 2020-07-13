// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import {
  args,
  array,
  noop,
  symbol,
  regex,
  date,
  error,
  push,
  number,
  boolean,
  string,
  defineProperty,
  body
} from '../utils/testHelpers'
import isError from '.'

describe('isError', function() {
  it('should return `true` for `Error` values', function() {
    assert.deepEqual(isError(error), true)
  })

  it('should return `false` for none `object` values', function() {
    assert.deepEqual(isError(args), false)
    assert.deepEqual(isError(array), false)
    assert.deepEqual(isError(date), false)
    assert.deepEqual(isError(push), false)
    assert.deepEqual(isError(regex), false)
    assert.deepEqual(isError(noop), false)
    assert.deepEqual(isError(defineProperty), false)
    assert.deepEqual(isError(Object(number)), false)
    assert.deepEqual(isError(Object(boolean)), false)
    assert.deepEqual(isError(Object(string)), false)
    assert.deepEqual(isError(number), false)
    if (Symbol) {
      assert.strictEqual(isError(symbol), false)
    }
    if (document) {
      assert.strictEqual(isError(body), false)
    }
    if (Symbol) {
      assert.strictEqual(isError(Object(symbol)), false)
    }
  })
})
