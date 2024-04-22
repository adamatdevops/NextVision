import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { useState } from 'react'
import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@aws-amplify/ui-react/styles.css';

// import { generateClient } from "aws-amplify/api";
// import { createTodo } from './graphql/mutations';
// mport * as mutations from "./graphql/mutation";
// import * as queries from "./graphql/queries";

import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    View,
    Card,
} from "@aws-amplify/ui-react";


// import * as mutations from "./graphql/mutations"; NOTE: Later
// import * as queries from "./graphql/queries";

Amplify.configure( awsExports ); // Configure Amplify the usual way

function App( ) {
    const [count, setCount] = useState( 0 )

    return (
        <Flex
            direction={{ base: 'column', large: 'row' }}
            maxWidth="32rem"
            padding="1rem"
            width="100%"
        >
            <Image
                alt="Abstract art"
                height="21rem"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
            />
            <Flex justifyContent="space-between" direction="column">
                <Heading level={3}>Abstract art</Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
                    sed cras ornare arcu dui. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse.
                </Text>
                <Button
                    variation="primary"
                    onClick={() => alert( 'Added item to cart!' )}
                >
                    Add to Cart
                </Button>
            </Flex>
        </Flex>
    );
}

export default withAuthenticator( App );