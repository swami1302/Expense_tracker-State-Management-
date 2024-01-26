import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//inital state
const initialState = {
    transaction: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ],
}

//create context

export const GlobalContext = createContext(initialState);


//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); //useReducer is to define logic with dispatch function that used to manipulate logic

    //Action (funtion that will be invoked)
    //delete transaction -->function type for invoking in reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id,
        })
    }
    //add transaction -->function type for invoking in reducer
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    //return the Global context to its childeren for accessing the global state
    return (<GlobalContext.Provider value={{
        transaction: state.transaction,deleteTransaction,addTransaction
    }}>
        {/* Elements that wrraped around global context in app.jsx that gets the value mentioned using useContext() */}
        {children} 
    </GlobalContext.Provider>)
}
