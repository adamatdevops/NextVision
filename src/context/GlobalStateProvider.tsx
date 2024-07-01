import React, { createContext, useReducer } from 'react';
import {
  CurrentIncomesProvider,
  currentIncomesInitialState,
  currentIncomesReducer,
} from './CurrentIncomesGSP';
import {
  CurrentExpensesProvider,
  currentExpensesInitialState,
  currentExpensesReducer,
} from './CurrentExpensesGSP';
import {
  FutureIncomesProvider,
  futureIncomesInitialState,
  futureIncomesReducer,
} from './FutureIncomesGSP';
import {
  FutureExpensesProvider,
  futureExpensesInitialState,
  futureExpensesReducer,
} from './FutureExpensesGSP';

export const GlobalStateContext = createContext({});

const initialState = {
  currentIncomes: currentIncomesInitialState,
  currentExpenses: currentExpensesInitialState,
  futureIncomes: futureIncomesInitialState,
  futureExpenses: futureExpensesInitialState,
};

const rootReducer = (state, action) => ({
  currentIncomes: currentIncomesReducer(state.currentIncomes, action),
  currentExpenses: currentExpensesReducer(state.currentExpenses, action),
  futureIncomes: futureIncomesReducer(state.futureIncomes, action),
  futureExpenses: futureExpensesReducer(state.futureExpenses, action),
});

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
