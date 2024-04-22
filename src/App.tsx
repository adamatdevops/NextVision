import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { generateClient } from "aws-amplify/api";
// import { createTodo } from './graphql/mutations';
// mport * as mutations from "./graphql/mutation";
// import * as queries from "./graphql/queries";

import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
} from "@aws-amplify/ui-react";


// import * as mutations from "./graphql/mutations"; NOTE: Later
// import * as queries from "./graphql/queries";

Amplify.configure( awsExports ); // Configure Amplify the usual way

function App( signOut ) {
    const [count, setCount] = useState( 0 )

    return (
        <View className="App">
            <Card>
                <Image src={logo} className="App-logo" alt="logo" />
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator( App );