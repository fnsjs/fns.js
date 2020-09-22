// @flow
/* eslint-env mocha */
/* global benchmark */

import toFinite from '.'
import lodash from 'lodash'

suite('toFinite', function () {
  benchmark('fns.js', function () {
    return toFinite(Infinity)
  })

  benchmark('lodash', function () {
    return lodash.toFinite(Infinity)
  })
})
