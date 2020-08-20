// @flow
/* eslint-env mocha */
/* global benchmark */

import reduce from '.'
import lodash from 'lodash'

suite('reducer', function () {
  benchmark('fns.js', function () {
    return reduce([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0)
  })

  benchmark('lodash', function () {
    return lodash.reduce([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0)
  })
})
