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
import isRegExp from '.'

describe('isRegExp', function() {
  it('should return `true` for `RegExp` values', function() {
    assert.deepEqual(isRegExp(regex), true)
  })
  it('should return `false` for none `RegExp` values', function() {
    assert.deepEqual(isRegExp(number), false)
    assert.deepEqual(isRegExp(array), false)
    assert.deepEqual(isRegExp(date), false)
    assert.deepEqual(isRegExp(error), false)
    assert.deepEqual(isRegExp(object), false)
    assert.deepEqual(isRegExp(noop), false)
    assert.deepEqual(isRegExp(args), false)
    assert.deepEqual(isRegExp(push), false)
    assert.deepEqual(isRegExp(defineProperty), false)
    assert.deepEqual(isRegExp(Object(number)), false)
    assert.deepEqual(isRegExp(Object(boolean)), false)
    assert.deepEqual(isRegExp(Object(string)), false)
  })
})
