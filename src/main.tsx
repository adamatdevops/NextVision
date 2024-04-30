/* Main(aka index.tsx) Functionality: Import Routes */

// Troubleshooting: Declaration file for aws-exports
// When adding the following code to your index.ts (or main.ts; I usually rename
// my main.ts to index.ts just for my sanity)
// Create a aws-exports.d.ts file

/* Importing Frontend */
// import { ThemeProvider } from "@aws-amplify/ui-react";

// import { studioTheme } from "./ui-components";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import App from "./App.tsx";

/* existing imports */
import Root from "./routes/routes.tsx";
import ErrorPage from "./pages/errors/ErrorPage.tsx";

/* Builder UI */
import { BuilderPage } from "@builder.io/react";

/* Importing Backend */
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import awsconfig from './aws-exports.js';
Amplify.configure( awsconfig );
Amplify.configure( amplifyconfig );
// TODO: Add Web-Vitals on later stage
// import reportWebVitals from "./reportWebVitals.tsx";


const router = createBrowserRouter( [
    /* Root */
    {
        path: "/",
        element: <Root />,
        // element: <div>Hello world!</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/builder-demo", /* or '/*' */
        element: <BuilderPage />,
        // element: <div>Hello world!</div>,
        errorElement: <ErrorPage />,
    },
    /* Login Page */
    /* {
        path: "/login",
        element: <entryPageModel />,
        // Nested Routes
        children: [
        {
        path: "register/:registerId",
        element: <register />,
        },
        {
        path: "signIn/:signInId",
        element: <SignIn />,
        },
        {
        path: "signOut/:signOutId",
        element: <signOut />,
        },
    ],
    }, */
    /* Social Simulator */
    /* {
        path: "/social-sim",
        element: <SocialSimulator />,
        // element: <div>Hello world!</div>,
    }, */
    /* Economic Simulator */
    /* {
        path: "/economic-sim",
        element: <EconomicSimulator />,
        // element: <div>Hello world!</div>,
    }, */
    /* Ending Page */
    /* {
        path: "/end",
        element: <EndingPage />,
        // element: <div>Hello world!</div>,
    }, */
    /* ErrorPage */
    /* {
        path: "/error",
        element: <ErrorPage />,
        // element: <div>Hello world!</div>,
    }, */
] );


ReactDOM.createRoot( document.getElementById( "root" )! ).render(
    <React.StrictMode>
        <App signOut={undefined} user={undefined} />
        <RouterProvider router={router} />
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();