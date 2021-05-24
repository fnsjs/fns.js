const { readdirSync, writeFileSync } = require('fs');
const path = require('path');
const DONT_CHANGE_MESSAGE = `// This file is generated automatically by \`build:prepare\`. Please, don't change it.\n`;

const generateIndex = source => {
  const exports = readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(({ name }) => {
      if (!/^\./.test(name)) {
        return `export { default as ${name} } from './${name}';`;
      }
    })
    .filter(Boolean)
    .join('\n');
  writeFileSync(source + 'index.ts', DONT_CHANGE_MESSAGE + exports, 'utf-8');
};

generateIndex(path.join(__dirname, '../src/'));
