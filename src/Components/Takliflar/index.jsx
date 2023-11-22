import React from 'react'
import { Container, Icon, Text, TextTitle, Wrapper, WrapperCon } from './styled'
import { data } from './mock'

function Takliflar(props) {
    const { object: { textTitle } } = props
    return (
        <Container>
            <TextTitle>
                <p>{textTitle}</p>
            </TextTitle>
            <WrapperCon>
                {
                    data.map((i) => {
                        let Icons = i?.icon
                        return (
                            <Wrapper key={i?.id}>
                                <Icon>
                                    <Icons />
                                </Icon>
                                <Text>
                                    <p>{i?.text}</p>
                                </Text>
                            </Wrapper>
                        )
                    })
                }
            </WrapperCon>
        </Container>
    )
}

export default React.memo(Takliflar)