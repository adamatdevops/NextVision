/* Main(aka index.tsx) Functionality: Import Routes */

// Troubleshooting: Declaration file for aws-exports
// When adding the following code to your index.ts (or main.ts; I usually rename
// my main.ts to index.ts just for my sanity)
// Create a aws-exports.d.ts file

/* Importing Frontend */
import { ThemeProvider } from "@aws-amplify/ui-react";
import nextVisionTheme from "./components/ui/theme/nextVisionTheme";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./main.css";
import "@aws-amplify/ui-react/styles.css";
import App from "./App.tsx";

/* importing Pages */
// import Root from "./routes/routes.tsx";
import GettingStarted from "./pages/home/GettingStarted.tsx";
import Login from "./pages/home/Login.tsx";
import SocialSimulator from "./pages/socialSim/SocialSimulator.tsx";
import SocialData from "./pages/socialSim/SocialData.tsx";
import EconomicSimulator from "./pages/economicSim/EconomicSimulator";
import EconomicStatusData from "./pages/economicSim/EconomicStatusData.tsx";
import EconomicForecastData from "./pages/economicSim/EconomicForecastData.tsx";
import Logout from "./pages/logout/Logout.tsx";
import ReviewAndSubmit from "./pages/logout/ReviewAndSubmit.tsx";
import Exit from "./pages/logout/Exit.tsx";

/* Mockup*/
// import ProfilesPage from "./pages/home/test/ProfilesPage.tsx";
// import ProfilePage from "./pages/home/test/ProfilePage.tsx";

/* importing Error Pages */
import ErrorPage from "./pages/errors/ErrorPage.tsx";
import Error404 from "./pages/errors/Error404.tsx";

/* Builder UI */
import { BuilderPage } from "@builder.io/react";

/* Importing Backend */
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import awsconfig from './aws-exports.js';

Amplify.configure(awsconfig);
Amplify.configure(amplifyconfig);
// TODO: Add Web-Vitals on later stage
// import reportWebVitals from "./reportWebVitals.tsx";


const router = createBrowserRouter([
    /* Root */
    /* {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    }, */
    /* Builder.io Demo Page */
    {
        path: "/builder-io",
        element: <BuilderPage />,
        errorElement: <ErrorPage />,
    },
    /* GettingStarted */
    {
        path: "/getting-started",
        element: <GettingStarted />,
        errorElement: <Error404 />,
        children: [
            /* Login */
            {
                path: "/getting-started/login/:profileId",
                element: <Login />,
                errorElement: <Error404 />,
            },
        ],
    },
    /* SocialSimulator */
    {
        path: "/social-sim",
        element: <SocialSimulator />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/social-sim/social-data/:profileId",
                element: <SocialData />,
                errorElement: <Error404 />,
            },
        ],
    },
    /* EconomicSimulator*/
    {
        path: "/economic-sim",
        element: <EconomicSimulator />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/economic-sim/economic-status-data/:profileId",
                element: <EconomicStatusData />,
                errorElement: <Error404 />,
            },
            {
                path: "/economic-sim/economic-forecast-data/:profileId",
                element: <EconomicForecastData />,
                errorElement: <Error404 />,
            },
        ],
    },
    /* {
        path: "/accountBalance",
        element: <EconomicSimulatorModel />,
        errorElement: <Error404 />,
        children: [
        {
        path: "statement/:registerId",
        element: <statementPage />,
        errorElement: <Error404 />,
        },
        {
        path: "forecast/:signInId",
        element: <forecastPage />,
        errorElement: <Error404 />,
        },
    ],
    }, */
    /* LogoutModel */
    {
        path: "/logout",
        element: <Logout />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/logout/:reviewAndSubmit/:profileId",
                element: <ReviewAndSubmit />,
                errorElement: <Error404 />,
            },
            {
                path: "/logout/exit",
                element: <Exit />,
                errorElement: <Error404 />,
            },
        ],
    },
]);

/* Mockup */
//{
//    path: "/profiles",
//    element: <ProfilesPage />,
//    errorElement: <Error404 />,
//    children: [
//        {
//            path: "/profiles/:profileId",
//            element: <ProfilePage />,
//            errorElement: <Error404 />,
//        },
//    ],
//},

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

//ReactDOM.createRoot(document.getElementById("root")!).render(
//    <React.StrictMode>
//    < RouterProvider router = { router } />
//        <App />
//    </React.StrictMode>,
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();