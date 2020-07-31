module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb-typescript', //Uses airbnb recommended rules for typescript (includes JS rules for JS files)
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier", // Disables Eslint rules from airbnb that conflict with prettier
    'prettier/@typescript-eslint' // Disables ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': ["error", { allowForLoopAfterthoughts: true}],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'react/jsx-filename-extension': ["warn", { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react/react-in-jsx-scope': 'off', // Next.js globally defines React
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/prop-types': 'off',
    'import/extensions': ["warn", { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-bitwise': 'off',
    'import/prefer-default-export': 'off',
    "no-console": "error",
    // https://github.com/prettier/prettier-eslint/issues/190 & https://github.com/eslint/eslint/issues/11408
    "spaced-comment": ["error", "always", { "markers": ["/"] }]
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react-hooks', 'jest', 'cypress'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ["node_modules", "."],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
