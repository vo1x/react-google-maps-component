module.exports = {
  root: true,
  env: { browser: true, es2020: true },
 "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "airbnb-typescript",
        "plugin:prettier/recommended"
    ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
        "prettier/prettier": [
            "warn",
            {
                "indentStyle": "space",
                "printWidth": 80,
                "trailingComma": "es5",
                "singleQuote": true,
                "tabWidth": 2,
                "useTabs": true
            }
        ],
    }
}