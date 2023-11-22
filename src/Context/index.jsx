import React from 'react'
import { Home } from './home'
import { Clients } from './clients'
import { Companies } from './companies'
import { CompaniesPage } from './companiesPage'

function Context({ children }) {
    return (
        <Home>
            <Companies>
                <CompaniesPage>
                    <Clients>
                        {children}
                    </Clients>
                </CompaniesPage>
            </Companies>
        </Home>
    )
}

export { Context }