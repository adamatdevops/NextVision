# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Great! Let's focus on creating an Amplify application. Here's a checklist to guide us through the process:

### Project Requirements and Implementation Plan

#### Application Environment:

1. **Cloud & Platform:**
   - **Amazon AWS VPC**

2. **Services:**
   - **AWS Amplify (Gen 1)**

3. **Code Environment:**
   - **Backend:** TypeScript
   - **Front-End:** React (tsx)
   - **Bundler:** ViteJS
   - **JavaScript Engine:** NodeJS
   - **Package Manager:** NPM
   - **Linter:** ESLint
   - **Formatter:** Prettier
   - **Parser:** Typescript-ESLint
   - **ECMA Version:** ES2020
   - **Components Library:** @mantine & Ant Design

#### Key Objectives:

1. **Build a financial account web simulator.**
2. **No User & Password:** Access directly through the homepage.
3. **Less than 4 Pages:** Keep the application concise.
4. **DRY Environment:** Maintain a clean and reusable codebase.
5. **User-Friendly GUI:** Ensure the interface is easy to use.
6. **Simplicity:** Keep the application as simple as possible.

#### Application Features:

1. **Monthly Account Inputs:** Users can input their custom monthly incomes and outcomes.
2. **Fixed Data Generation:** Some fields will have fixed data that generates automatically.
3. **Sophisticated Account Calculator:** Structure the application as an advanced calculator.
4. **Current Account Status:** Show current account status including summary, incomes, and outcomes.
5. **Future Scenario Simulation:** Simulate future account status based on current inputs.
6. **User Inputs for Future Status:** Combine fixed data fields and user-fed fields for future scenarios.

#### Useful Resources:

