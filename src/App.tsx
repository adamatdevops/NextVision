import { useEffect, useState } from 'react';
import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
//  TODO: FIX This
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import config from './amplifyconfiguration.json';
// import { listFuturPenssionModel, createEducationClassesModel, createEducationTuitionModel, createSeniorityModel, createPenssionModel, create, ExpansensModel, createLiveHoodModel, createLaborModel, createMemberStatusModel, createIncomeModel } from './graphql/queries';
Amplify.configure(config);
const client = generateClient();

// import awsExports from "./aws-exports";
// import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import "@aws-amplify/ui-react/styles.css";

const App = () => {
    const [formState, setFormState] = useState < CreateTodoInput > ( initialState );
    const [todos, setTodos] = useState < Todo[] | CreateTodoInput[] > ( [] );

    useEffect( () => {
        fetchTodos();
    }, [] );


    const styles = {
        container: {
            width: 400,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 20,
        },
        todo: { marginBottom: 15 },
        input: {
            border: "none",
            backgroundColor: "#ddd",
            marginBottom: 10,
            padding: 8,
            fontSize: 18,
        },
        todoName: { fontSize: 20, fontWeight: "bold" },
        todoDescription: { marginBottom: 0 },
        button: {
            backgroundColor: "black",
            color: "white",
            outline: "none",
            fontSize: 18,
            padding: "12px 0px",
        },
    } as const;


    const newNextVision = await client.graphql( {
        query: createNextVision,
        variables: {
            input: {
                "First_Name": "Lorem ipsum dolor sit amet",
                "Last_Name": "Lorem ipsum dolor sit amet",
                "Email": "Lorem ipsum dolor sit amet",
                "Status": "Lorem ipsum dolor sit amet",
                "Age": 1020,
                "Gender": "Lorem ipsum dolor sit amet"
            }
        }
    } );
}

    export default App;