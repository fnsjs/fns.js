// @flow
/* eslint-env mocha */
/* global benchmark */

import chunk from '.'
import lodash from 'lodash'

suite('chunk', function () {
  benchmark('fns.js', function () {
    return chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4)
  })

  benchmark('lodash', function () {
    return lodash.chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4)
  })
})
