# TAURI APP




Tauri is a framework to build desktop applications with any frontend framework and a Rust core. Each app consists of two parts:

1. Rust binary that creates the windows and exposes native functionality to those windows
2. Frontend of your choice that produces the user interface inside the window
In the following, we will first scaffold the frontend, set up the Rust project, and lastly show you how to communicate between the two.

## Objectives

1. Building a Desktop Client-App
2. Design the Desktop Client-App to be able to transfer files

## Project Description

Prerequisites:

- Installing Rust
- Installing Compilers
- Install Application Framework
- Installing Tauri
- Choosing Front-End Proggramming Language and Install

## Setting Up A Working Environment

- Development Environment: Mac OS X or Linux
  __NOTE:__ It is also possible to install & develop this application on
  windows-based systems.

- Installing Rust

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
brew install rustup-init
```

- Installing Tauri

```sh
sh <(curl https://create.tauri.app/sh)
```

- Installing Compliers & Package Managers

```sh
brew install npm
brew install yarn yarn-completion
brew install nvm
brew install rustc-completion
source $HOME/.cargo/env
rustup update
rustc --version

```

- Install Application Framework

```sh
npm install npx
npx create-react-app@latest --template typescript .
```

- Installing Dependencies

```sh
yarn add -D @tauri-apps/cli cross-env
yarn add -D @tauri-apps/api
```

- Installing Additional Project Dependencies

```sh
yarn add -D eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks postcss prettier eslint-config-prettier
```

Add at the and of package.json file the following section:

```sh
  "resolutions": {
    "mini-css-extract-plugin": "2.8.0"
  }
```

- Ajusting dependencies

Configure this section to your tauri.conf.json file:

```sh
  "build": {
    "beforeBuildCommand": "yarn build",
    "beforeDevCommand": "yarn cross-env BROWSER=none yarn start",
    "devPath": "http://localhost:3000",
    "distDir": "../build",
    "withGlobalTauri": true
  }
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

During this project we will run:

```sh
yarn tauri init
```

Follow by:

```sh
yarn tauri init
yarn run bulid
```

Now we can run:

```sh
yarn tauri dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Building the application UI

We'll start by installing necessary dependencies:

```sh
yarn add @tauri-apps/api @mantine/core @mantine/hooks @modulz/radix-icons react-router-dom
```

Be sure to check out [Mantine](https://mantine.dev/).
