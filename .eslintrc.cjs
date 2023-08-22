module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb-typescript/base",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "prettier", "react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/jsx-curly-spacing": ["error", "never"],
    "indent": ["error", 2]
  },
}
