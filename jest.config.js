/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.test.tsx"],
};

export default config;
