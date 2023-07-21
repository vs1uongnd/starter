module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [
  'airbnb',
  'airbnb-typescript',
  'airbnb/hooks',
  'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',
  'plugin:prettier/recommended',
],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
  project: "./tsconfig.json",
},plugins: ['@typescript-eslint', 'react', 'prettier', 'simple-import-sort'],
   rules: {
  "react/react-in-jsx-scope": ["off"],
  "react/jsx-uses-react": ["off"],
  "react/jsx-props-no-spreading": ["warn"],
  "react/no-unescaped-entities": ["off"],
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error"
},
}
