import { styled } from "@mui/system";
import { fonts } from "../../Fonts/index"
const { px300 } = fonts
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "34px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto",
        padding: "50px 100px",
        [down("sm")]: {
            width: "90%",
            margin: "0 auto",
            gridTemplateColumns: "auto",
            padding: "0",
        },
        [down("lg")]: {
            padding: "0",
            width: "80%",
            margin: "0 auto"
        },
        [down("md")]: {
            padding: "0",
            width: "90%",
            margin: "0 auto",
            gridTemplateColumns: "auto",
        },
    })
})

export const BoxContainer = styled("div")(() => {
    return ({
    })
})
export const CardBox = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "16px",
        display: "flex",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "34px 24px",
        border: "2px solid #1B263B",
        [down("lg")]: {
            flexDirection: "column",
            alignItems: 'center',
        },
        [down("md")]: {
            flexDirection: "column",
            alignItems: 'center',
        },
        [down("sm")]: {
            flexDirection: "column",
            alignItems: 'center',
        },
    })
})
export const LogoImg = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "2px solid #1B263B",
        "& img": {
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover"
        }
    })
})

export const CardTitle = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        display: "flex",
        flexDirection: "column",
        [down("lg")]: {
            gap: "9px",
        },
        [down("md")]: {
            gap: "9px",
        },
        [down("sm")]: {
            gap: "9px",
        },
    })
})
export const NameStar = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "29px",
        display: "flex",
        [down("lg")]: {
            gap: "9px",
            alignItems: "center",
            flexDirection: "column",
        },
        [down("md")]: {
            gap: "9px",
            alignItems: "center",
            flexDirection: "column",
            "& p": {
                textAlign: "center"
            },
        },
        [down("sm")]: {
            gap: "9px",
            alignItems: "center",
            flexDirection: "column",
        },
    })
})
export const NameKompaniya = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        fontFamily: px300,
        width: "calc(80% - 100px)",
        "& p": {
            fontSize: "22px",
        },
        [down("lg")]: {
            width: "100%",
            "& p": {
                textAlign: "center",
            },
        },
        [down("md")]: {
            width: "100%",
            "& p": {
                textAlign: "center",
            },
        },
        [down("sm")]: {
            width: "100%",
            "& p": {
                textAlign: "center",

            },
        },
    })
})
export const StarBall = styled("div")(() => {
    return ({
        display: "flex",
        alignItems: "center",
    })
})
export const AdressRegionStreet = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        display: "flex",
        justifyContent: "space-between",
        [down("lg")]: {
            flexDirection: "column",
            gap: "9px",
        },
        [down("md")]: {
            flexDirection: "column",
            gap: "9px",
        },
        [down("sm")]: {
            flexDirection: "column",
            gap: "9px",
        },
    })
})
export const AdressTitle = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "5px",
        display: "flex",
        alignItems: "center",
        width: "calc(80% - 100px)",
        [down("lg")]: {
            width: "100%",
            gap: "12px",
        },
        [down("md")]: {
            width: "100%",
            gap: "12px",
        },
        [down("sm")]: {
            width: "100%",
            gap: "12px",
        },
    })
})
export const AdressIcon = styled("div")(() => {
    return ({

    })
})
export const RegionStreet = styled("div")(() => {
    return ({
        display: "flex",
        flexDirection: "column",
        gap: "4px",
    })
})
export const Region = styled("div")(() => {
    return ({
        fontFamily: px300,
        "& p": {
            fontSize: "14px"
        }
    })
})
export const Street = styled("div")(() => {
    return ({
        fontFamily: px300,
        "& p": {
            fontSize: "12px",
            opacity: "0.5",

        }
    })
})
export const PhoneTime = styled("div")(() => {
    return ({
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    })
})
export const PhoneIconNumber = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "5px",
        display: "flex",
        [down("lg")]: {
            gap: "12px",
        },
        [down("md")]: {
            gap: "12px",
        },
        [down("sm")]: {
            gap: "12px",
        },
    })
})
export const PhoneIcon = styled("div")(() => {
    return ({
        display: "flex",
        alignItems: "center",
    })
})
export const PhoneNumber = styled("div")(() => {
    return ({
        fontFamily: px300,
        "& p": {
            fontSize: "14px",
        },

    })
})
export const TimeIconText = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props

    return ({
        gap: "5px",
        display: "flex",
        [down("lg")]: {
            gap: "12px",
        },
        [down("md")]: {
            gap: "12px",
        },
        [down("sm")]: {
            gap: "12px",
        },
    })
})
export const TimeIcon = styled("div")(() => {
    return ({
        display: "flex",
        alignItems: "center",
    })
})
export const TimeText = styled("div")(() => {
    return ({
        gap: "5px",
        display: "flex",
    })
})
export const TimeErtalab = styled("div")(() => {
    return ({
        fontFamily: px300,
        "& p": {
            fontSize: "12px",
            opacity: "0.5"
        },
    })
})
export const TimeKech = styled("div")(() => {
    return ({
        fontFamily: px300,
        "& p": {
            fontSize: "12px",
            opacity: "0.5"
        },
    })
}) 