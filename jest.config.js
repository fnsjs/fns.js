// jest.config.js
module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts','!src/**/benchmark.ts']
};
