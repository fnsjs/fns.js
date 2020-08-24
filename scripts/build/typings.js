#!/usr/bin/env node

/**
 * @file
 * The script generates Flow and TypeScript typing files.
 *
 * It's a part of the build process.
 */

const path = require('path')
const getConstants = require('../_lib/getConstants')
const jsDocs = require(path.resolve(process.cwd(), 'tmp/docs.json'))

const { generateTypeScriptTypings } = require('./_lib/typings/typeScript')
const { generateFlowTypings } = require('./_lib/typings/flow')

const fns = Object.keys(jsDocs)
  .map((category) => jsDocs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .filter((doc) => doc.kind === 'function')

const constants = getConstants()

const aliases = jsDocs['Types']

generateTypeScriptTypings(fns, aliases, constants)
generateFlowTypings(fns, aliases, constants)
