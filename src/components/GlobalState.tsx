import React, { createContext, useReducer } from 'react';

export const initialValues = {
  rValue: true,
  turnOn: () => {},
  turnOff: () => {}
}

export const GlobalContext = createContext(initialValues);

// type State = {
//   rValue: boolean
// }

interface State {
  rValue: boolean;
}
// explicit union
type Action = {
  type: "one" | "two";
}

// option for seperate payload options
// type Action = { type: "one", payload: any } | { type: "two" }

// for more heavy duty use of reducer with different type/payloads
// type Action =
//   | { type: "one" }
//   | { type: "two" }
//   | { type: 'tow'};


function reducer(state: State, action: Action) {
  switch(action.type) {
    case 'one': 
      return { rValue: true};
    case 'two': 
      return { rValue: false};
    default: 
      return state;
  }
}

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);


  return (
    <GlobalContext.Provider value={{
      rValue: state.rValue,
      turnOn: () => dispatch({ type: 'one'}),
      turnOff: () => dispatch({ type: 'two'})
    }}>

      {children}
    </GlobalContext.Provider>
  )
}