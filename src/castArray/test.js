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
import castArray from '.'

describe('castArray', function() {
  console.log('[array]', [array])
  it('should return casted array', function() {
    assert.deepEqual(castArray(string), [string])
    assert.deepEqual(castArray(number), [number])
    assert.deepEqual(castArray(boolean), [boolean])
    assert.deepEqual(castArray(object), [object])
    assert.deepEqual(castArray(array), array)
    assert.deepEqual(castArray(null), [null])
    assert.deepEqual(castArray(regex), [regex])
    assert.deepEqual(castArray(symbol), [symbol])
    assert.deepEqual(castArray(noop), [noop])
    assert.deepEqual(castArray(date), [date])
    assert.deepEqual(castArray(error), [error])
  })
})
