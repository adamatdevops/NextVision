// @ts-check

// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code will be 1)

/* Config */
// We can no longer declare the extends as strings in the flat config. Instead,
// we need to import that config and add it as an item of our array
import airbnbConfig from "airbnb";
import airbnbBaseConfig from "airbnb-base";
import airbnbTypscriptPrettierConfig from "airbnb-typscript-prettier";
import eslint from "@eslint/js";
import eslintConfigAirbnb from "eslint-config-airbnb";
import eslintConfigAirbnbBase from "eslint-config-airbnb-base";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigAirbnbTypescript from "eslint-config-airbnb-typescript";
import eslintConfigAirbnbTypescriptPrettier from "eslint-config-airbnb-typescript-prettier";
import jestConfig from "jest";
import reactAppConfig from "react-app";
import reactAppJestConfig from "react-app/jest";
import tseslint from "typescript-tseslint";
import typescriptEslintParserConfig from "@typescript-eslint/parser";
// Plugins
import eslintPluginEslintComments from "eslint-plugin-eslint-comments";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginJSXA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginRegex from "eslint-plugin-regex";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import TypescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";


export default tseslint.config(

	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
		{
			/* Only global ignores will bypass the parser
			* and avoid JS parsing errors
			* See https://github.com/eslint/eslint/discussions/17412
			*/

			ignores: [
				"**/*.json",
				"**/*.rs",
				"**/*.toml",
				"**/*.md",
				"**/*.log",
				"**/*.yml",
				"**/*.lock",
				"node_modules/**/*",
				".vscode/"
			],

			files: [
				"src/**/*.{j,t}s",
				"src/**/*.{t,j}sx"
			],
			/* Example: declares as an item and adds rules */

			rules: {
				"accessor-pairs": ["error"],
  		  "array-callback-return": ["error"],
  		  "arrow-body-style": ["error"],
  		  "block-scoped-var": ["error"],
  		  "camelcase": ["error"],
  		  "class-methods-use-this": ["error"],
  		  "complexity": ["error"],
  		  "consistent-return": ["error"],
  		  "consistent-this": ["error"],
  		  "constructor-super": ["error"],
  		  "curly": ["error"],
  		  "default-case": ["error"],
  		  "default-case-last": ["error"],
  		  "default-param-last": ["error"],
  		  "dot-notation": ["error"],
  		  "eqeqeq": ["error"],
  		  "for-direction": ["error"],
  		  "func-name-matching": ["error"],
  		  "func-names": ["error"],
  		  "func-style": ["error"],
  		  "getter-return": ["error"],
  		  "grouped-accessor-pairs": ["error"],
  		  "guard-for-in": ["error"],
  		  "id-denylist": ["error"],
  		  "id-length": ["error"],
  		  "id-match": ["error"],
  		  "init-declarations": ["error"],
  		  "line-comment-position": ["error"],
  		  "logical-assignment-operators": ["error"],
  		  "max-classes-per-file": ["error"],
  		  "max-depth": ["error"],
  		  "max-lines": ["error"],
  		  "max-lines-per-function": ["error"],
  		  "max-nested-callbacks": ["error"],
  		  "max-params": ["error"],
  		  "max-statements": ["error"],
  		  "new-cap": ["error"],
  		  "no-alert": ["error"],
  		  "no-array-constructor": ["error"],
  		  "no-async-promise-executor": ["error"],
  		  "no-await-in-loop": ["error"],
  		  "no-bitwise": ["error"],
  		  "no-caller": ["error"],
  		  "no-case-declarations": ["error"],
  		  "no-class-assign": ["error"],
  		  "no-compare-neg-zero": ["error"],
  		  "no-cond-assign": ["error"],
  		  "no-console": ["error"],
  		  "no-const-assign": ["error"],
  		  "no-constant-binary-expression": ["error"],
  		  "no-constant-condition": ["error"],
  		  "no-constructor-return": ["error"],
  		  "no-continue": ["error"],
  		  "no-control-regex": ["error"],
  		  "no-debugger": ["error"],
  		  "no-delete-var": ["error"],
  		  "no-div-regex": ["error"],
  		  "no-dupe-args": ["error"],
  		  "no-dupe-class-members": ["error"],
  		  "no-dupe-else-if": ["error"],
  		  "no-dupe-keys": ["error"],
  		  "no-duplicate-case": ["error"],
  		  "no-duplicate-imports": ["error"],
  		  "no-else-return": ["error"],
  		  "no-empty": ["error"],
  		  "no-empty-character-class": ["error"],
  		  "no-empty-function": ["error"],
  		  "no-empty-pattern": ["error"],
  		  "no-empty-static-block": ["error"],
  		  "no-eq-null": ["error"],
  		  "no-eval": ["error"],
  		  "no-ex-assign": ["error"],
  		  "no-extend-native": ["error"],
  		  "no-extra-bind": ["error"],
  		  "no-extra-boolean-cast": ["error"],
  		  "no-extra-label": ["error"],
  		  "no-fallthrough": ["error"],
  		  "no-func-assign": ["error"],
  		  "no-global-assign": ["error"],
  		  "no-implicit-coercion": ["error"],
  		  "no-implicit-globals": ["error"],
  		  "no-implied-eval": ["error"],
  		  "no-import-assign": ["error"],
  		  "no-inline-comments": ["error"],
  		  "no-inner-declarations": ["error"],
  		  "no-invalid-regexp": ["error"],
  		  "no-invalid-this": ["error"],
  		  "no-irregular-whitespace": ["error"],
  		  "no-iterator": ["error"],
  		  "no-label-var": ["error"],
  		  "no-labels": ["error"],
  		  "no-lone-blocks": ["error"],
  		  "no-lonely-if": ["error"],
  		  "no-loop-func": ["error"],
  		  "no-loss-of-precision": ["error"],
  		  "no-magic-numbers": ["error"],
  		  "no-misleading-character-class": ["error"],
  		  "no-multi-assign": ["error"],
  		  "no-multi-str": ["error"],
  		  "no-negated-condition": ["error"],
  		  "no-nested-ternary": ["error"],
  		  "no-new": ["error"],
  		  "no-new-func": ["error"],
  		  "no-new-native-nonconstructor": ["error"],
  		  "no-new-symbol": ["error"],
  		  "no-new-wrappers": ["error"],
  		  "no-nonoctal-decimal-escape": ["error"],
  		  "no-obj-calls": ["error"],
  		  "no-object-constructor": ["error"],
  		  "no-octal": ["error"],
  		  "no-octal-escape": ["error"],
  		  "no-param-reassign": ["error"],
  		  "no-plusplus": ["error"],
  		  "no-promise-executor-return": ["error"],
  		  "no-proto": ["error"],
  		  "no-prototype-builtins": ["error"],
  		  "no-redeclare": ["error"],
  		  "no-regex-spaces": ["error"],
  		  "no-restricted-exports": ["error"],
  		  "no-restricted-globals": ["error"],
  		  "no-restricted-imports": ["error"],
  		  "no-restricted-properties": ["error"],
  		  "no-restricted-syntax": ["error"],
  		  "no-return-assign": ["error"],
  		  "no-script-url": ["error"],
  		  "no-self-assign": ["error"],
  		  "no-self-compare": ["error"],
  		  "no-sequences": ["error"],
  		  "no-setter-return": ["error"],
  		  "no-shadow": ["error"],
  		  "no-shadow-restricted-names": ["error"],
  		  "no-sparse-arrays": ["error"],
  		  "no-template-curly-in-string": ["error"],
  		  "no-ternary": ["error"],
  		  "no-this-before-super": ["error"],
  		  "no-throw-literal": ["error"],
  		  "no-undef": ["error"],
  		  "no-undef-init": ["error"],
  		  "no-undefined": ["error"],
  		  "no-underscore-dangle": ["error"],
  		  "no-unexpected-multiline": ["error"],
  		  "no-unmodified-loop-condition": ["error"],
  		  "no-unneeded-ternary": ["error"],
  		  "no-unreachable": ["error"],
  		  "no-unreachable-loop": ["error"],
  		  "no-unsafe-finally": ["error"],
  		  "no-unsafe-negation": ["error"],
  		  "no-unsafe-optional-chaining": ["error"],
  		  "no-unused-expressions": ["error"],
  		  "no-unused-labels": ["error"],
  		  "no-unused-private-class-members": ["error"],
  		  "no-unused-vars": ["error"],
  		  "no-use-before-define": ["error"],
  		  "no-useless-backreference": ["error"],
  		  "no-useless-call": ["error"],
  		  "no-useless-catch": ["error"],
  		  "no-useless-computed-key": ["error"],
  		  "no-useless-concat": ["error"],
  		  "no-useless-constructor": ["error"],
  		  "no-useless-escape": ["error"],
  		  "no-useless-rename": ["error"],
  		  "no-useless-return": ["error"],
  		  "no-var": ["error"],
  		  "no-void": ["error"],
  		  "no-warning-comments": ["warn", { "terms": ["TODO","FIXME","NOTE","IMPORTANT","ADDED"], "location": "anywhere" }],
      	"no-with": ["error"],
      	"object-shorthand": ["error"],
      	"one-var": ["error"],
      	"operator-assignment": ["error"],
      	"prefer-arrow-callback": ["error"],
      	"prefer-const": ["error"],
      	"prefer-destructuring": ["error"],
      	"prefer-exponentiation-operator": ["error"],
      	"prefer-named-capture-group": ["error"],
      	"prefer-numeric-literals": ["error"],
      	"prefer-object-has-own": ["error"],
      	"prefer-object-spread": ["error"],
      	"prefer-promise-reject-errors": ["error"],
      	"prefer-regex-literals": ["error"],
      	"prefer-rest-params": ["error"],
      	"prefer-spread": ["error"],
      	"prefer-template": ["error"],
      	"radix": ["error"],
      	"require-atomic-updates": ["error"],
      	"require-await": ["error"],
      	"require-unicode-regexp": ["error"],
      	"require-yield": ["error"],
      	"sort-keys": ["error"],
      	"sort-vars": ["error"],
      	"strict": ["error"],
      	"symbol-description": ["error"],
      	"unicode-bom": ["error"],
      	"use-isnan": ["error"],
      	"valid-typeof": ["error"],
      	"vars-on-top": ["error"],
      	"yoda": ["error"]
			},
		},

	eslintConfigAirbnb.config.recommended,
	{
		// plugins: {}
		/* Example: declares as an item and adds rules */
	},
	airbnbConfig,{
		// plugins: {}
		/* Example: declares as an item and adds rules */
	},
	airbnbBaseConfig,
	{
		// plugins: {}
		/* Example: declares as an item and adds rules */
		rules: {
			"airbnb-base/arrow-body-style": "off",
		},
	},
	airbnbTypscriptPrettierConfig,
	{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},
	eslintConfigAirbnbBase.configs.recommended,
	{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},
	eslintConfigPrettier,
	{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},
	eslintConfigAirbnbTypescript.configs.recommended,
	{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},
	eslintConfigAirbnbTypescriptPrettier.configs.recommended,
	{
		// plugins: {}
		/* Example: declares as an item and adds rules */
	},
	jestConfig,
	{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},
	reactAppConfig,
	{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},
	reactAppJestConfig,
	{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},

	typescriptEslintParserConfig,{
					// plugins: {}
			/* Example: declares as an item and adds rules */
	},
	{

		/* Plugins */
		plugins: {
			"eslint-plugin-eslint-comments": eslintPluginEslintComments.plugin,
			"eslint-plugin-import": eslintPluginImport.plugin,
			"eslint-plugin-jest": eslintPluginJest.plugin,
			"eslint-plugin-jsx-a11y": eslintPluginJSXA11y.plugin,
			"eslint-plugin-promise": eslintPluginPromise.plugin,
			"eslint-plugin-prettier": eslintPluginPrettier.plugin,
			"eslint-plugin-promise": eslintPluginPromise.plugin,
			"eslint-plugin-react": eslintPluginReact.plugin,
			"eslint-plugin-react-hooks": eslintPluginReactHooks.plugin,
			"eslint-plugin-regex": eslintPluginRegex.plugin,
			"eslint-plugin-unused-imports": eslintPluginUnusedImports.plugin,
			"@typescript-eslint/eslint-plugin": TypescriptEslintEslintPlugin.plugin,
		},

		linterOptions: {
			"reportUnusedDisabledDirectories": "warn"
		},

		languageOptions: {
			// Allows for the parsing of modern ECMAScript features
			ecmaVersion: 2022,
			sourceType: "module",
			parser: tseslint.parser,// typescriptEslintParser,
			// globals: {}
			parserOptions: {
				project: true,
				requireConfigFile: true,
				ecmaFeatures:  {
					jsx: true,
				},
			},
		},

		},


	{
		/* Only global ignores will bypass the parser
		* and avoid JS parsing errors
		* See https://github.com/eslint/eslint/discussions/17412
		*/

		ignores: [
			"**/*.json",
			"**/*.rs",
			"**/*.toml",
			"**/*.md",
			"**/*.log",
			"**/*.yml",
			"**/*.lock",
			"node_modules/**/*",
			".vscode/"
		],

		files: [
			"src/**/*.{j,t}s",
			"src/**/*.{t,j}sx"
		],

		/* Plugins */
		plugins: {
			eslintPluginComments,
			eslintPluginImport,
			eslintPluginJsxA11y,
			eslintPluginPrettier,
			eslintPluginPromise,
			eslintPluginReact,
			eslintPluginReactHooks,
			eslintPluginRegex,
			eslintPluginUnusedImports,
			eslintPluginTypescriptEslint,
		},

		linterOptions: {
			"reportUnusedDisabledDirectories": "warn"
		},

		languageOptions: {
			// Allows for the parsing of modern ECMAScript features
			ecmaVersion: 2022,
			sourceType: "module",
			parser: typescriptEslintParser,
			// globals: {}
			parserOptions: {
				requireConfigFile: true,
				ecmaFeatures:  {
					jsx: true,
				},
			},
    	//jest/globals: true,
		},

		rules: {
			"brace-style": ["error", "1tbs"],
			"constructor-super": "error",
  	  "dot-location": ["error", "property"],
			// We use console["error"]() as a signal to not transform it:
  	  "dot-notation": ["error", {allowPattern: "^(error|warn)$"}],
  	  "eol-last": "error",
  	  eqeqeq: ["error", "allow-null"],

  		"linebreak-style": [
  			"error",
  			"unix"
  		],
  		"semi": [
  			"error",
  			"always"
  		],
  		// prettier/prettier: "error",
  		"import/extensions": [
  			"error",
  			"ignorePackages",
  			{
  		  	"js": "never",
  		  	"jsx": "never",
  		  	"ts": "never",
  		  	"tsx": "never",
  			}
  		],

			/* NOTE: added from react facebook */
			// https://github.com/facebook/react

			"line-comment-position": ["error", {"postion": "above"}],

			"no-array-constructor": "error",

			"no-caller": "error",
			"no-catch-shadow": "error",
			"no-class-assign": "warn",
			"no-const-assign": "error",

			"no-debugger": "error",
			"no-delete-var": "error",
			"no-dupe-args": "error",
			"no-dupe-class-members": "error",
  	  "no-dupe-keys": "error",
			"no-duplicate-case": "warn",

			"no-empty-character-class": "warn",
			"no-empty-pattern": "warn",
  	  "no-eval": "error",
  	  "no-extend-native": "warn",
			"no-ex-assign": "warn",
  	  "no-extra-bind": "warn",
  	  "no-extra-boolean-cast": "warn",

			"no-fallthrough": "warn",
			// Prevent for...of loops because they require a Symbol polyfill.
  	  // You can disable this rule for code that isn"t shipped (e.g. build scripts and tests).
  	  "no-for-of-loops/no-for-of-loops": "error",
			"no-func-assign": "error",
			// Prevent function declarations after return statements
  	  "no-function-declare-after-return/no-function-declare-after-return": "error",

			"no-implied-eval": "error",
			"no-inner-declarations": ["error", "functions"],
			//"no-invalid-regexp": "warn",
  	  "no-irregular-whitespace": "warn",

			"no-labels": ["error", {allowLoop: true, allowSwitch: true}],
			"no-label-var": "warn",
  	  "no-lone-blocks": "warn",

			"no-native-reassign": ["error", {exceptions: ["Map", "Set"]}],
			"no-negated-in-lhs": "error",
			"no-new": "warn",
  	  "no-new-func": "error",
			"no-new-object": "warn",
  	  "no-new-wrappers": "warn",

			"no-multi-str": "error",

  	  "no-obj-calls": "error",
			"no-octal": "warn",
			"no-octal-escape": "warn",

			"no-proto": "error",

			"no-regex-spaces": "warn",

  	  "no-script-url": "error",
  	  "no-self-compare": "warn",
  	  "no-sequences": "warn",
			"no-shadow-restricted-names": "warn",
			"no-sparse-arrays": "error",

			"no-this-before-super": "error",
			"no-throw-literal": "error",

			"no-undef": "error",
			"no-unneeded-ternary": "warn",
			"no-unreachable": "error",
			"no-unused-vars": ["error", {args: "none"}],
			"no-useless-call": "warn",

			"object-shorthand": "error",
  	  "one-var": ["warn", {initialized: "never"}],
  	  "operator-assignment": ["warn", "always"],

  	  "react/jsx-equals-spacing": "warn",
  	  "react/jsx-no-duplicate-props": "error",
  	  "react/jsx-uses-vars": "error",

  	  "jsx-quotes": ["error", "single"],
  	  "keyword-spacing": ["error", {after: true, before: true}],
  	  "no-multi-spaces": "error",
  	  "no-restricted-globals": ["error"],
  	  "no-restricted-syntax": [
  	    "error",
  	    "WithStatement",
  	    {
  	      selector: "MemberExpression[property.name=/^(?:substring|substr)$/]",
  	      message: "Prefer string.slice() over .substring() and .substr().",
  	    },
  	  ],
			"no-shadow": "error",
			"no-var": "error",
			"no-warning-comments": ["warn", { "terms": ["todo", "fixme", "note", "important"], "location": "anywhere" }],

			"use-isnan": "error",

  	  "quotes": ["error", "single", {avoidEscape: true, allowTemplateLiterals: true}],
  	  "valid-typeof": ["error", {requireStringLiterals: true}],

  	  // We apply these settings to files that should run on Node.
  	  // They can"t use JSX or ES6 modules, and must be in strict mode.
  	  // They can, however, use other ES6 features.
  	  // (Note these rules are overridden later for source files.)

  	  // Enforced by Prettier
  		// TODO: Prettier doesn"t handle long strings or long comments. Not a big
  	  // deal. But I turned it off because loading the plugin causes some obscure
  	  // syntax error and it didn"t seem worth investigating.

  	  // React & JSX
  	  // Our transforms set this automatically
  	  "react/jsx-boolean-value": ["error", "always"],
  	  "react/jsx-no-undef": "error",
  	  // We don"t care to do this
  	  "react/jsx-space-before-closing": "error",
  	  "react/jsx-uses-react": "error",
  	  // This isn"t useful in our test code
  	  "react/react-in-jsx-scope": "error",
  	  "react/self-closing-comp": "error",
  	  // We don"t care to do this
  	  "react/jsx-wrap-multilines": [
  	    "error",
  	    {declaration: false, assignment: false},
  	  ],

			"sort-keys": ["warn", "asc", {"caseSensitive": true, "natural": false, "minKeys": 2}],
			"space-before-blocks": "error",
			"strict": "error",
  	},
  },
	/* Jest */
	// https://github.com/jest-community/eslint-plugin-jest
	jest,
	{
		files: [
			"jest",
			"**/__tests__/*.js",
			"tests/**/*-test.{js,ts}",
			"tests/config/**/*.js",
      "tests/format/**/jsfmt.spec.js",
      "tests/integration/**/*.js",
      "tests/unit/**/*.js",
      "tests/dts/unit/**/*.js"
		],
		plugins: {
			eslintPluginJest,
		},
		rules: {
			"jest/no-focused-tests": "error",
			"jest/valid-expect": "error",
			"jest/valid-expect-in-promise": "error",
		},
	},
	},
);
