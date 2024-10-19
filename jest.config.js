module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // or 'node' if you're running backend tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules'],
  modulePaths: ['.'],
  collectCoverage: true,
  // collectCoverageFrom: [
  //   'index.ts'
  // ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  // coverageReporters: ['text']
};
