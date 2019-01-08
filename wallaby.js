module.exports = function () {
  return {
    files: [
      'src/**/*(\.test){0}.tsx'
    ],
    testFramework: 'jest',
    env: {
      type: 'node',
      runner: '/Users/pmw/.ndenv/versions/v10.15.0/bin/node'
    },
    tests: [
      'src/**/*.test.tsx'
    ],
    debug: "true"
  };
};
