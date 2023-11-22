import React, { useReducer, createContext, useContext } from 'react'
const Create_context = createContext()
const values = {
    homeData: []
}
const reducer = (state, { key, value }) => {
    return state = {
        ...state,
        [key]: value
    }
}
function Home({ children }) {
    const [state, funDispatch] = useReducer(reducer, values)
    return (
        <Create_context.Provider value={{ state, funDispatch }}>
            {children}
        </Create_context.Provider>
    )
}
const useHome = () => {
    const context = useContext(Create_context)
    if (!context) {
        throw new Error("home contextda mu'ammo bo'layapti")
    }
    return context
}
export { Home, useHome }