module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 12,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: 0,
    "react/react-in-jsx-scope": "off",
    "no-empty-interface": 0,
    indent: ["error", 2],
    "no-tabs": ["error", { allowIndentationTabs: false }],
    "import/no-named-as-default": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
  },
}
