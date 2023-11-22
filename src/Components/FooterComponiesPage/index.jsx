import React from 'react'
import { useContexts } from '../../Context'
import { Box, BoxItem, Container, IconItem, Section, TextItem } from './styled'

function FooterCompoiesPage(props) {
    const { state } = useContexts[props?.context?.key]()
    const funData = () => {
        return (state[props?.context?.dataKey]?.find(({ componyId }) => {
            return componyId === +props?.componyId
        }))
    }
    return (
        <Section>
            <Container>
                <Box>
                    {
                        funData()?.compony?.map(c => {
                            let Icon = c?.Icon
                            return (
                                <BoxItem key={c?.id}>
                                    <IconItem>
                                        <Icon />
                                    </IconItem>
                                    <TextItem>
                                        <p>{c?.text}</p>
                                    </TextItem>
                                </BoxItem>
                            )
                        })
                    }
                </Box>

                <Box>
                    {
                        funData()?.weAbouts?.map(c => {
                            let Icon = c?.Icon
                            return (
                                <BoxItem key={c?.id}>
                                    <IconItem>
                                        <Icon />
                                    </IconItem>
                                    <TextItem>
                                        <p>{c?.text}</p>
                                    </TextItem>
                                </BoxItem>
                            )
                        })
                    }
                </Box>
            </Container>
        </Section>
    )
}

export default React.memo(FooterCompoiesPage)