import js from "@eslint/js";
import jestConfig from "jest";
import eslintPluginJest from "eslint-plugin-jest";
import tseslint from "typescript-eslint";

export default tseslint.config(
	js.configs.recommended,
	...tseslint.config.recommended,
	jestConfig,
	{
		/* eslint-plugin-jest */
		// TODO: Still Needs fine tuning
		files: [
    	"tests/config/**/*.js",
    	"tests/format/**/jsfmt.spec.js",
    	"tests/integration/**/*.js",
    	"tests/unit/**/*.js",
    	"tests/dts/unit/**/*.js",
    	"scripts/release/__tests__/**/*.spec.js",
    ],
		ignores: [
			"src/**/*",
			"**/*.json",
			"**/*.rs",
			"**/*.toml",
			"**/*.md",
			"**/*.log",
			"**/*.yml",
			"**/*.lock",
			".vscode/",
			"dist/**",
			"node_modules/**",
			"bin/**",
			"build/**"
		],

		languageOptions: {
			// Allows for the parsing of modern ECMAScript features
			ecmaVersion: 2022,
			parser: tseslint.parser,
			parserOptions: {
				// NOTE: import.meta.dirname is only present for ESM files in Node.js >=20.11.0 / >= 21.2.0.
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures:  {
					jsx: true,
				},
				project: true,
				requireConfigFile: true,
				warnOnUnsupportedTypeScriptVersion: true,
			},
			sourceType: "module",
		},

		linterOptions: {
			"reportUnusedDisabledDirectories": ["warn"],
		},
    plugins: {
			"eslint-plugin-jest": eslintPluginJest,
		},
    rules: {
			// FIXME: Fix This
			...eslintPluginJest.configs.recommended.rules,
    	"jest/valid-expect": [
    	  "error",
    	  {
    	    alwaysAwait: true,
    	  },
    	],
    	"jest/prefer-to-be": "error",
			"jest/no-disabled-tests": "warn",
    	"jest/no-focused-tests": "error",
    	"jest/no-identical-title": "error",
    	"jest/prefer-to-have-length": "warn",
    },
	},
);
