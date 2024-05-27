import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

/* Builder UI */
import { BuilderPage } from "@builder.io/react";

/* importing Pages */
// import Root from "./routes/routes.tsx";
import Home from '../pages/home/Home';
import GettingStarted from '../pages/home/GettingStarted';
import EconomicStatusData from '../pages/economicSim/EconomicStatusData';
import EconomicForecastData from '../pages/economicSim/EconomicForecastData';
import SocialSimulator from "../pages/socialSim/SocialSimulator";
import AccountBalance from "../pages/economicSim/AccountBalance";
import ReviewAndLogout from "../pages/logout/ReviewAndLogout";

/* importing Error Pages */
import ErrorPage from "../pages/errors/ErrorPage";
import Error404 from "../pages/errors/Error404";
// import Error500 from "./pages/errors/Error500.tsx";
// import Error403 from "./pages/errors/Error403.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Root */}
            {/* GettingStarted */}
            {/* TODO: Make the GettingStarted page the entry point for the app */}
            <Route
                path="/"
                element={<GettingStarted />}
                errorElement={<ErrorPage />}
            />

            {/* Builder.io Demo Page */}
            <Route
                path="/builder-io"
                element={<BuilderPage />}
                errorElement={<ErrorPage />}
            />
            {/* Home */}
            <Route
                path="/home"
                element={<SocialSimulator />}
                errorElement={<ErrorPage />}
            >
                {/* SocialSimulator */}
                {/* Phase One: Provides the current/present social data */}
                {/* TODO: User feeds basic social details about himself or his family status that will be taken into account during the simulation */}
                <Route
                    index element={<Navigate to="/home/social-data" replace />}
                    errorElement={<Error404 />}
                />
                <Route
                    path="social-data"
                    element={<SocialSimulator />}
                    errorElement={<Error404 />}
                />
                {/* EconomicSimulator */}
                {/* Phase One: Provides the current/present economic account balance data */}
                <Route
                    index element={<Navigate to="/home/account-balance" replace />}
                    errorElement={<Error404 />}
                />
                <Route
                    path="account-balance"
                    element={<AccountBalance />}
                    errorElement={<Error404 />}
                />
            </Route>
            {/* EconomicSimulator */}
            {/* Phase Two: Provides a forecast of the economic data */}
            <Route
                path="incomes-outcomes"
                element={<EconomicStatusData />}
                errorElement={<Error404 />}
            />
            <Route
                path="forecast"
                element={<EconomicForecastData />}
                errorElement={<Error404 />}
            />
            <Route
                path="/review-and-logout"
                element={<ReviewAndLogout />}
                errorElement={<Error404 />}
            />
        </>
    )
);

export default router;
