// @flow
/* eslint-env mocha */
/* global benchmark */

import reduceRight from '.'
import lodash from 'lodash'

suite('reduceRight', function () {
  benchmark('fns.js', function () {
    return reduceRight([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0)
  })

  benchmark('lodash', function () {
    return lodash.reduceRight([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0)
  })

  benchmark('native', function () {
    return [1, 2, 3, 4, 5, 6, 7, 8].reduceRight((acc, v) => acc + v, 0)
  })
})
