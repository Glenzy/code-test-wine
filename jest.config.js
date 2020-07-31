module.exports = {
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', '.'],
  modulePathIgnorePatterns: ['.next'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
