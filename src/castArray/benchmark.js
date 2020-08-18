// @flow
/* eslint-env mocha */
/* global benchmark */

import castArray from '.'
import lodash from 'lodash'

suite('castArray', function () {
  benchmark('fns.js', function () {
    return castArray({ a: 1 })
  })

  benchmark('lodash', function () {
    return lodash.castArray({ a: 1 })
  })
})