- [React Context API Guide by freeCodeCamp](https://www.freecodecamp.org/news/context-api-in-react/)
- [Legacy React Context Documentation](https://legacy.reactjs.org/docs/context.html)
- [Amplify, React, and TypeScript Guide by swalker326](https://dev.to/swalker326/amplify-react-and-typescript-197i)
- [AWS Amplify Setup Guide](https://docs.amplify.aws/gen1/react/start/getting-started/setup/)
- [Building Scalable Web Apps with AWS Amplify and TypeScript by Dhiwise](https://www.dhiwise.com/post/building-scalable-web-apps-with-aws-amplify-typescript)

### Implementation Plan

**Starting Project Structure (DRY Principles):**

- src:
        - components: Reusable UI components (from Mantine, Ant Design, and custom).
        - context: Global application state management using React Context API.
        - pages: Page components (Homepage, Account Summary, Scenario Simulator, etc.).
        - services: Functions for interacting with Amplify (API calls, storage, etc.).
        - utils: Helper functions, data models, constants.
index.html: Entry point.
vite.config.ts: Vite configuration.

**Current Working Project Structure (Active):**

```sh
.
├── .DS_Store
├── .browserslistrc
├── .commitlintrc.json
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .jsbeautifyrc.json
├── .markdown-lint.yml
├── .npmrc
├── .nvmrc
├── .prettierignore
├── .prettierrc.json
├── .svgrrc
├── LICENSE
├── README.md
├── amplify
│   ├── #current-cloud-backend
│   │   ├── amplify-meta.json
│   │   ├── auth
│   │   │   └── nextvision6bb00ca2
│   │   │       ├── build
│   │   │       │   ├── nextvision6bb00ca2-cloudformation-template.json
│   │   │       │   └── parameters.json
│   │   │       └── cli-inputs.json
│   │   ├── awscloudformation
│   │   │   └── build
│   │   │       ├── auth
│   │   │       │   └── nextvision6bb00ca2
│   │   │       │       └── build
│   │   │       │           └── nextvision6bb00ca2-cloudformation-template.json
│   │   │       ├── awscloudformation
│   │   │       │   └── build
│   │   │       │       └── root-cloudformation-stack.json
│   │   │       ├── root-cloudformation-stack.json
│   │   │       └── storage
│   │   │           └── CommunitySimulator
│   │   │               └── build
│   │   │                   └── cloudformation-template.json
│   │   ├── backend-config.json
│   │   ├── storage
│   │   │   └── CommunitySimulator
│   │   │       ├── build
│   │   │       │   ├── cloudformation-template.json
│   │   │       │   └── parameters.json
│   │   │       └── cli-inputs.json
│   │   └── tags.json
│   ├── .config
│   │   ├── local-aws-info.json
│   │   ├── local-env-info.json
│   │   └── project-config.json
│   ├── README.md
│   ├── backend
│   │   ├── amplify-meta.json
│   │   ├── auth
│   │   │   └── nextvision6bb00ca2
│   │   │       ├── build
│   │   │       │   ├── nextvision6bb00ca2-cloudformation-template.json
│   │   │       │   └── parameters.json
│   │   │       └── cli-inputs.json
│   │   ├── awscloudformation
│   │   │   └── build
│   │   │       ├── auth
│   │   │       │   └── nextvision6bb00ca2
│   │   │       │       └── build
│   │   │       │           └── nextvision6bb00ca2-cloudformation-template.json
│   │   │       ├── awscloudformation
│   │   │       │   └── build
│   │   │       │       └── root-cloudformation-stack.json
│   │   │       ├── root-cloudformation-stack.json
│   │   │       └── storage
│   │   │           └── CommunitySimulator
│   │   │               └── build
│   │   │                   └── cloudformation-template.json
│   │   ├── backend-config.json
│   │   ├── storage
│   │   │   └── CommunitySimulator
│   │   │       ├── build
│   │   │       │   ├── cloudformation-template.json
│   │   │       │   └── parameters.json
│   │   │       └── cli-inputs.json
│   │   ├── tags.json
│   │   └── types
│   │       └── amplify-dependent-resources-ref.d.ts
│   ├── cli.json
│   ├── hooks
│   │   ├── README.md
│   │   ├── post-push.sh.sample
│   │   └── pre-push.js.sample
│   └── team-provider-info.json
├── amplify.yml
├── dist
│   ├── assets
│   │   └── index-Bt6FcrB2.js
│   ├── index.html
│   └── vite.svg
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.json
├── public
│   └── vite.svg
├── src
│   ├── API.ts
│   ├── App.css
│   ├── App.tsx
│   ├── active.module.css
│   ├── amplifyconfiguration.json
│   ├── assets
│   │   ├── img
│   │   │   ├── gettingStarted
│   │   │   └── login
│   │   └── react.svg
│   ├── aws-exports.js
│   ├── builder
│   │   ├── inputs
│   │   └── outputs
│   ├── builder-registry.ts
│   ├── builder.css
│   ├── builder.tsx
│   ├── colorScheme.tsx
│   ├── components
│   │   ├── Agenda.md
│   │   ├── models
│   │   │   ├── economicSimulaor
│   │   │   │   ├── EconomicSimulator.tsx
│   │   │   │   ├── IncomesModel.tsx
│   │   │   │   ├── OutcomesModel.tsx
│   │   │   │   └── index.tsx
│   │   │   └── socialSimulator
│   │   │       ├── EducationModel.tsx
│   │   │       ├── MembershipModel.tsx
│   │   │       ├── SeniorityModel.tsx
│   │   │       ├── SocialSimulator.tsx
│   │   │       └── index.tsx
│   │   └── ui
│   │       ├── buttons
│   │       └── proggress
│   ├── context.ts
│   ├── focus.module.css
│   ├── graphql
│   │   ├── mutations.ts
│   │   ├── queries.ts
│   │   └── subscriptions.ts
│   ├── hooks
│   ├── main.css
│   ├── main.tsx
│   ├── pages
│   │   ├── economicSim
│   │   │   ├── AccountBalanace.tsx
│   │   │   ├── EconomicForecastData.tsx
│   │   │   ├── EconomicSimulator.tsx
│   │   │   ├── EconomicStatusData.tsx
│   │   │   └── css
│   │   ├── errors
│   │   │   ├── Error404.tsx
│   │   │   └── ErrorPage.tsx
│   │   ├── home
│   │   │   ├── GettingStarted.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── css
│   │   │   │   └── GettingStarted.module.css
│   │   │   └── test
│   │   │       ├── ProfilePage.tsx
│   │   │       └── ProfilesPage.tsx
│   │   ├── logout
│   │   │   ├── Exit.tsx
│   │   │   ├── Logout.tsx
│   │   │   └── ReviewAndSubmit.tsx
│   │   └── socialSim
│   │       ├── SocialData.tsx
│   │       └── SocialSimulator.tsx
│   ├── reportWebVitals.tsx
│   ├── routes
│   │   └── routes.tsx
│   ├── theme.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.tsbuildinfo
└── vite.config.ts
```

#### Step 1: Initial Setup

1. **Install and Configure Amplify CLI:**

   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   amplify init
   ```

2. **Set Up ViteJS Project:**

   ```bash
   npm create vite@latest
   cd project-name
   npm install
   ```

#### Step 2: Backend Setup

1. **Add Amplify Auth (if needed in the future):**

   ```bash
   amplify add auth
   amplify push
   ```

2. **Add Amplify API:**

   ```bash
   amplify add api
   amplify push
   ```

3. **Add Amplify Storage:**

(NOTE: users dont need to be able to upload documents or images related to their finances. Will we need a storage?)

   ```bash
   amplify add storage
   amplify push
   ```

#### Step 3: Frontend Setup

1. **Install Required Libraries:**

   ```bash
   npm install @mantine/core @mantine/hooks @mantine/dates @ant-design/icons
   ```

2. **Set Up ESLint and Prettier:**

   ```bash
   npm install eslint prettier eslint-plugin-react eslint-plugin-import eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
   ```

3. **Configure ESLint and Prettier:**
   - Create `.eslintrc.json` and `.prettierrc` files with appropriate configurations.

#### Step 4: Developing Features

1. **Create React Components for Pages:**
   - Homepage
   - Account Summary
   - Incomes & Outcomes
   - Future Scenario

2. **Implement State Management with Context API:**

The Context API will be crucial for maintaining DRY principles. A single global state will hold:

- Account Data: Current account balance, income sources, expense categories, and transactions.
- Scenario Data: User-defined changes to income, expenses, etc., for the simulation.
UI State: Active page, form inputs, error messages, etc.
- The Context Provider will manage state updates and make the data available to all child components.

3. **Develop Core Functionalities:**
   - Monthly inputs
   - Fixed data generation
   - Account status calculations
   - Future scenario simulation

4. **Page Breakdown:**

Homepage:

- Getting Started Page: Welcome Page with nice theme and layout
- Introduction to the simulator.
- Button to start using the simulator.

Account Summary:

- Display current account balance, income, and expenses.
- Allow the user to input/edit some of their financial & social details.

Scenario Simulator:

- Let the user adjust future income, expenses, etc.
- Display the resulting future account status.
- Create ashort summary compare section

#### Step 5: Testing

1. **Write Unit Tests:**
   - Use testing libraries like Jest and React Testing Library.

2. **Integration Testing:**
   - Ensure that all components and services work together seamlessly.

#### Step 6: Deployment

1. **Set Up Hosting with Amplify:**

   ```bash
   amplify add hosting
   amplify publish
   ```

2. **Configure CI/CD:**
   - Set up Amplify Console for continuous deployment from your repository.

#### Step 7: Monitoring & Maintenance

1. **Set Up Monitoring with CloudWatch:**
   - Ensure that logs and metrics are being collected.

2. **Implement Logging:**
   - Add logging for key actions and errors.

#### Step 8: Documentation

1. **Create Documentation for Setup and Usage:**
   - Include instructions in a README file.
2. **API Documentation:**
   - Document API endpoints and usage.

Would you like to start with the initial setup, or do you need help with a specific part of this plan?

## Amplify Application Checklist

### 1. **Initial Setup:**

- [x] **Install Amplify CLI:** Ensure the Amplify CLI is installed.
- [x] **Configure Amplify CLI:** Set up Amplify CLI with your AWS credentials.
- [x] **Initialize Amplify Project:** Create a new Amplify project.

### 2. **Backend Setup:**

- [x] **Add Authentication:** Set up user authentication (e.g., Cognito).
- [x] **Add API:** Create GraphQL or REST API (e.g., using AWS AppSync).
- [x] **Add Storage:** Configure storage (e.g., S3 buckets for file storage).
- [x] **Add Database:** Set up a database (e.g., DynamoDB).

### 3. **Frontend Setup:**

- [x] **Choose Frontend Framework:** Decide on a framework (e.g., React, Vue, Angular).
- [x] **Integrate Amplify:** Integrate Amplify with the frontend framework.
- [x] **Add UI Components:** Use Amplify UI components for authentication and other functionalities.

### 4. **Development:**

- [ ] **Develop Features:** Implement core features of the application.
- [ ] **Connect Frontend to Backend:** Ensure the frontend can communicate with the backend services.

### 5. **Testing:**

- [ ] **Unit Testing:** Write unit tests for frontend and backend.
- [ ] **Integration Testing:** Perform integration tests to ensure all components work together.

### 6. **Deployment:**

- [ ] **Configure Hosting:** Set up hosting for the application (e.g., Amplify Hosting).
- [ ] **Deploy Application:** Deploy the application to the cloud.
- [ ] **Setup CI/CD:** Configure continuous integration and delivery pipelines.

### 7. **Monitoring & Maintenance:**

- [ ] **Set Up Monitoring:** Use AWS CloudWatch for monitoring.
- [ ] **Logging:** Implement logging for the application.
- [ ] **Error Handling:** Ensure robust error handling and reporting.

### 8. **Documentation:**

- [ ] **Document Setup:** Write documentation for setting up the project.
- [ ] **User Guide:** Create a user guide for using the application.
- [ ] **API Documentation:** Document the APIs.

Is there anything specific within this checklist that you’d like to focus on first, or any additional steps unique to your project that we should include?
