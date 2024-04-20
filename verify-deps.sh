#!/usr/bin/env bash

# https://caniuse.com/
# https://fathomtech.io/blog/understanding-peer-dependencies-in-npm/
# https://semver.npmjs.com/

set -e xtrce

function verify-deps() {
    npm info "@tiptap/core" peerDependencies
    sleep 1
    npm info "@tiptap/extension-link" peerDependencies
    sleep 1
    npm info "@tiptap/pm" peerDependencies
    sleep 1
    npm info "@tiptap/react" peerDependencies
    sleep 1
    npm info "@tiptap/starter-kit" peerDependencies
    sleep 1
    npm info "aws-amplify" peerDependencies
    sleep 1
    npm info "clsx" peerDependencies
    sleep 1
    npm info "csv" peerDependencies
    sleep 1
    npm info "dayjs" peerDependencies
    sleep 1
    npm info "ra-data-json-server" peerDependencies
    sleep 1
    npm info "react" peerDependencies
    sleep 1
    npm info "react-admin" peerDependencies
    sleep 1
    npm info "react-admin-amplify" peerDependencies
    sleep 1
    npm info "react-dom" peerDependencies
    sleep 1
    npm info "react-icons" peerDependencies
    sleep 1
    npm info "react-router-dom" peerDependencies
    sleep 1
    npm info "recharts" peerDependencies
    sleep 1
    npm info "web-vitals" peerDependencies
    sleep 1
# npm info   "@airbnb/config-jest" peerDependencies
# sleep 1
# npm info   "@babel/cli" peerDependencies
# sleep 1
# npm info   "@babel/core" peerDependencies
# sleep 1
# npm info   "@babel/plugin-proposal-class-properties" peerDependencies
# sleep 1
# npm info   "@babel/preset-env" peerDependencies
# sleep 1
# npm info   "@babel/preset-react" peerDependencies
# sleep 1
# npm info   "@babel/preset-typescript" peerDependencies
# sleep 1
# npm info   "@commitlint/cli" peerDependencies
# sleep 1
# npm info   "@eslint/eslintrc" peerDependencies
# sleep 1
# npm info   "@eslint/js" peerDependencies
# sleep 1
# npm info   "@semantic-release/changelog" peerDependencies
# sleep 1
# npm info   "@semantic-release/git" peerDependencies
# sleep 1
# npm info   "@stylistic/eslint-plugin" peerDependencies
# sleep 1
# npm info   "@stylistic/eslint-plugin-js" peerDependencies
# sleep 1
# npm info   "@stylistic/eslint-plugin-jsx" peerDependencies
# sleep 1
# npm info   "@stylistic/eslint-plugin-migrate" peerDependencies
# sleep 1
# npm info   "@stylistic/eslint-plugin-plus" peerDependencies
# sleep 1
# npm info   "@stylistic/eslint-plugin-ts" peerDependencies
# sleep 1
# npm info   "@svgr/babel-plugin-svg-em-dimensions" peerDependencies
# sleep 1
# npm info   "@svgr/babel-plugin-transform-svg-component" peerDependencies
# sleep 1
# npm info   "@svgr/babel-preset" peerDependencies
# sleep 1
# npm info   "@svgr/cli" peerDependencies
# sleep 1
# npm info   "@svgr/core" peerDependencies
# sleep 1
# npm info   "@svgr/plugin-jsx" peerDependencies
# sleep 1
# npm info   "@svgr/plugin-prettier" peerDependencies
# sleep 1
# npm info   "@svgr/plugin-svgo" peerDependencies
# sleep 1
# npm info   "@tabler/icons-react" peerDependencies
# sleep 1
# npm info   "@testing-library/dom" peerDependencies
# sleep 1
# npm info   "@testing-library/jest-dom" peerDependencies
# sleep 1
# npm info   "@testing-library/react" peerDependencies
# sleep 1
# npm info   "@types/babel__core" peerDependencies
# sleep 1
# npm info   "@types/babel__preset-env" peerDependencies
# sleep 1
# npm info   "@types/dateformat" peerDependencies
# sleep 1
# npm info   "@types/eslint" peerDependencies
# sleep 1
# npm info   "@types/jest" peerDependencies
# sleep 1
# npm info   "@types/js-beautify" peerDependencies
# sleep 1
# npm info   "@types/json-server" peerDependencies
# sleep 1
# npm info   "@types/node" peerDependencies
# sleep 1
#  npm info   "@types/prettier-linter-helpers" peerDependencies
#  sleep 1
#  npm info   "@types/react" peerDependencies
#  sleep 1
#  npm info   "@types/react-dom" peerDependencies
#  sleep 1
#  npm info   "@typescript-eslint/eslint-plugin" peerDependencies
#  sleep 1
#  npm info   "@typescript-eslint/parser" peerDependencies
#  sleep 1
#  npm info   "@typescript-eslint/rule-tester" peerDependencies
#  sleep 1
#  npm info   "@typescript-eslint/scope-manager" peerDependencies
#  sleep 1
#  npm info   "@typescript-eslint/typescript-estree" peerDependencies
#  sleep 1
#  npm info   "@vitejs/plugin-react" peerDependencies
#  sleep 1
#  npm info   "@vitejs/plugin-react-refresh" peerDependencies
#  sleep 1
#  npm info   "airbnb" peerDependencies
#  sleep 1
#  npm info   "airbnb-browser-shims" peerDependencies
#  sleep 1
#  npm info   "astroturf" peerDependencies
#  sleep 1
#  npm info   "autoprefixer" peerDependencies
#  sleep 1
#  npm info   "babel-plugin-inline-react-svg" peerDependencies
#  sleep 1
#  npm info   "babel-preset-vite" peerDependencies
#  sleep 1
#  npm info   "badge-maker" peerDependencies
#  sleep 1
#  npm info   "browserslist" peerDependencies
#  sleep 1
#  npm info   "constructs" peerDependencies
#  sleep 1
#  npm info   "cross-env" peerDependencies
#  sleep 1
#  npm info   "css-loader" peerDependencies
#  sleep 1
#  npm info   "cssnano" peerDependencies
#  sleep 1
#  npm info   "cssnano-preset-advanced" peerDependencies
#  sleep 1
#  npm info   "cssnano-preset-default" peerDependencies
#  sleep 1
#  npm info   "cz-conventional-changelog" peerDependencies
#  sleep 1
#  npm info   "cz-conventional-changelog-emoji" peerDependencies
#  sleep 1
#  npm info   "dotenv" peerDependencies
#  sleep 1
#  npm info   "emoji-regex" peerDependencies
#  sleep 1
#  npm info   "esbuild" peerDependencies
#  sleep 1
#  npm info   "eslint" peerDependencies
#  sleep 1
#  npm info   "eslint-config-airbnb" peerDependencies
#  sleep 1
#  npm info   "eslint-config-airbnb-typescript" peerDependencies
#  sleep 1
#  npm info   "eslint-config-prettier" peerDependencies
#  sleep 1
#  npm info   "eslint-import-resolver-typescript" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-base-style-config" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-eslint-comments" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-import" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-jest" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-jest-dom" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-jest-formatting" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-jsx-a11y" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-prettier" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-promise" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-react" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-react-hooks" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-react-refresh" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-regex" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-regexp" peerDependencies
#  sleep 1
#  npm info   "eslint-plugin-unused-imports" peerDependencies
#  sleep 1
#  npm info   "eslint-scope" peerDependencies
#  sleep 1
#  npm info   "esm-utils" peerDependencies
#  sleep 1
#  npm info   "get-tsconfig" peerDependencies
#  sleep 1
#  npm info   "husky" peerDependencies
#  sleep 1
#  npm info   "jest" peerDependencies
#  sleep 1
#  npm info   "jest-cli" peerDependencies
#  sleep 1
#  npm info   "js-beautify" peerDependencies
#  sleep 1
#  npm info   "lint-staged" peerDependencies
#  sleep 1
#  npm info   "node-notifier" peerDependencies
#  sleep 1
#  npm info   "postcss" peerDependencies
#  sleep 1
#  npm info   "postcss-cli" peerDependencies
#  sleep 1
#  npm info   "postcss-load-config" peerDependencies
#  sleep 1
#  npm info   "postcss-mixins" peerDependencies
#  sleep 1
#  npm info   "postcss-plugin" peerDependencies
#  sleep 1
#  npm info   "postcss-preset-env" peerDependencies
#  sleep 1
#  npm info   "postcss-simple-vars" peerDependencies
#  sleep 1
#  npm info   "postcss-svgo" peerDependencies
#  sleep 1
#  npm info   "precss" peerDependencies
#  sleep 1
#  npm info   "prettier" peerDependencies
#  sleep 1
#  npm info   "prettier-eslint" peerDependencies
#  sleep 1
#  npm info   "prettier-eslint-cli" peerDependencies
#  sleep 1
#  npm info   "prettier-linter-helpers" peerDependencies
#  sleep 1
#  npm info   "prettier-plugin-properties" peerDependencies
#  sleep 1
#  npm info   "pretty-quick" peerDependencies
#  sleep 1
#  npm info   "react-ts-jest" peerDependencies
#  sleep 1
#  npm info   "source-map-explorer" peerDependencies
#  sleep 1
#  npm info   "sugarss" peerDependencies
#  sleep 1
#  npm info   "ts-jest" peerDependencies
#  sleep 1
#  npm info   "tsx" peerDependencies
#  sleep 1
#  npm info   "typescript" peerDependencies
#  sleep 1
#  npm info   "typescript-eslint" peerDependencies
#  sleep 1
#  npm info   "vite" peerDependencies
#  sleep 1
#  npm info   "vite-plugin-checker" peerDependencies
#  sleep 1
#  npm info   "vite-plugin-env-compatible" peerDependencies
#  sleep 1
#  npm info   "vite-plugin-html" peerDependencies
#  sleep 1
#  npm info   "vite-plugin-svgr" peerDependencies
#  sleep 1
#  npm info   "vite-tsconfig-paths" peerDependencies
#  sleep 1
#  npm info   "xlsx" peerDependencies
}

#### SCRIPT STARTS HERE ####
verify-deps