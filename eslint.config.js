// @ts-check
// IMPORTANT: Add @ts-check to the first line in your file to have TypeScript raise it as an error //

// Configs
import airbnbConfig from "airbnb";
import airbnbTypscriptPrettierConfig from "eslint-config-airbnb-typescript-prettier";
import eslintConfig from "@eslint/js";
import eslintConfigAirbnbConfig from "eslint-config-airbnb";
import eslintConfigAirbnbBaseConfig from "eslint-config-airbnb-base";
import eslintConfigAirbnbTypescriptConfig from "eslint-config-airbnb-typescript";
import eslintConfigAirbnbTypescriptPrettierConfig from "eslint-config-airbnb-typescript-prettier";
import eslintConfigPrettierConfig from "eslint-config-prettier";
"eslint-config-airbnb-typescript-prettier";
import jestConfig from "jest";
import reactAppConfig from "react-app";
/* typescript-eslint vs @typescript-eslint/parser
* Parser: '@typescript-eslint/parser' tells ESLint to use the @typescript-eslint/parser package you installed to parse your source files.
* This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
* Plugins: ['@typescript-eslint'] tells ESLint to load the @typescript-eslint/eslint-plugin package as a plugin.
This allows you to use typescript-eslint's rules within your codebase. */

import tseslint from "typescript-eslint"; /* jsxnote: modern ts-eslint parser */
import * as parserTypeScript from "@typescript-eslint/parser"; /* jsxnote: standard ts-eslint parser */

// Plugins
import eslintPluginEslintComments from "eslint-plugin-eslint-comments";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginJSXA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh  from "eslint-plugin-react-refresh";
import eslintPluginRegex from "eslint-plugin-regex";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import stylistic from "@stylistic/eslint-plugin";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import stylisticJsx from "@stylistic/eslint-plugin-jsx";
import TypescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
// Resolvers
// FIXME: needs to migrated from eslint legacy
// import eslintImportResolverTypescriptConfig from "eslint-import-resolver-typescript";
// "settings": {
// "import/resolver": {
// "typescript": {}
// }

