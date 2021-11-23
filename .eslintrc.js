module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'standard',
        'plugin:jsonc/recommended-with-jsonc'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'jsonc/indent': ['error', 2, {}],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ]
    },
    globals: {
        cy: 'readonly',
        expect: 'readonly'
    }
};
