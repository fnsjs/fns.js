#!/usr/bin/env zx
import glob from 'glob';

glob('src/**/benchmark.ts', {}, async function(er, files) {
  for (let i = 0; i < files.length; i++) {
    await $`ts-node -O '{\"module\":\"commonjs\"}' ${files[i]}`;
  }
});
