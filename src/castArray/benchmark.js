// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import castArray from '.'
import lodash from 'lodash'
import underscore from 'underscore'

suite('castArray', function() {
  benchmark('fns.js', function() {
    return castArray('hello')
  })

  benchmark('lodash', function() {
    return lodash.castArray('hello')
  })

  benchmark('underscore', function() {
    return underscore.toArray('hello')
  })
})