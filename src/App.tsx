import { useEffect, useState } from 'react';

import { generateClient } from 'aws-amplify/api';

import {createFuturePenssionModel,  } from './graphql/mutations';

import { listFuturPenssionModel, createEducationClassesModel, createEducationTuitionModel, createSeniorityModel, createPenssionModel, create, ExpansensModel, createLiveHoodModel, createLaborModel, createMemberStatusModel, createIncomeModel } from './graphql/queries';
import { type CreateFuturPenssionModelInput, type FuturPenssionModel } from './API';

const initialState: CreateFuturPenssionModelInput = { name: '', description: '' };
const client = generateClient();

// import { Amplify } from "aws-amplify";
// import awsExports from "./aws-exports";
// import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import '@aws-amplify/ui-react/styles.css';

import "@aws-amplify/ui-react/styles.css";
import { createTheme } from "@mantine/core";

const updatedFuturPenssionModel = await client.graphql({
    query: updateFuturPenssionModel,
    variables: {
        input: {
		"NumOfPenssionPlansum": 1020,
		"MonthlyPayment": 1020,
		"YearllyExpanse": 1020,
		"MothlyDividend": 1020,
		"YearlyDividend": 1020
	}
    }
});


const App = () => {
    const [formState, setFormState] = useState < CreateTodoInput > ( initialState );
    const [todos, setTodos] = useState < Todo[] | CreateTodoInput[] > ( [] );

    useEffect( () => {
        fetchTodos();
    }, [] );

    async function fetchTodos() {
        try {
            const todoData = await client.graphql( {
                query: listTodos,
            } );
            const todos = todoData.data.listTodos.items;
            setTodos( todos );
        } catch ( err ) {
            console.log( 'error fetching todos' );
        }
    }

    async function addTodo() {
        try {
            if ( !formState.name || !formState.description ) return;
            const todo = { ...formState };
            setTodos( [...todos, todo] );
            setFormState( initialState );
            await client.graphql( {
                query: createTodo,
                variables: {
                    input: todo,
                },
            } );
        } catch ( err ) {
            console.log( 'error creating todo:', err );
        }
    }

    return (
        <div style={styles.container}>
            <h2>Amplify Todos</h2>
            <input
                onChange={( event ) =>
                    setFormState( { ...formState, name: event.target.value } )
                }
                style={styles.input}
                value={formState.name}
                placeholder="Name"
            />
            <input
                onChange={( event ) =>
                    setFormState( { ...formState, description: event.target.value } )
                }
                style={styles.input}
                value={formState.description as string}
                placeholder="Description"
            />
            <button style={styles.button} onClick={addTodo}>
                Create Todo
            </button>
            {todos.map( ( todo, index ) => (
                <div key={todo.id ? todo.id : index} style={styles.todo}>
                    <p style={styles.todoName}>{todo.name}</p>
                    <p style={styles.todoDescription}>{todo.description}</p>
                </div>
            ) )}
        </div>
    );
};

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


const newNextVision = await client.graphql({
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
});

export default App;