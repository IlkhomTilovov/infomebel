import React, { useReducer, createContext, useContext } from 'react'
import { headersCarousel, categoryData, productsData, footers } from '../mock/componiesPage'
const Create_context = createContext()
const values = {
    productsData,
    categoryData,
    headersCarousel,
    categoryId: 1,
    footers,
}
const reducer = (state, { key, value }) => {
    return state = {
        ...state,
        [key]: value
    }
}
function CompaniesPage({ children }) {
    const [state, funDispatch] = useReducer(reducer, values)
    return (
        <Create_context.Provider value={{ state, funDispatch }}>
            {children}
        </Create_context.Provider>
    )
}
const useCompaniesPage = () => {
    const context = useContext(Create_context)
    if (!context) {
        throw new Error("CompaniesPage contextda mu'ammo bo'layapti")
    }
    return context
}
export { CompaniesPage, useCompaniesPage }