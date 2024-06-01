/* App Functionality: Import Components Logic*/
import { Amplify } from 'aws-amplify';
/* import { withAuthenticator } from '@aws-amplify/ui-react'; */
// import { generateClient } from 'aws-amplify/api';
import config from "./amplifyconfiguration.json";
// import { type GettingStartedPage } from './API';

import React from 'react';
import { ConfigProvider } from 'antd';
import ThemeWrapper from './theme';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import heIL from 'antd/lib/locale/he_IL'; // Import Hebrew locale
import { GlobalStateProvider } from './context';
import router from './routes/routes';

/* TODO: Use only one .css file */
import "@aws-amplify/ui-react/styles.css";
import 'antd/dist/reset.css'; // Ant Design reset styles
import "./App.css"
import './main.css';
// import theme from "./theme";

Amplify.configure(config);
// const client = generateClient();


const App: React.FC = () => (
    <ConfigProvider locale={heIL} direction="rtl">
        <ThemeWrapper>
            <RouterProvider router={router} />
        </ThemeWrapper>
    </ConfigProvider>
);

export default App;