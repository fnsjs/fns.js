// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isNull from '.'
import lodash from 'lodash'
import underscore from 'underscore'

suite('isNull', function() {
  benchmark('fns.js', function() {
    return isNull(null)
  })

  benchmark('lodash', function() {
    return lodash.isNull(null)
  })

  benchmark('underscore', function() {
    return underscore.isNull(null)
  })
})
