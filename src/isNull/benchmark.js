// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isNull from '.'
import lodash from 'lodash'

suite('isNull', function() {
  benchmark('fns.js', function() {
    return isNull(null)
  })

  benchmark('lodash', function() {
    return lodash.isNull(null)
  })
})
