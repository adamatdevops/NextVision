/* Importing Backend */

// Troubleshooting: Declaration file for aws-exports
// When adding the following code to your index.ts (or main.ts; I usually rename
// my main.ts to index.ts just for my sanity)
// Create a aws-exports.d.ts file

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
// import config from './aws-exports';
Amplify.configure(amplifyconfig);
/* Importing UI */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();