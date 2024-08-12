import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleDirectories: ["node_modules", "./src"],
  testEnvironment: "jsdom",
};

const config = createJestConfig(customJestConfig);

export default config;
