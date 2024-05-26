import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

/* Builder UI */
import { BuilderPage } from "@builder.io/react";

/* importing Pages */
// import Root from "./routes/routes.tsx";
import ThemeWrapper from '../theme'; // Import the theme wrapper
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
                element={
                    <ThemeWrapper>
                        <GettingStarted />
                    </ThemeWrapper>
                }
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
                element={
                    <ThemeWrapper>
                        <Home />
                    </ThemeWrapper>
                }
                errorElement={<ErrorPage />}
            >
                {/* SocialSimulator */}
                {/* Phase One: Provides the current/present social data */}
                {/* TODO: User feeds basic social details about himself or his family status that will be taken into account during the simulation */}
                <Route
                    path="social-data"
                    index element={<SocialSimulator />}
                    errorElement={<Error404 />}
                />
                {/* EconomicSimulator */}
                {/* Phase One: Provides the current/present economic account balance data */}
                <Route
                    path="account-balance"
                    index element={<AccountBalance />}
                    errorElement={<Error404 />}
                />
            </Route>
            {/* EconomicSimulator */}
            {/* Phase Two: Provides a forecast of the economic data */}
            <Route
                path="incomes-outcomes"
                element={
                    <ThemeWrapper>
                        <EconomicStatusData />
                    </ThemeWrapper>
                }
                errorElement={<Error404 />}
            />
            <Route
                path="forecast"
                element={
                    <ThemeWrapper>
                        <EconomicForecastData />
                    </ThemeWrapper>
                }
                errorElement={<Error404 />}
            />
            <Route
                path="/review-and-logout"
                element={
                    <ThemeWrapper>
                        <ReviewAndLogout />
                    </ThemeWrapper>
                }
                errorElement={<Error404 />}
            />
        </>
    )
);

export default router;
