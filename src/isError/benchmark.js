// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isError from '.'
import lodash from 'lodash'

suite('isError', function() {
  benchmark('fns.js', function() {
    return isError(new Error())
  })

  benchmark('lodash', function() {
    return lodash.isError(new Error())
  })
})
