import { createContext, useReducer } from "react";

export const PlinksContext = createContext();

//state = previous state, action = object passed into dispatch function from Home.jsx (or the json fetched)
export const plinksReducer = (state, action) => {
  switch (action.type) {
    case "SET_PLINKS":
      return {
        //gets all objects
        plinks: action.payload,
      };
    case "CREATE_PLINK":
      return {
        //adds a new object while adding on old ones from original state
        plinks: [action.payload, ...state.plinks]
      };
      default:
        return state
  }
};

//children in this case represents the entire App component since we are
//wrapping it with plinksconextprovider in main.jsx

export const PlinksContextProvider = ({ children }) => {
  //plinks property will become the payload of the action invoked
  const [state, dispatch] = useReducer(plinksReducer, {
    plinks: null,
  });
  //dispatch function takes an argument known as an action which, once
  //called, the Reducer function is then invoked, taking the action as a
  //property and using it to update the state

  return (
    //value will be available to all components within root App component
    <PlinksContext.Provider value={{...state, dispatch}}>
      {children}
      </PlinksContext.Provider>
  );
};
