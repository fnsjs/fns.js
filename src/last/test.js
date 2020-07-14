// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import last from '.'

describe('last', function() {
  var array = [1, 2, 3, 4]

  it('should return the last element', function() {
    assert.strictEqual(last(array), 4)
  })

  it('should return `undefined` when querying empty arrays', function() {
    var array = []
    array['-1'] = 1

    assert.strictEqual(last([]), undefined)
  })
})
