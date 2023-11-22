import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Body, Container, FooterStyled, Header } from './styles'
import { IconFooter } from '../../Components/Footer/styled'

function Basic() {
    return (
        <Container>
            <Header>
                <Navbar />
            </Header>
            <Body>
                <Outlet />
            </Body>
            <FooterStyled>
                <Footer />
            </FooterStyled>
        </Container>
    )
}

export default Basic