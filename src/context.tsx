/* tslint:disable */
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define the shape of the state
interface State {
    incomes: string[];
    outcomes: string[];
    accountStatus: Record<string, any>;
}

// Define action types
type Action =
    | { type: 'SET_INCOME'; payload: string[] }
    | { type: 'SET_OUTCOME'; payload: string[] }
    | { type: 'SET_ACCOUNT_STATUS'; payload: Record<string, any> };

// Initial state
const initialState: State = {
    incomes: [],
    outcomes: [],
    accountStatus: {},
};

// Create the context
export const GlobalStateContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => undefined,
});

// Reducer function
const globalReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_INCOME':
            return { ...state, incomes: action.payload };
        case 'SET_OUTCOME':
            return { ...state, outcomes: action.payload };
        case 'SET_ACCOUNT_STATUS':
            return { ...state, accountStatus: action.payload };
        default:
            return state;
    }
};

// Context provider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Custom hook to use the global state
export const useGlobalState = () => useContext(GlobalStateContext);
