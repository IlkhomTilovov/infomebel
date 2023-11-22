import { Container } from './styled'
import Title from './Components/Title'
import React, { useMemo } from 'react'
import Forms from './Components/forms'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Reklama from './Components/Reklama'
import Catalogs from './Components/Catalogs'
import Kompaniya from './Components/Kompaniya'
import Takliflar from './Components/Takliflar'
import GlavniySahifa from './Components/GlavniySahifa'
import FurnitureCatalogs from './Components/FurnitureCatalogs'
import KompaniyaGlavniyCarusel from './Components/KompaniyaGlavniyCarusel'
import { useHome } from './Context/home'
import { useClients } from './Context/clients'
import { useCompanies } from './Context/companies'
function Root() {
    // const homeStore = useHome()
    // const clientStore = useClients()
    const [value, setValue] = useState(props?.forms?.values)
    const componiesStore = useCompanies()
    const { title, forms, footerText, offer } = useMemo(() => ({
        offer: {
            textTitle: "Wood Max Furniture offers"
        },
        title: {
            text: "Mebel kompaniyalari uchun ajoyib web sayt.",
            type: "white",
        },
        forms: {
            footer: {

            },
            actions: [
                {
                    id: 1, 
                    text: "Yuborish",
                    fun: () => {

                    },
                }
            ],
            fomrs: [
                {
                    id: 1,
                    key: "input",
                    label: "Ismingiz?",
                    type: "input",
                },
                {
                    id: 2,
                    key: "phone",
                    label: "Telefon raqamingiz?",
                    type: "phone",
                },
                {
                    id: 3,
                    key: "textarea",
                    label: "Qanday fikringiz bor?",
                    type: "textarea",
                },
            ],
            values: {
                input: "",
                phone: "",
                textarea: ""
            },
            name: "Ismingiz?",
            phone: "Telefon raqamingiz?",
            textArea: `Qanday fikringiz bor?`,
            text: "Biz bilan bo’glanish uchun tepadagi bosh joyni to’ldirng va yuborish tugmasini bosing!"
        },
        footerText: {
            text: "Biz bilan bo’ling va biz sizlar bilanmiz!"
        }
    }), [])
    return (
        <>
            <Navbar />
            <Container>
                <Title object={title} />
                <Reklama />
                <Forms object={forms} />
                <Kompaniya />
                <GlavniySahifa />
                <KompaniyaGlavniyCarusel />
                <Catalogs />
                <Takliflar object={offer} />
                <Forms object={forms} />
                <FurnitureCatalogs />
            </Container>
            <Footer object={footerText} />
        </>
    )
}
export default React.memo(Root)