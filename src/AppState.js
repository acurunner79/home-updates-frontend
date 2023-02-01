import React, { useReducer, useContext, createContext } from "react";


const initialState = {
    apiUrl: "http://localhost:3000",
    locations: null,
    blankLocation: {
        id: 0,
        name: "",
    },
    blankProject: {
        name: "",
        priority: "",
        start: "",
        completion: "",
        estimate: 0,
        supply1: "",
        supply2: "",
        supply3: "",
        supply4: "",
        supply5: "",
        supply6: "",
        supply7: "",
        supply8: "",
        supply9: "",
        supply10: "",
        description: ""
    }
}

const reducer = (state, action) => {
    let newState
    switch(action.type){
        case "getLocations":
            newState = {...state, locations: action.payload};
            return newState;
            break;
        default:
            return state;
            break;
    }
}

const AppContext = createContext(null)

export const AppState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{state, dispatch}}>{props.children}</AppContext.Provider>
}

export const useAppState = () => {
    return useContext(AppContext)
}

