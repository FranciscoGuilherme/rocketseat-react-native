export default {
  preset: "jest-expo",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/app/components/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}
