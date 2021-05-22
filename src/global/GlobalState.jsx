import React from 'react'
import GlobalStateContext from "../Global/GlobalStateContext";

export default function GlobalState(props) {

    const [userOptions, setUserOptions] = React.useState({})

    const states = {userOptions}
    const setters = {setUserOptions}
    
    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
