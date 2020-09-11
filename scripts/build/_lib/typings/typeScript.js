const fs = require('fs')
const path = require('path')
const prettier = require('../prettier')

const { getParams, getType, getFPFnType } = require('./common')

const {
  addSeparator,
  formatBlock,
  formatTypeScriptFile,
} = require('./formatBlock')

/**
 * Return curried function interfaces for a specific FP function arity.
 * @param {Number} [arity=4]
 * @returns {String[arity]} an array of code blocks
 */
const getTypeScriptFPInterfaces = (arity = 4) =>
  [
    formatBlock`
      interface CurriedFn1<A, R> {
        (a: A): R
      }
    `,

    formatBlock`
      interface CurriedFn2<A, B, R> {
        (a: A): CurriedFn1<B, R>
        (a: A, b: B): R
      }
    `,

    formatBlock`
      interface CurriedFn3<A, B, C, R> {
        (a: A): CurriedFn2<B, C, R>
        (a: A, b: B): CurriedFn1<C, R>
        (a: A, b: B, c: C): R
      }
    `,

    formatBlock`
      interface CurriedFn4<A, B, C, D, R> {
        (a: A): CurriedFn3<B, C, D, R>
        (a: A, b: B): CurriedFn2<C, D, R>
        (a: A, b: B, c: C): CurriedFn1<D, R>
        (a: A, b: B, c: C, d: D): R
      }
    `,
  ].slice(0, arity)

function getTypeScriptTypeAlias(type) {
  const { title, properties } = type

  return formatBlock`
    type ${title} = ${getParams(properties)}
    type ${title}Aliased = ${title}
  `
}

function getExportedTypeScriptTypeAlias(type) {
  const { title } = type

  return formatBlock`
    export type ${title} = ${title}Aliased
  `
}

function getExportedTypeScriptTypeAliases(aliases) {
  return formatBlock`
    declare module 'fns.js' {
      ${addSeparator(aliases.map(getExportedTypeScriptTypeAlias), '\n')}
    }
  `
}

