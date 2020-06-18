// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import {
  args,
  array,
  noop,
  regex,
  date,
  error,
  push,
  object,
  number,
  boolean,
  string,
  defineProperty
} from '../utils/testHelpers'
import isFunction from '.'

describe('isFunction', function() {
  it('should return `true` for `function` values', function() {
    assert.deepEqual(isFunction(noop), true)
    assert.deepEqual(isFunction(push), true)
    assert.deepEqual(isFunction(defineProperty), true)
  })
  it('should return `false` for none `function` values', function() {
    assert.deepEqual(isFunction(number), false)
    assert.deepEqual(isFunction(array), false)
    assert.deepEqual(isFunction(date), false)
    assert.deepEqual(isFunction(error), false)
    assert.deepEqual(isFunction(object), false)
    assert.deepEqual(isFunction(regex), false)
    assert.deepEqual(isFunction(args), false)
    assert.deepEqual(isFunction(Object(number)), false)
    assert.deepEqual(isFunction(Object(boolean)), false)
    assert.deepEqual(isFunction(Object(string)), false)
  })
})
