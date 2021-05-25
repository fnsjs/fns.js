#!/bin/sh

for f in src/**/benchmark.ts; do
  ts-node -O '{"module":"commonjs"}' $f;
done