function getTypeScriptDateFnsModuleDefinition(
  submodule,
  fns,
  constantsDefinitions
) {
  const moduleName = `fns.js${submodule}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      ${addSeparator(
        fns.map(getTypeScriptFnDefinition).concat(constantsDefinitions),
        '\n'
      )}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptDateFnsFPModuleDefinition(
  submodule,
  fns,
  constantsDefinitions
) {
  const moduleName = `fns.js${submodule}/fp`

  const fnDefinitions = fns.map(getTypeScriptFPFnDefinition)

  const definition = formatBlock`
    declare module '${moduleName}' {
      ${addSeparator(fnDefinitions.concat(constantsDefinitions), '\n')}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptFnModuleDefinition(submodule, fnSuffix, fn) {
  const name = fn.content.name
  const moduleName = `fns.js${submodule}/${name}${fnSuffix}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${name}} from 'fns.js${submodule}'
      export default ${name}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptFnDefinition(fn) {
  const { title, args, content } = fn

  const params = getParams(args, { leftBorder: '(', rightBorder: ')' })
  const returns = getType(content.returns[0].type.names)

  return formatBlock`
    function ${title} ${params}: ${returns}
    namespace ${title} {}
  `
}

function getTypeScriptFPFnDefinition(fn) {
  const { title, args, content } = fn

  const type = getFPFnType(args, content.returns[0].type.names)

  return formatBlock`
    const ${title}: ${type}
    namespace ${title} {}
  `
}

function getTypeScriptFPFnModuleDefinition(submodule, fnSuffix, isDefault, fn) {
  const { title } = fn
  const moduleName = `fns.js${submodule}/fp/${title}${fnSuffix}`

  const definition = formatBlock`
    declare module '${moduleName}' {
      import {${title}} from 'fns.js${submodule}/fp'
      export default ${title}
    }
  `

  return {
    name: moduleName,
    definition,
  }
}

function getTypeScriptInterfaceDefinition(fn) {
  const { title, args, content } = fn
  const params = getParams(args, { leftBorder: '(', rightBorder: ')' })
  const returns = getType(content.returns[0].type.names)

  return `${title}${params}: ${returns}`
}

function generateTypescriptFnTyping(fn) {
  const typingFile = formatTypeScriptFile`
    import {${fn.title}} from 'fns.js'
    export default ${fn.title}
  `
  writeFile(`./src/${fn.title}/index.d.ts`, typingFile)
}

function generateTypescriptFPFnTyping(fn) {
  const typingFile = formatTypeScriptFile`
    import {${fn.title}} from 'fns.js/fp'
    export default ${fn.title}
  `
  writeFile(`./src/fp/${fn.title}/index.d.ts`, typingFile)
}

function generateTypeScriptTypings(fns, aliases, constants) {
  const nonFPFns = fns.filter((fn) => !fn.isFPFn)
  const fpFns = fns.filter((fn) => fn.isFPFn)
  const constantsDefinitions = constants.map(
    (c) => `const ${c.name}: ${c.type.names.join(' | ')}`
  )

  const moduleDefinitions = [
    getTypeScriptDateFnsModuleDefinition('', nonFPFns, constantsDefinitions),
  ]
    .concat(nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '')))
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index'))
    )
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '', '/index.js'))
    )
    .map((module) => module.definition)

  const fpModuleDefinitions = [
    getTypeScriptDateFnsFPModuleDefinition('', fpFns, constantsDefinitions),
  ]
    .concat(
      fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '', '', false))
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '', '/index', false)
      )
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '', '/index.js', false)
      )
    )
    .map((module) => module.definition)

  const esmModuleDefinitions = [
    getTypeScriptDateFnsModuleDefinition(
      '/esm',
      nonFPFns,
      constantsDefinitions
    ),
  ]
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', ''))
    )
    .concat(
      nonFPFns.map(getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index'))
    )
    .concat(
      nonFPFns.map(
        getTypeScriptFnModuleDefinition.bind(null, '/esm', '/index.js')
      )
    )
    .map((module) => module.definition)

  const esmFPModuleDefinitions = [
    getTypeScriptDateFnsFPModuleDefinition('/esm', fpFns, constantsDefinitions),
  ]
    .concat(
      fpFns.map(getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '', true))
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '/index', true)
      )
    )
    .concat(
      fpFns.map(
        getTypeScriptFPFnModuleDefinition.bind(null, '/esm', '/index.js', true)
      )
    )
    .map((module) => module.definition)

  const aliasDefinitions = aliases.map(getTypeScriptTypeAlias)

  const exportedAliasDefinitions = [getExportedTypeScriptTypeAliases(aliases)]

  const globalInterfaceDefinition = formatBlock`
    interface dateFns {
      ${addSeparator(
        nonFPFns
          .map(getTypeScriptInterfaceDefinition)
          .concat(
            constants.map((c) => `${c.name}: ${c.type.names.join(' | ')}`)
          ),
        '\n'
      )}
    }
  `

  const typingFile = formatTypeScriptFile`
    // FP Interfaces

    ${addSeparator(getTypeScriptFPInterfaces(), '\n')}

    // Type Aliases

    ${addSeparator(aliasDefinitions, '\n')}

    // Exported Type Aliases

    ${addSeparator(exportedAliasDefinitions, '\n')}

    // Regular Functions

    ${addSeparator(moduleDefinitions, '\n')}

    // FP Functions

    ${addSeparator(fpModuleDefinitions, '\n')}

    // ECMAScript Module Functions

    ${addSeparator(esmModuleDefinitions, '\n')}

    // ECMAScript Module FP Functions

    ${addSeparator(esmFPModuleDefinitions, '\n')}

    // fnsJS Global Interface

    ${globalInterfaceDefinition}
  `

  writeFile('typings.d.ts', typingFile)

  fns.forEach((fn) => {
    if (fn.isFPFn) {
      generateTypescriptFPFnTyping(fn)
    } else {
      generateTypescriptFnTyping(fn)
    }
  })
}

function writeFile(relativePath, content) {
  return fs.writeFileSync(
    path.resolve(process.cwd(), relativePath),
    prettier(content, 'typescript')
  )
}

module.exports = {
  generateTypeScriptTypings,
}
