// Troubleshooting: Declaration file for aws-exports
// When adding the following code to your index.ts (or main.ts; I usually rename
// my main.ts to index.ts just for my sanity)
// Create a aws-exports.d.ts file

/* Importing Frontend */
// import { ThemeProvider } from "@aws-amplify/ui-react";

// import { studioTheme } from "./ui-components";
import React from "react";
import ReactDOM from "react-dom/client";
import "@aws-amplify/ui-react/styles.css";
import "./index.css";
import App from "./App.tsx";

/* Importing Backend */
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import awsconfig from './aws-exports.js';
Amplify.configure( awsconfig );

// TODO: Add Web-Vitals on later stage
// import reportWebVitals from "./reportWebVitals.tsx";

Amplify.configure( amplifyconfig );


ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
    <React.StrictMode>
        <App signOut={undefined} user={undefined} />
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();