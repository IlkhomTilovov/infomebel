import React from 'react'
import { BodyTitle, Container } from './styled'

function Title(props) {
    const { object: { text } } = props
    return (
        <Container>
            <BodyTitle>
                <p>{text}</p>
            </BodyTitle>
        </Container>
    )
}

export default React.memo(Title)