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
  object,
  number,
  boolean,
  string,
  defineProperty,
  body
} from '../utils/testHelpers'
import isPlainObject from '.'

describe('isPlainObject', function() {
  it('should return `true` for `object` values', function() {
    assert.deepEqual(isPlainObject(object), true)
  })

  it('should return `false` for none `object` values', function() {
    assert.deepEqual(isPlainObject(args), false)
    assert.deepEqual(isPlainObject(array), false)
    assert.deepEqual(isPlainObject(date), false)
    assert.deepEqual(isPlainObject(error), false)
    assert.deepEqual(isPlainObject(push), false)
    assert.deepEqual(isPlainObject(regex), false)
    assert.deepEqual(isPlainObject(noop), false)
    assert.deepEqual(isPlainObject(defineProperty), false)
    assert.deepEqual(isPlainObject(Object(number)), false)
    assert.deepEqual(isPlainObject(Object(boolean)), false)
    assert.deepEqual(isPlainObject(Object(string)), false)
    assert.deepEqual(isPlainObject(number), false)
    if (Symbol) {
      assert.strictEqual(isPlainObject(symbol), false)
    }
    if (document) {
      assert.strictEqual(isPlainObject(body), false)
    }
    if (Symbol) {
      assert.strictEqual(isPlainObject(Object(symbol)), false)
    }
  })
})
