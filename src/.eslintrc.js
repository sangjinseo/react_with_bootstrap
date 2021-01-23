module.export = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
    rules:{
        'recat/jsx-filename-extension':
        ['error',
          { 'extenstions': [".js", ".jsx"] }
        ]
    }
};