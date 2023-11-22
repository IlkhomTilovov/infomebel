import React from 'react'
import { Card, Container, SliderStyled } from "./styled"
import { useContexts } from '../../Context';
function KompaniyaGlavniyCarusel(props) {
    const { state } = useContexts[props?.context?.key]()
    const funData = () => {
        return state[props?.context?.dataKey]?.filter(i => i?.componyId === +props?.componyId)
    }
    const object = {
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 10000,
        autoplay: true,
    }
    return (
        <Container>
            <SliderStyled {...object}>
                {
                    funData()?.map(i => {
                        return (
                            <Card obj={i} key={i?.id} />
                        )
                    })
                }
            </SliderStyled>
        </Container>
    )
}

export default React.memo(KompaniyaGlavniyCarusel)