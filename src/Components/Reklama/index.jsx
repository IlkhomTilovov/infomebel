import React from 'react'
import { Icons } from "../../Assets/index"
import { TextImg, Text, Img, Container, Div } from './styled'
function ReklamaComponent() {
    const { Bir, Ikki, Uch, Tort, Besh } = Icons
    const data = [
        {
            id: 1,
            img: Bir,
            text: "Bizning sahifamizda O’zbekistonning taniqli mebel kompaniyalar mavjud!"
        },
        {
            id: 2,
            img: Ikki,
            text: "Web sayt bo’lmagan mebel korxonalar uchun ajoyib takliflar."
        },
        {
            id: 3,
            img: Uch,
            text: "Bizning sahifamizda O’zbekistonning taniqli mebel kompaniyalar mavjud!"
        },
        {
            id: 4,
            img: Tort,
            text: "Bizning sahifamizda O’zbekistonning taniqli mebel kompaniyalar mavjud!"
        },
        {
            id: 5,
            img: Besh,
            text: "Bizning sahifamizda O’zbekistonning taniqli mebel kompaniyalar mavjud!"
        },
    ]
    return (
        <Container>
            {
                data.map((i, idx) => {
                    return (
                        <TextImg key={i?.id}
                            flexDirection={idx % 2 === 1 ? "row-reverse" : "row"}

                        >
                            <Text>
                                <p >{i?.text}</p>
                            </Text>
                            <Img
                                just={idx % 2 !== 1 ? "flex-end" : "flex-start"}
                            >
                                <img src={i?.img} />
                            </Img>
                        </TextImg>

                    )
                })
            }
        </Container>
    )
}

export default React.memo(ReklamaComponent)