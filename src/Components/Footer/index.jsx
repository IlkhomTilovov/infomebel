import React from 'react'
import { Container, FooterContainer, IconFooter, LogoFooter, TextFooter } from './styled'
import { Icons } from '../../Assets'
const { Logo, DropTop } = Icons
function Footer() {
    return (
        <Container>
            <FooterContainer>
                <LogoFooter>
                    <Logo />
                    <p>Info Mebel</p>
                </LogoFooter>
                <TextFooter>
                    <p>Biz bilan bo’ling va biz sizlar bilanmiz!</p>
                    <IconFooter>
                        <DropTop />
                    </IconFooter>
                </TextFooter>
            </FooterContainer>
        </Container>
    )
}

export default React.memo(Footer)