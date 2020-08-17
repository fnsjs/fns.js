// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import filter from '.'

describe('filter', function() {
  it('get should filter undefined items', function() {
    const array = [1, 2, undefined, 3, undefined]
    assert.deepStrictEqual(filter(array, Boolean), [1, 2, 3])
  })
})
