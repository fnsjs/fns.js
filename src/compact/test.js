// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import compact from '.'

describe('compact', function () {
  var array = [1, null, undefined, 2, false, 0, NaN, '', 3]

  it('should filter falsey values', function () {
    assert.deepEqual(compact(array), [1, 2, 3])
  })
})
