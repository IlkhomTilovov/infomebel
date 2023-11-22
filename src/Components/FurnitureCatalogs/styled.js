import { styled } from "@mui/system";
import { fonts } from "../../Fonts";
const { px300, px600 } = fonts
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "18px",
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: "auto auto auto auto",
        margin: "50px 0",
        [down("lg")]: {
            gridTemplateColumns: "auto auto",
        },
        [down("md")]: {
            gridTemplateColumns: "auto",
        },
        [down("sm")]: {
            gridTemplateColumns: "auto",
        },
    })
})
export const CardCon = styled("div")(() => {
    return ({
        width: "305px",
        objectFit: "cover",
        borderRadius: "5px",
        border: "2px solid #C2C2C2",
    })
})
export const CardImg = styled("div")(() => {
    return ({
        "& img": {
            // objectFit: "cover",
            width: "100%",
            height: "180px",
            borderTopLeftRadius: "2px",
            borderTopRightRadius: "2px",
        },
    })
})
export const CardTitle = styled("div")(() => {
    return ({
        display: "flex",
        justifyContent: "space-between",
        padding: "18px",
    })
})
export const TitleIcon = styled("div")(() => {
    return ({
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    })
})
export const TitleText = styled("div")(() => {
    return ({

    })
})
export const TextName = styled("div")(() => {
    return ({
        fontSize: "14px",
        fontFamily: px300,
    })
})
export const TextMaterial = styled("div")(() => {
    return ({
        fontFamily: px300,
        fontSize: "12px",
        opacity: "0.3",
    })
})
export const TextIcon = styled("div")(() => {
    return ({
        gap: "24px",
        display: "flex",
    })
})
export const IconText = styled("div")(() => {
    return ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    })
})
export const Icon = styled("div")(() => {
    return ({

    })
})
export const Text = styled("div")(() => {
    return ({
        width: "48px",
        fontSize: "8px",
        fontFamily: px300,
        textAlign: "center",
        opacity: "0.3",
    })
})

export const LikeComment = styled("div")(() => {
    return ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    })
})
export const LikeText = styled("div")(() => {
    return ({
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    })
})
export const LikeIcon = styled("div")(() => {
    return ({

    })
})
export const LikeCount = styled("div")(() => {
    return ({
        opacity: "0.3",
        fontSize: "12px",
        fontFamily: px300,
    })
})
export const Footer = styled("div")(() => {
    return ({
        display: "flex",
        padding: "8px 18px 8px 13px",
        borderTop: "2px solid #C2C2C2",
        justifyContent: "space-between",
    })
})
export const FooterSum = styled("div")(() => {
    return ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    })
})
export const SumAslNarx = styled("div")(() => {
    return ({
        fontFamily: px300,
        fontSize: "14px",
        opacity: "0.5"
    })
})
export const SumChegirma = styled("div")(() => {
    return ({
        fontFamily: px600,
        fontSize: "20px",
        fontWeight: "700"
    })
})
export const FooterIcon = styled("div")(() => {
    return ({
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    })
})
