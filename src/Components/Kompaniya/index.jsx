import React from 'react'
import {
    Region,
    Street,
    LogoImg,
    CardBox,
    TimeKech,
    NameStar,
    StarBall,
    TimeIcon,
    TimeText,
    CardTitle,
    PhoneTime,
    Container,
    PhoneIcon,
    AdressIcon,
    AdressTitle,
    TimeErtalab,
    PhoneNumber,
    TimeIconText,
    RegionStreet,
    BoxContainer,
    NameKompaniya,
    PhoneIconNumber,
    AdressRegionStreet,
} from './styled'
import { data } from './mock'
import { Icons } from '../../Assets'
import { useContexts } from '../../Context'
const { Adress, Phone, Time } = Icons
function Kompaniya(props) {
    const context = useContexts
    const { state } = context[props?.context?.key]()
    return (
        <Container>
            {
                state[props?.context?.dataKey]?.map((i) => {
                    return (
                        <BoxContainer key={i?.id}>
                            <CardBox onClick={() => { 
                                props?.actions?.funComponyClick(i)
                            }}>
                                <LogoImg>
                                    <img src={i?.logo} alt="LOGO" />
                                </LogoImg>
                                <CardTitle>
                                    <NameStar>
                                        <NameKompaniya>
                                            <p>{i?.componyName}</p>
                                        </NameKompaniya>
                                    </NameStar>
                                    <AdressRegionStreet>
                                        <AdressTitle>
                                            <AdressIcon>
                                                <Adress />
                                            </AdressIcon>
                                            <RegionStreet>
                                                <Region>
                                                    <p>{i?.address}</p>
                                                </Region>
                                                <Street>
                                                    <p>{i?.addressSpan}</p>
                                                </Street>
                                            </RegionStreet>
                                        </AdressTitle>
                                        <PhoneTime>
                                            <PhoneIconNumber>
                                                <PhoneIcon>
                                                    <Phone />
                                                </PhoneIcon>
                                                <PhoneNumber>
                                                    <p>{i?.phone}</p>
                                                </PhoneNumber>
                                            </PhoneIconNumber>
                                            <TimeIconText>
                                                <TimeIcon>
                                                    <Time />
                                                </TimeIcon>
                                                <TimeText>
                                                    <TimeErtalab>
                                                        <p>{i?.phoneSpan}</p>
                                                    </TimeErtalab>
                                                </TimeText>
                                            </TimeIconText>
                                        </PhoneTime>
                                    </AdressRegionStreet>
                                </CardTitle>
                            </CardBox>
                        </BoxContainer>
                    )
                })
            }
        </Container>
    )
}

export default React.memo(Kompaniya)