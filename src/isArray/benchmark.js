// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isArray from '.'
import lodash from 'lodash'
import underscore from 'underscore'

suite('isArray', function() {
  benchmark('fns.js', function() {
    return isArray(null)
  })

  benchmark('lodash', function() {
    return lodash.isArray(null)
  })

  benchmark('underscore', function() {
    return underscore.isArray(null)
  })
})
