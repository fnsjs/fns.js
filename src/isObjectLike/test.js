// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isObjectLike from '.'
import {
  array,
  regex,
  date,
  error,
  object,
  number,
  boolean,
  string,
  args
} from '../utils/testHelpers'

describe('isObjectLike', function() {
  it('should return `true` for `object-like` values', function() {
    assert.deepEqual(isObjectLike(args), true)
    assert.deepEqual(isObjectLike(array), true)
    assert.deepEqual(isObjectLike(date), true)
    assert.deepEqual(isObjectLike(error), true)
    assert.deepEqual(isObjectLike(object), true)
    assert.deepEqual(isObjectLike(regex), true)
    assert.deepEqual(isObjectLike(Object(number)), true)
    assert.deepEqual(isObjectLike(Object(boolean)), true)
    assert.deepEqual(isObjectLike(Object(string)), true)
  })
  it('should return `false` for none `object-like` values', function() {
    assert.deepEqual(isObjectLike(number), false)
  })
})
