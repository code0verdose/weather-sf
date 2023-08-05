module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/prop-types': 'off',
		'no-unused-vars': 'warn',
		'react/no-unescaped-entities': 'off',
	},
};
