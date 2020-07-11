// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import get from '.'
import lodash from 'lodash'

suite('get', function() {
  benchmark('fns.js', function() {
    return get({ a: { b: { c: { d: { e: 1 } } } } }, 'a.b.c.d.e')
  })

  benchmark('lodash', function() {
    return lodash.get({ a: { b: { c: { d: { e: 1 } } } } }, 'a.b.c.d.e')
  })
})
