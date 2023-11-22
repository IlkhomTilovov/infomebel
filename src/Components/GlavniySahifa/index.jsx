import React from 'react'
import {
    Card,
    CardBox,
    CardTitle,
    CardBoxLike,
    Container,
    GImg,
    LogoImg,
    LogoName,
    LogoNameTime,
    Name,
    Wrapper,
    // Like,
    // Time,
    // View,
    // Comment,
    // ViewComment,
    // LikeViewComment,
} from './styled'

import { data } from './mock'
import { useContexts } from '../../Context'
function GlavniySahifa(props) {
    const context = useContexts
    const { state } = context[props?.context?.key]()
    return (
        <Container>
            {
                state[props?.context?.data].map((i) => {
                    // let LikeIcon = i?.like?.icon;
                    // let ViewIcon = i?.view?.icon;
                    // let CommentIcon = i?.comment?.icon
                    // console.log(i)
                    return (
                        <Wrapper key={i?.id}>
                            <Card onClick={() => props?.actions?.funListClick(i)}>
                                <GImg>
                                    <img src={i?.img} alt="" />
                                </GImg>
                                <CardBoxLike>
                                    <CardBox>
                                        <CardTitle>
                                            <p>{i?.title}</p>
                                        </CardTitle>
                                        <LogoNameTime>
                                            <LogoName>
                                                <LogoImg>
                                                    <img src={i?.logo} alt="" />
                                                </LogoImg>
                                                <Name>
                                                    <p>{i?.logoName}</p>
                                                </Name>
                                            </LogoName>
                                            {/* <Time>
                                                <p>Bugun {i?.time}</p>
                                            </Time> */}
                                        </LogoNameTime>
                                    </CardBox>
                                    {/* <LikeViewComment>
                                        <Like>
                                            <LikeIcon />
                                            <p>{i?.like?.count}</p>
                                        </Like>
                                        <ViewComment>
                                            <View>
                                                <ViewIcon />
                                                <p>{i?.view?.count}</p>
                                            </View>
                                            <Comment>
                                                <CommentIcon />
                                                <p>{i?.comment?.count}</p>
                                            </Comment>
                                        </ViewComment>
                                    </LikeViewComment> */}
                                </CardBoxLike>
                            </Card>
                        </Wrapper>
                    )
                })
            }
        </Container>
    )
}

export default React.memo(GlavniySahifa)