/* Main(aka index.tsx) Functionality: Import Routes & App
* Troubleshooting: Declaration file for aws-exports
* Create a aws-exports.d.ts file
*/

/* Importing Backend */
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import awsconfig from './aws-exports.js';

/* Importing Frontend */
/* import { ThemeProvider } from "@aws-amplify/ui-react"; */
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
// import router from './routes/routes';
import App from "./App";
import './main.css';
// import { GlobalStateProvider } from "./context";

Amplify.configure(awsconfig);
Amplify.configure(amplifyconfig);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//         <GlobalStateProvider>
//             <ColorSchemeWrapper> {/* Wrap your app in the color scheme provider */}
//                 <App/>
//             </ColorSchemeWrapper>
//         </GlobalStateProvider>
//     </React.StrictMode>,
// );


/* TODO: Add Web-Vitals on later stage
* import reportWebVitals from "./reportWebVitals.tsx";
* If you want to start measuring performance in your app:
- Pass a function to log results (for example: reportWebVitals(console.log))
- Or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals/reportWebVitals();
*/