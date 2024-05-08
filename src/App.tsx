/* App Functionality: Import Components Logic*/
import { Amplify } from 'aws-amplify';
/* import { withAuthenticator } from '@aws-amplify/ui-react'; */
// import { generateClient } from 'aws-amplify/api';
import config from "./amplifyconfiguration.json";

/* TODO: Use only one .css file */
import "@aws-amplify/ui-react/styles.css";
import "./App.css"
// import { type GettingStartedPage } from './API';

Amplify.configure( config );

// const client = generateClient();

function App() {
    return (
        <div>
            <h1> Hello World </h1>
        </div>
    );
}

//const App = () => {
//
//    return (
//        <>
//            <h1>Hello </h1>
//        </>
//    );
//}

/* export default withAuthenticator(App); */
export default App;