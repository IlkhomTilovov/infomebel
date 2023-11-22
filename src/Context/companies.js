import React, { useReducer, createContext, useContext } from 'react'
import { componiesData } from '../mock/componies'
const Create_context = createContext()
const values = {
    componiesData
}
const reducer = (state, { key, value }) => {
    return state = {
        ...state,
        [key]: value
    }
}
function Companies({ children }) {
    const [state, funDispatch] = useReducer(reducer, values)
    return (
        <Create_context.Provider value={{ state, funDispatch }}>
            {children}
        </Create_context.Provider>
    )
}
const useCompanies = () => { 
    const context = useContext(Create_context)
    if(!context){
        throw new Error("Companies contextda mu'ammo bo'layapti")
    }
    return context
}
export { Companies, useCompanies }


