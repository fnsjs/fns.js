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
import isObject from '.'

describe('isObject', function() {
  it('should return `true` for `object` values', function() {
    assert.deepEqual(isObject(args), true)
    assert.deepEqual(isObject(array), true)
    assert.deepEqual(isObject(date), true)
    assert.deepEqual(isObject(error), true)
    assert.deepEqual(isObject(push), true)
    assert.deepEqual(isObject(object), true)
    assert.deepEqual(isObject(regex), true)
    assert.deepEqual(isObject(noop), true)
    assert.deepEqual(isObject(defineProperty), true)
    assert.deepEqual(isObject(Object(number)), true)
    assert.deepEqual(isObject(Object(boolean)), true)
    assert.deepEqual(isObject(Object(string)), true)

    if (document) {
      assert.strictEqual(isObject(body), true)
    }
    if (Symbol) {
      assert.strictEqual(isObject(Object(symbol)), true)
    }
  })
  it('should return `false` for none `object` values', function() {
    assert.deepEqual(isObject(number), false)
    if (Symbol) {
      assert.strictEqual(isObject(symbol), false)
    }
  })
})
