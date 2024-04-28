import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import config from "./amplifyconfiguration.json";
import { createTodo, updateTodo, deleteTodo } from "./graphql/mutations";
import { listTodos } from './graphql/queries';

import '@aws-amplify/ui-react/styles.css';

Amplify.configure( config );

const client = generateClient();
const result = await client.graphql( {
    query: createTodo,
    variables: {
        input: {
            name: 'My first todo!'
        }
    }
} );

function App( { signOut, user } ) {

    return (
        <>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
        </>
    );
}

export default withAuthenticator(App);