export default tseslint.config(
	/* Config */
	airbnbConfig.configs.recommended,
	airbnbTypscriptPrettierConfig.configs.recommended,
	eslintConfig.configs.recommended,
	eslintConfigAirbnbConfig.configs.recommended,
	eslintConfigAirbnbBaseConfig.configs.recommended,
	eslintConfigAirbnbTypescriptConfig.configs.recommended,
	eslintConfigAirbnbTypescriptPrettierConfig.configs.recommended,
	eslintConfigPrettierConfig.configs.recommended,
	jestConfig.configs.recommended,
	reactAppConfig.configs.recommended,

	...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

	{
		/* Only global ignores will bypass the parser
		* and avoid JS parsing errors
		* See https://github.com/eslint/eslint/discussions/17412
		*/

		files: [
			"src/**/*.{j,t}s",
			"src/**/*.{t,j}sx"
		],

		ignores: [
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
			parser: parserTypeScript, // tseslint.parser,
			parserOptions: {
				// NOTE: import.meta.dirname is only present for ESM files in Node.js >=20.11.0 / >= 21.2.0.
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures:  {
					jsx: true,
				},
				project: true,
				requireConfigFile: true,
			},
			sourceType: "module",
		},

		linterOptions: {
			"reportUnusedDisabledDirectories": "warn"
		},

		/* Plugins */
		plugins: {
			"eslint-plugin-eslint-comments": eslintPluginEslintComments.plugin,
			"eslint-plugin-import": eslintPluginImport.plugin,
			"eslint-plugin-jest": eslintPluginJest.plugin,
			"eslint-plugin-jsx-a11y": eslintPluginJSXA11y.plugin,
			"eslint-plugin-prettier": eslintPluginPrettier.plugin,
			"eslint-plugin-promise": eslintPluginPromise.plugin,
			"eslint-plugin-react": eslintPluginReact.plugin,
			"eslint-plugin-react-hooks": eslintPluginReactHooks.plugin,
			"eslint-plugin-regex": eslintPluginRegex.plugin,
			"eslint-plugin-unused-imports": eslintPluginUnusedImports.plugin,
		},

		rules: {
			// airbnb recommended
			"airbnb-base/arrow-body-style": "off",
			"react/jsx-filename-extension": ["warn", { "extensions": [".tsx"]} ],
			// eslint recommended
			"brace-style": ["error", "1tbs"],
			// We use console["error"]() as a signal to not transform it:
  	  "eol-last": ["error"],
  	  eqeqeq: ["error", "allow-null"],
			"accessor-pairs": ["error"],
  		"array-callback-return": ["error"],
  		"arrow-body-style": ["error"],
  		"block-scoped-var": ["error"],
  		"camelcase": ["error"],
  		"class-methods-use-this": ["error"], // jsxnote: consider switch to "off"
  		"complexity": ["error"],
  		"consistent-return": ["error"],
  		"consistent-this": ["error"],
  		"constructor-super": ["error"],
  		"curly": ["error"],
  		"default-case": ["error"],
  		"default-case-last": ["error"],
  		"default-param-last": ["error"],
			"dot-location": ["error", "property"],
  		// "dot-notation": ["error", {allowPattern: "^(error|warn)$"}],
  		"for-direction": ["error"],
  		"func-name-matching": ["error"],
  		"func-names": ["error"], // jsxnote: consider switch to "off"
  		"func-style": ["error"],
  		"getter-return": ["error"],
  		"grouped-accessor-pairs": ["error"],
  		"guard-for-in": ["error"],
  		"id-denylist": ["error"],
  		"id-length": ["error"],
  		"id-match": ["error"],
			"jsx-quotes": ["error", "double"],
			"keyword-spacing": ["error", {after: true, before: true}],
  		"init-declarations": ["error"],
			"linebreak-style": ["error", "unix"],
  		"line-comment-position": ["error", {"postion": "above"}],
  		"logical-assignment-operators": ["error"],
  		"max-classes-per-file": ["error"],
  		"max-depth": ["error"],
  		"max-lines": ["warn", {"max": 500, "skipBlankLines": true, "skipComments": true}],
  		"max-lines-per-function": ["error"],
  		"max-nested-callbacks": ["error"],
  		"max-params": ["error"],
  		"max-statements": ["error"],
			"new-cap": ["error"],
  		"no-alert": ["error"],
  		// "no-array-constructor": ["error"],
  		"no-async-promise-executor": ["error"],
  		"no-await-in-loop": ["error"],
  		"no-bitwise": ["error"],
			"no-catch-shadow": ["error"],
			"no-caller": ["error"],
  		"no-case-declarations": ["error"],
			"no-class-assign": ["warn"],
  		"no-compare-neg-zero": ["error"],
  		"no-cond-assign": ["error"],
  		"no-console": ["error"], // jsxnote: consider switch to "off"
  		"no-const-assign": ["error"],
  		"no-constant-binary-expression": ["error"],
  		"no-constant-condition": ["error"],
  		"no-constructor-return": ["error"],
  		"no-continue": ["error"],
  		"no-control-regex": ["error"],
  		"no-debugger": ["off"],
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
  		// "no-empty-function": ["error"],
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
			// Prevent for...of loops because they require a Symbol polyfill.
  	  // You can disable this rule for code that isn"t shipped (e.g. build scripts and tests).
  	  "no-for-of-loops/no-for-of-loops": "error",
  		"no-func-assign": ["error"],
			// Prevent function declarations after return statements
  	  "no-function-declare-after-return/no-function-declare-after-return": ["error"],
  		"no-global-assign": ["error"],
  		"no-implicit-coercion": ["error"],
  		"no-implicit-globals": ["error"],
  		// "no-implied-eval": ["error"],
  		"no-import-assign": ["error"],
  		"no-inline-comments": ["error", {"ignorePattern": "jsxnote:\\s.+"}],
  		"no-inner-declarations": ["error"],
  		// "no-invalid-regexp": ["error"],
  		"no-invalid-this": ["error"],
  		"no-irregular-whitespace": ["warn"],
  		"no-iterator": ["error"],
  		"no-labels": ["error", {allowLoop: true, allowSwitch: true}],
			"no-label-var": ["warn"],
  		"no-lone-blocks": ["warn"],
  		"no-lonely-if": ["error"],
  		"no-loop-func": ["error"],
  		// "no-loss-of-precision": ["error"],
  		"no-magic-numbers": ["error"],
  		"no-misleading-character-class": ["error"],
  		"no-multi-assign": ["error"],
			"no-multi-spaces": ["error"],
  		"no-multi-str": ["error"],
			"no-native-reassign": ["error", {exceptions: ["Map", "Set"]}],
  		"no-negated-condition": ["error"],
  		"no-nested-ternary": ["error"],
  		"no-new": ["error"],
  		"no-new-func": ["error"],
  		"no-new-native-nonconstructor": ["error"],
			"no-new-object": ["warn"],
  		"no-new-symbol": ["error"],
  		"no-new-wrappers": ["warn"],
  		"no-nonoctal-decimal-escape": ["error"],
  		"no-obj-calls": ["error"],
  		"no-object-constructor": ["error"],
  		"no-octal": ["warn"],
  		"no-octal-escape": ["warn"],
  		"no-param-reassign": ["error"],
  		"no-plusplus": ["error"],
  		"no-promise-executor-return": ["error"],
  		"no-proto": ["error"],
  		"no-prototype-builtins": ["error"],
  		"no-redeclare": ["error"],
  		"no-regex-spaces": ["warn"],
  		"no-restricted-exports": ["error"],
  		"no-restricted-globals": ["error"],
  		"no-restricted-imports": ["error"],
  		"no-restricted-properties": ["error"],
  		"no-restricted-syntax": [
				"error",
				"WithStatement",
				{
					selector: "MemberExpression[property.name=/^(?:substring|substr)$/]",
					message: "Prefer string.slice() over .substring() and .substr().",
				},
			],
  		"no-return-assign": ["error"],
  		"no-script-url": ["error"],
  		"no-self-assign": ["error"],
  		"no-self-compare": ["warn"],
  		"no-sequences": ["warn"],
  		"no-setter-return": ["error"],
  		"no-shadow": ["error"],
  		"no-shadow-restricted-names": ["warn"],
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
  		"no-unneeded-ternary": ["warn"],
  		"no-unreachable": ["error"],
  		"no-unreachable-loop": ["error"],
  		"no-unsafe-finally": ["error"],
  		"no-unsafe-negation": ["error"],
  		"no-unsafe-optional-chaining": ["error"],
  		"no-unused-expressions": ["error"],
  		"no-unused-labels": ["error"],
  		"no-unused-private-class-members": ["error"],
  		"no-use-before-define": ["error"],
  		"no-useless-backreference": ["error"],
  		"no-useless-call": ["warn"],
  		"no-useless-catch": ["error"],
  		"no-useless-computed-key": ["error"],
  		"no-useless-concat": ["error"],
  		"no-useless-constructor": ["error"],
  		"no-useless-escape": ["error"],
  		"no-useless-rename": ["error"],
  		"no-useless-return": ["error"],
  		"no-var": ["error"],
  		"no-void": ["error"],
  		"no-warning-comments": ["warn", { "terms": ["TODO","FIXME","NOTE","IMPORTANT","ADDED","PLUGIN","CONFIG"], "location": "anywhere" }],
      "no-with": ["error"],
      "object-shorthand": ["error"], // jsxnote: consider switch to "off"
      "one-var": ["warn", {initialized: "never"}],
      "operator-assignment": ["warn", "always"],
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
			"quotes": ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
			"space-before-blocks": ["error"],
      "radix": ["error"],
      "require-atomic-updates": ["error"],
      // "require-await": ["error"],
      "require-unicode-regexp": ["error"],
      "require-yield": ["error"],
      "sort-keys": ["warn", "asc", {"caseSensitive": true, "natural": false, "minKeys": 2}],
      "sort-vars": ["error"],
      "strict": ["error"],
      "symbol-description": ["error"],
      "unicode-bom": ["error"],
      "use-isnan": ["error"],
      "valid-typeof": ["error", {requireStringLiterals: true}],
      "vars-on-top": ["error"],
      "yoda": ["error"],

			// React Rules
			// NOTE: added from react facebook
			// https://github.com/facebook/react
			// We apply these settings to files that should run on Node.
  	  // They can"t use JSX or ES6 modules, and must be in strict mode.
  	  // They can, however, use other ES6 features.
  	  // (Note these rules are overridden later for source files.)
  	  // Our transforms set this automatically
  	  "react/jsx-boolean-value": ["error", "always"],
			"react/jsx-equals-spacing": "warn",
			"react/react-in-jsx-scope": "error",
  	  "react/jsx-no-duplicate-props": "error",
  	  "react/jsx-no-undef": "error",
  	  // We don"t care to do this
  	  "react/jsx-space-before-closing": "error",
  	  "react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
  	  // We don"t care to do this
  	  "react/jsx-wrap-multilines": ["error", { declaration: false, assignment: false }],
			"react/self-closing-comp": "error",

			// eslint-plugin-import
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
			"import/no-unresolved": ["error"],
		},
	},
	/* Stylistic */
	{
		plugins: {
			"@stylistic": stylistic,
			"@stylistic/eslint-plugin-js": stylisticJs,
			"@stylistic/eslint-plugin-ts": stylisticTs,
			"@stylistic/eslint-plugin-jsx": stylisticJsx,
			"@typescript-eslint/eslint-plugin": TypescriptEslintEslintPlugin,
			"@typescript-eslint": tseslint.plugin,
		},
		rules: {
			"@stylistic/semi": "error",
		},
	},
	// TODO: Organize Plugins & Rules
	/* typescript-eslint/eslint-plugin */
	{
		plugins: {},
		rules: {
			// recommendedTypeCheck
			"@typescript-eslint/await-thenable": "error",
    	"@typescript-eslint/ban-ts-comment": "error",
    	"@typescript-eslint/ban-types": "error",
    	"no-array-constructor": "off",
    	"@typescript-eslint/no-array-constructor": "error",
    	"@typescript-eslint/no-base-to-string": "error",
    	"@typescript-eslint/no-duplicate-enum-values": "error",
    	"@typescript-eslint/no-duplicate-type-constituents": "error",
    	"@typescript-eslint/no-explicit-any": "error",
    	"@typescript-eslint/no-extra-non-null-assertion": "error",
    	"@typescript-eslint/no-floating-promises": "error",
    	"@typescript-eslint/no-for-in-array": "error",
    	"no-implied-eval": "off",
    	"@typescript-eslint/no-implied-eval": "error",
    	"no-loss-of-precision": "off",
    	"@typescript-eslint/no-loss-of-precision": "error",
    	"@typescript-eslint/no-misused-new": "error",
    	"@typescript-eslint/no-misused-promises": "error",
    	"@typescript-eslint/no-namespace": "error",
    	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    	"@typescript-eslint/no-redundant-type-constituents": "error",
    	"@typescript-eslint/no-this-alias": "error",
    	"@typescript-eslint/no-unnecessary-type-assertion": "error",
    	"@typescript-eslint/no-unnecessary-type-constraint": "error",
    	"@typescript-eslint/no-unsafe-argument": "error",
    	"@typescript-eslint/no-unsafe-assignment": "error",
    	"@typescript-eslint/no-unsafe-call": "error",
    	"@typescript-eslint/no-unsafe-declaration-merging": "error",
    	"@typescript-eslint/no-unsafe-enum-comparison": "error",
    	"@typescript-eslint/no-unsafe-member-access": "error",
    	"@typescript-eslint/no-unsafe-return": "error",
    	"no-unused-vars": "off",
    	"@typescript-eslint/no-unused-vars": "error",
    	"@typescript-eslint/no-var-requires": "error",
    	"@typescript-eslint/prefer-as-const": "warn",
    	"require-await": "off",
    	"@typescript-eslint/require-await": "error",
    	"@typescript-eslint/restrict-plus-operands": "error",
    	"@typescript-eslint/restrict-template-expressions": "error",
    	"@typescript-eslint/triple-slash-reference": "error",
    	"@typescript-eslint/unbound-method": "error",
			// StylisticTypeCheck
			"@typescript-eslint/adjacent-overload-signatures": "error",
    	"@typescript-eslint/array-type": "error",
    	"@typescript-eslint/ban-tslint-comment": "error",
    	"@typescript-eslint/class-literal-property-style": "error",
    	"@typescript-eslint/consistent-generic-constructors": "error",
    	"@typescript-eslint/consistent-indexed-object-style": "error",
    	"@typescript-eslint/consistent-type-assertions": "error",
    	"@typescript-eslint/consistent-type-definitions": "error",
    	"dot-notation": "off",
    	"@typescript-eslint/dot-notation": ["error", {allowPattern: "^(error|warn)$"}],
    	"@typescript-eslint/no-confusing-non-null-assertion": "error",
    	"no-empty-function": "off",
    	"@typescript-eslint/no-empty-function": "error",
    	"@typescript-eslint/no-empty-interface": "error",
    	"@typescript-eslint/no-inferrable-types": "error",
    	"@typescript-eslint/non-nullable-type-assertion-style": "error",
    	"@typescript-eslint/prefer-for-of": "error",
    	"@typescript-eslint/prefer-function-type": "error",
    	"@typescript-eslint/prefer-namespace-keyword": "error",
    	"@typescript-eslint/prefer-nullish-coalescing": "error",
    	"@typescript-eslint/prefer-optional-chain": "error",
    	"@typescript-eslint/prefer-string-starts-ends-with": "error",
		},
	},
	// eslint-plugin-prettier
	{
		plugins: {},
		rules: {
			...eslintConfigPrettierConfig.rules,
			// FIXME: Fix This
			...eslintPluginPrettier.configs.recommended.rules,
			"prettier/prettier": [
        	"error",
        	{
        		endOfLine: "auto"
        	}
      ],
		},
	},
	{
		// TODO: Still Needs fine tuning
    files: [
      "tests/config/**/*.js",
      "tests/format/**/jsfmt.spec.js",
      "tests/integration/**/*.js",
      "tests/unit/**/*.js",
      "tests/dts/unit/**/*.js",
      "scripts/release/__tests__/**/*.spec.js",
    ],
    plugins: {
			jest: eslintPluginJest
		},
    languageOptions: {
      globals: eslintPluginJest.environments.globals.globals,
    },
    rules: {
      "@stylistic/js/quotes": [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      "jest/valid-expect": [
        "error",
        {
          alwaysAwait: true,
        },
      ],
      "jest/prefer-to-be": "error",
    },
  },
	{
		files: ['*.js'],
		...tseslint.configs.disableTypeChecked,
	},
	{
    files: ["**/*.d.ts"],
    rules: {
      "eslint-comments/no-unlimited-disable": "off",
      "import/no-duplicates": "off",
      "unused-imports/no-unused-vars": "off"
    },
  },
);
