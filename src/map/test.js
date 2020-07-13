// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import map from '.'

describe('map', function() {
  var array = [1, 2]

  it('should map values and apply function to a new array', function() {
    const expected = [2, 4]
    assert.deepStrictEqual(map(array, d => d * 2), expected)
  })
})
