import React, { useReducer, useRef, useContext } from 'react'
import { useClickOutside } from './useClickOutside';
import { GlobalContext } from './GlobalState';

const initialState = { rValue: true };

type State = {
  rValue: boolean
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

export const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null!);

  const {rValue} = useContext(GlobalContext);
  

  useClickOutside(ref, () => {
    console.log('clicked outside')
  })

  return (
    <div ref={ref}>
      { rValue && <h1>Visible</h1> }
      <button onClick={() => dispatch({ type: 'one'})}>Action One</button>
      <button onClick={() => dispatch({ type: 'two'})}>Action Two</button>
    </div>
  )
}
