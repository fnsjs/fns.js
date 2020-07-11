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
import get from '.'

describe('get', function() {
  it('get should get string keyed property values', function() {
    const object = { a: 1 }
    assert.strictEqual(get(object, 'a'), 1)
  })

  it('get should return the default value when `path` is empty', function() {
    assert.strictEqual(get({}, [], 'a'), 'a')
  })
})
