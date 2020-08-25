// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import reduce from '.'

describe('reduce', function () {
  const array = [1, 2, 3]

  it("throws TypeError exception if reducer isn't provided", function () {
    assert.throws(reduce.bind(array), TypeError)
  })

  it('should reduce a list of items', function () {
    var result = reduce(
      array,
      function (last, item) {
        return last + item
      },
      2
    )
    assert.strictEqual(result, 8)
  })

  it("should use input[0] if initialValue isn't provided", function () {
    var result = reduce(array, function (last, item) {
      return last + item
    })
    assert.strictEqual(result, 6)
  })
})
