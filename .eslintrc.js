module.exports = {
  "eslint.workingDirectories": ["./src/**/*.{js,jsx,ts,tsx}"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "single"],
    "react/react-in-jsx-scope": "off",
    indent: ["error", 4],
    "no-tabs": ["error", { allowIndentationTabs: true }],
  },
};
