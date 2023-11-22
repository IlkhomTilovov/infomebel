import React from 'react'
import {
    Text,
    Icon,
    Footer,
    CardCon,
    CardImg,
    TextIcon,
    TextName,
    IconText,
    LikeText,
    LikeIcon,
    CardTitle,
    Container,
    TitleIcon,
    TitleText,
    LikeCount,
    FooterSum,
    SumAslNarx,
    FooterIcon,
    SumChegirma,
    LikeComment,
    TextMaterial,
} from './styled'
import { useContexts } from '../../Context'
function FurnitureCatalogs(props) {
    const { state } = useContexts[props?.context?.key]()
    const funData = (categoryid) => {
        return state[props?.context?.dataKey]?.filter(({ categoryId, componyId }) => {
            return +props?.componyId === componyId && categoryid === categoryId
        })
    }
    return (
        <Container>
            {
                funData(state[props?.context?.categoryIdKey])?.map((i) => {
                    let Baland = i?.balandligi?.icon;
                    let Uzun = i?.uzungli?.icon;
                    let Ichki = i?.ichkiUzunlik?.icon;
                    let Like = i?.like?.icon
                    let Comment = i?.comment?.icon
                    let View = i?.view?.icon
                    return (
                        <CardCon key={i?.id}>
                            <CardImg>
                                <img src={i?.img} alt="" />
                            </CardImg>
                            <CardTitle>
                                <TitleIcon>
                                    <TitleText>
                                        <TextName>
                                            <p>{i?.name}</p>
                                        </TextName>
                                        <TextMaterial>
                                            <p>Material: {i?.material}</p>
                                        </TextMaterial>
                                    </TitleText>
                                    <TextIcon>
                                        <IconText>
                                            <Icon>
                                                <Baland />
                                            </Icon>
                                            <Text>
                                                <p>{i?.balandligi?.text}</p>
                                            </Text>
                                        </IconText>
                                        <IconText>
                                            <Icon>
                                                <Uzun />
                                            </Icon>
                                            <Text>
                                                <p>{i?.uzungli?.text}</p>
                                            </Text>
                                        </IconText>
                                        <IconText>
                                            <Icon>
                                                <Ichki />
                                            </Icon>
                                            <Text>
                                                <p>{i?.ichkiUzunlik?.text}</p>
                                            </Text>
                                        </IconText>
                                    </TextIcon>
                                </TitleIcon>
                                <LikeComment>
                                    <LikeText>
                                        <LikeIcon>
                                            <Like />
                                        </LikeIcon>
                                        <LikeCount>
                                            <p>{i?.like?.count}</p>
                                        </LikeCount>
                                    </LikeText>
                                    <LikeText>
                                        <LikeIcon>
                                            <Comment />
                                        </LikeIcon>
                                        <LikeCount>
                                            <p>{i?.comment?.count}</p>
                                        </LikeCount>
                                    </LikeText>
                                </LikeComment>
                            </CardTitle>
                            <Footer>
                                <FooterSum>
                                    <SumAslNarx>
                                        <del>{i?.sum?.aslNarx}</del>
                                    </SumAslNarx>
                                    <SumChegirma>
                                        <p>{i?.sum?.chegirma}</p>
                                    </SumChegirma>
                                </FooterSum>
                                <FooterIcon>
                                    <LikeIcon>
                                        <View />
                                    </LikeIcon>
                                    <LikeCount>
                                        <p>{i?.like?.count}</p>
                                    </LikeCount>
                                </FooterIcon>
                            </Footer>
                        </CardCon>
                    )
                })
            }
        </Container>
    )
}
export default React.memo(FurnitureCatalogs)