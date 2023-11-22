import React from 'react'
import { Icons } from '../../Assets'
import { useContexts } from '../../Context'
import { SliderStyled } from '../KompaniyaGlavniyCarusel/styled'
import { Container, Card, CardImg, CardIcon, IconBox } from './styled'
import { useMediaQuery, useTheme } from '@mui/material'
const { Left, Right } = Icons
function Catalogs(props) {
    const { state, funDispatch } = useContexts[props?.context?.key]()
    const theme = useTheme()
    const mediaQuarySM = useMediaQuery(theme.breakpoints.down("sm"))
    const mediaQuaryLG = useMediaQuery(theme.breakpoints.down("lg"))

    const funData = () => {
        return state[props?.context?.dataKey]?.filter(i => i?.componyId === +props?.componyId)
    }
    const NextArrow = (props) => {
        return (
            <IconBox type="right" onClick={props?.onClick}>
                <Right />
            </IconBox>
        )
    }
    const PrevArrow = (props) => {
        return (
            <IconBox type="left" onClick={props?.onClick}>
                <Left />
            </IconBox>
        )
    }
    const funSetting = () => {
        const setting = {
            speed: 1000,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 1000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        }
        if (mediaQuarySM) {
            setting.slidesToShow = 1
        } else if (mediaQuaryLG) {
            setting.slidesToShow = 2
        }
        return setting
    }

    return (
        <Container>
            <SliderStyled {...funSetting()}>
                {
                    funData()?.map((i) => {
                        let Img = i?.Img
                        let Icon = i?.Icon
                        return (
                            <Card
                                onClick={() => {
                                    props?.actions?.funCategoryClick({ state, funDispatch, i })
                                }}
                                key={i?.id}
                            >
                                <CardImg img={Img} />
                                <CardIcon>
                                    <Icon />
                                </CardIcon>
                            </Card>
                        )
                    })
                }
            </SliderStyled>
        </Container>
    )
}

export default React.memo(Catalogs)