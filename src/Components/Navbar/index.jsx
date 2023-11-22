import "../../index.css"
import React, { useState } from 'react'
import { centerNavbar, leftNavbar, rightNavbar } from './mock'
import { CenterNavbar, Container, LeftNavbar, RightNavbar, Text, TextCenterNavbar } from './styled'
function Navbar() {
    const [click, setClick] = useState()
    return (
        <Container>
            {
                leftNavbar.map((i) => {
                    let Logo = i?.icon
                    return (
                        <LeftNavbar
                            key={i?.id}
                            onClick={() => setClick(i)}
                        >
                            <Logo />
                            <p>{i?.text}</p>
                        </LeftNavbar>

                    )
                })
            }
            <CenterNavbar>
                {
                    centerNavbar.map((i) => {
                        return (
                            <TextCenterNavbar
                                to={i?.to}
                                key={i?.id}
                                onClick={() => setClick(i)}
                            >
                                {
                                    ({ isActive }) => (
                                        <Text isActive={isActive ? 1 : 0}>
                                            {i.text}
                                        </Text>
                                    )
                                }
                            </TextCenterNavbar>
                        )
                    })
                }
            </CenterNavbar>
            {
                rightNavbar.map((i) => {
                    return (
                        <RightNavbar
                            key={i?.id}
                            onClick={() => setClick(i)}
                            isActive={i?.id === click?.id}
                        >
                            <p>{i?.text}</p>
                        </RightNavbar>
                    )
                })
            }
        </Container>
    )
}
export default React.memo(Navbar)