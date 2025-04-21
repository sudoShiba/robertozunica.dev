import js from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import preferArrow from "eslint-plugin-prefer-arrow"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist", "vite-env"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react": reactPlugin,
      "prefer-arrow": preferArrow,
      "import": importPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "quotes": ["warn", "double"],
      "jsx-quotes": ["warn", "prefer-double"],
      "react/jsx-indent": ["warn", 2],
      "indent": ["warn", 2],
      "no-unneeded-ternary": "warn",
      "no-unexpected-multiline": "warn",
      "no-irregular-whitespace": "warn",
      "no-multi-spaces": "warn",
      "no-whitespace-before-property": "warn",
      "no-trailing-spaces": "warn",
      "space-before-blocks": "warn",
      "space-in-parens": ["warn", "never"],
      "space-infix-ops": "warn",
      "switch-colon-spacing": "warn",
      "semi": ["warn", "never"],
      "semi-spacing": "warn",
      "no-extra-semi": "warn",
      "no-spaced-func": "warn",
      "complexity": "warn",
      "comma-dangle": "warn",
      "curly": ["warn", "multi"],
      "eqeqeq": ["warn", "smart"],
      "no-else-return": "warn",
      "no-useless-return": "warn",
      "yoda": "warn",
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external", "internal"],
            "parent",
            ["sibling", "index"]
          ],
          "newlines-between": "always",

          pathGroups: [
            {
              pattern: "src/assets/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "src/components/**",
              group: "parent",
              position: "before"
            },
            {
              pattern: "src/**",
              group: "internal",
              position: "after"
            }
          ],

          pathGroupsExcludedImportTypes: [],

          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],
      "prefer-arrow/prefer-arrow-functions": [
        "warn",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false
        }
      ]
    }
  }
)
