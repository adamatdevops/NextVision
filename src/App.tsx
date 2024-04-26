import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
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