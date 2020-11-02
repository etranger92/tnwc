//Jest does not take in consideration external .css

module.exports = {
  preset: 'ts-jest',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverage: true,
   transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
moduleNameMapper:{
  '^.+\\.(css|less)$': '<rootDir>/csstub.js'
},
snapshotSerializers: ["enzyme-to-json/serializer"]
};