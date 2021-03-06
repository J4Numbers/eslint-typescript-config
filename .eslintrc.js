const baseConfiguration = require('@j4numbers/eslint-base-config');

module.exports = {
  ...baseConfiguration,

  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    ...baseConfiguration.parserOptions,
    'project': '**/tsconfig.json',
  },
  'plugins': [
    '@typescript-eslint',
  ],

  'rules': {
    // Base configuration rules
    ...baseConfiguration.rules,

    // Switch off breaking items in base config
    'brace-style': 'off',
    'camelcase': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'dot-notation': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
    'keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    'no-empty-function': 'off',
    'no-invalid-this': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',

    // Typescript rule overrides for base config
    '@typescript-eslint/brace-style': [ 'error', '1tbs' ],
    '@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
    '@typescript-eslint/comma-spacing': [ 'error' ],
    '@typescript-eslint/dot-notation': [ 'error' ],
    '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],
    '@typescript-eslint/indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    '@typescript-eslint/keyword-spacing': [ 'error' ],
    '@typescript-eslint/lines-between-class-members': [ 'error', 'always' ],
    '@typescript-eslint/no-empty-function': [ 'error' ],
    '@typescript-eslint/no-invalid-this': [ 'error' ],
    '@typescript-eslint/no-shadow': [ 'error' ],
    '@typescript-eslint/no-throw-literal': [ 'error' ],
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
    '@typescript-eslint/quotes': [ 'error', 'single' ],
    '@typescript-eslint/semi': [ 'error', 'always' ],
    '@typescript-eslint/space-before-function-paren': [ 'error', 'always' ],
    '@typescript-eslint/space-infix-ops': [ 'error' ],

    // Typescript-specific rules
    '@typescript-eslint/adjacent-overload-signatures': [ 'error' ],
    '@typescript-eslint/array-type': [ 'error', { 'default': 'generic' } ],
    '@typescript-eslint/await-thenable': [ 'error' ],
    '@typescript-eslint/ban-ts-comment': [ 'error', {
      'ts-ignore': 'allow-with-description',
    } ],
    '@typescript-eslint/ban-tslint-comment': [ 'error' ],
    '@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ],
    '@typescript-eslint/consistent-indexed-object-style': [ 'error', 'record' ],
    '@typescript-eslint/consistent-type-assertions': [ 'error', {
      'assertionStyle': 'as',
      'objectLiteralTypeAssertions': 'never',
    } ],
    '@typescript-eslint/consistent-type-definitions': [ 'error', 'interface' ],
    '@typescript-eslint/consistent-type-imports': [ 'error' ],
    '@typescript-eslint/explicit-function-return-type': [ 'error', {
      'allowTypedFunctionExpressions': true,
    } ],
    '@typescript-eslint/explicit-member-accessibility': [ 'error', {
      'accessibility': 'explicit',
    } ],
    '@typescript-eslint/member-delimiter-style': [ 'error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false,
      },
      'multilineDetection': 'brackets',
    } ],
    '@typescript-eslint/member-ordering': [ 'error' ],
    '@typescript-eslint/method-signature-style': [ 'error', 'property' ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': [ 'camelCase' ],
        'leadingUnderscore': 'allow',
        'trailingUnderscore': 'forbid',
      },
      {
        'selector': 'typeLike',
        'format': [ 'PascalCase' ],
        'leadingUnderscore': 'allow',
        'trailingUnderscore': 'forbid',
      },
      {
        'selector': 'property',
        'format': [ 'snake_case', 'camelCase' ],
        'leadingUnderscore': 'allow',
        'trailingUnderscore': 'forbid',
      },
      {
        'selector': 'enumMember',
        'format': [ 'UPPER_CASE' ],
        'leadingUnderscore': 'allow',
        'trailingUnderscore': 'forbid',
      },
    ],
    '@typescript-eslint/no-base-to-string': [ 'error' ],
    '@typescript-eslint/no-confusing-non-null-assertion': [ 'error' ],
    '@typescript-eslint/no-empty-interface': [ 'error' ],
    '@typescript-eslint/no-floating-promises': [ 'error' ],
    '@typescript-eslint/no-for-in-array': [ 'error' ],
    '@typescript-eslint/no-implicit-any-catch': [ 'error' ],
    '@typescript-eslint/no-inferrable-types': [ 'error', {
      'ignoreParameters': true,
      'ignoreProperties': true,
    } ],
    '@typescript-eslint/no-misused-new': [ 'error' ],
    '@typescript-eslint/no-misused-promises': [ 'error' ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': [ 'error' ],
    '@typescript-eslint/no-non-null-assertion': [ 'error' ],
    '@typescript-eslint/no-parameter-properties': [ 'error', {
      'allows': [ 'readonly' ],
    } ],
    '@typescript-eslint/no-require-imports': [ 'error' ],
    '@typescript-eslint/no-this-alias': [ 'error' ],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [ 'error' ],
    '@typescript-eslint/no-unnecessary-condition': [ 'error' ],
    '@typescript-eslint/no-unnecessary-type-arguments': [ 'error' ],
    '@typescript-eslint/no-unnecessary-type-assertion': [ 'error' ],
    '@typescript-eslint/no-unnecessary-type-constraint': [ 'error' ],
    '@typescript-eslint/no-unsafe-argument': [ 'error' ],
    '@typescript-eslint/no-unsafe-assignment': [ 'error' ],
    '@typescript-eslint/no-unsafe-call': [ 'error' ],
    '@typescript-eslint/no-unsafe-member-access': [ 'error' ],
    '@typescript-eslint/no-unsafe-return': [ 'error' ],
    '@typescript-eslint/no-var-requires': [ 'error' ],
    '@typescript-eslint/prefer-enum-initializers': [ 'error' ],
    '@typescript-eslint/prefer-for-of': [ 'error' ],
    '@typescript-eslint/prefer-function-type': [ 'error' ],
    '@typescript-eslint/prefer-literal-enum-member': [ 'error' ],
    '@typescript-eslint/prefer-nullish-coalescing': [ 'error' ],
    '@typescript-eslint/prefer-readonly': [ 'error' ],
    '@typescript-eslint/prefer-reduce-type-parameter': [ 'error' ],
    '@typescript-eslint/prefer-regexp-exec': [ 'error' ],
    '@typescript-eslint/prefer-ts-expect-error': [ 'error' ],
    '@typescript-eslint/promise-function-async': [ 'error' ],
    '@typescript-eslint/restrict-plus-operands': [ 'error', {
      'checkCompoundAssignments': true,
    } ],
    '@typescript-eslint/restrict-template-expressions': [ 'error', {
      'allowNumber': true,
      'allowBoolean': true,
    } ],
    '@typescript-eslint/switch-exhaustiveness-check': [ 'error' ],
    '@typescript-eslint/type-annotation-spacing': [ 'error' ],
  },

  'settings': {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
      },
    },
  },
};
