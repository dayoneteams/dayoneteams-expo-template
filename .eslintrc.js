module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import", "jest"],
  extends: [
    "@react-native",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  ignorePatterns: ["metro.config.js"],
  env: {
    "jest/globals": true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "all",
        tabWidth: 2,
        semi: false,
        singleQuote: false,
        bracketSpacing: true,
        printWidth: 80,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.test.js", "*.test.jsx", "*.test.ts", "*.test.tsx"],
      env: {
        jest: true,
      },
    },
  ],
}
