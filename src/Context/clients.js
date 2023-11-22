import React, { useReducer, createContext, useContext } from 'react'
import { clientsData } from '../mock/clients'
const Create_context = createContext()
const values = {
    clientsData,
}
const reducer = (state, { key, value }) => {
    return state = {
        ...state,
        [key]: value
    }
}
function Clients({ children }) {
    const [state, funDispatch] = useReducer(reducer, values)
    return (
        <Create_context.Provider value={{ state, funDispatch }}>
            {children}
        </Create_context.Provider>
    )
}
const useClients = () => {
    const context = useContext(Create_context)
    if (!context) {
        throw new Error("clients contextda mu'ammo bo'layapti")
    }
    return context
}
export { Clients, useClients }