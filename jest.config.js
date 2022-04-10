const path = require('path');

module.exports = {
  rootDir: 'src',
  collectCoverageFrom: [
    `**/*.{ts?(x)}`,
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest', 
      { configFile: `${path.join(__dirname, '/')}babel.config.js` }
    ],
    '^.+\\.(ts|tsx)$': require.resolve('ts-jest'),
    // '^.+\\.svg$': require.resolve('jest-svg-transformer'),
    '^.+\\.css$': `${path.join(__dirname, '/config')}/jest/css.js`,
    '^(?!.*\\.(js|jsx|css|json)$)': `${path.join(__dirname, '/config')}/jest/file.js`,
  },
  moduleNameMapper: {
    '\\.svg': `${path.join(__dirname, '/__mocks__')}/fileMock.ts`,
  },
  testURL: 'http://localhost',
  // setupFiles: [`${path.join(__dirname, '/config')}/jest/setupEnv.js`],
  setupFilesAfterEnv: ['./setupTests.js'],
  testMatch: [
    `**/__tests__/**/*.ts?(x)`,
    `**/?(*.)(spec|test).ts?(x)`,
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'web.jsx',
    'node',
  ],
};
