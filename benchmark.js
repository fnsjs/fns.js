var testsContext = require.context('./src/indexOf/', true, /\/benchmark\.js$/)
testsContext.keys().forEach(testsContext)
