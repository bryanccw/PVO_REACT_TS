const ignoredFiles = [
  '<rootDir>/codebuild/',
  '<rootDir>/coverage/',
  '<rootDir>/public/',
  '<rootDir>/scripts/',
  '<rootDir>/src/__mockData/',
  '<rootDir>/src/hooks/',
  '<rootDir>/src/i18n',
  '<rootDir>/src/__stories/',
  '<rootDir>/src/routes',
];

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|js)x?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  testPathIgnorePatterns: ignoredFiles,
  modulePathIgnorePatterns: ignoredFiles,
  coveragePathIgnorePatterns: ignoredFiles,
  roots: [process.cwd()],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 90,
      statements: 90,
    },
  },
};
