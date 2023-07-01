import React, { useReducer, useContext, createContext } from "react";


const initialState = {
    apiUrl: "http://localhost:3000",
    locations: null,
    projectsList: null,
    newLocation: {
        id: 0,
        name: "",
    },
    location_id: 0,
    newProject: {
        location_id: 0,
        id: 0,
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
    },
    editLocation: {
        id: 0,
        name: "",
    },
    editProject: {
        location_id: 0,
        id: 0,
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

        case "getProjectsList":
            newState = {...state, projectsList: action.payload};
            return newState;
        
        case "select":
            newState = {...state, editProject: action.payload}
            // console.log('select appstate', state)
            return newState

        case "selectId":
            newState = {...state, location_id: action.payload}
            // console.log('select appstate', state)
            return newState
        default:
            return state;
            
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

