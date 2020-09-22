// @flow
/* eslint-env mocha */
/* global benchmark */

import indexOf from '.'
import lodash from 'lodash'

suite('indexOf', function () {
  benchmark('fns.js', function () {
    return indexOf(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison')
  })

  benchmark('lodash', function () {
    return lodash.indexOf(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison')
  })
})
