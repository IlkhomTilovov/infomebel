import { borderRadius, styled } from "@mui/system";
import { color } from "../../color"
import { fonts } from "../../Fonts";
const { px300, px600 } = fonts
const { kok, seriy } = color
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "37px",
        width: "100%",
        display: "grid",
        padding: "50px 100px",
        gridTemplateColumns: "auto auto auto auto",
        [down("lg")]: {
            width: "80%",
            gridTemplateColumns: "auto auto",
            margin: "0 auto",
            padding: "0",
        },
        [down("md")]: {
            width: "90%",
            gridTemplateColumns: "auto auto",
            margin: "0 auto",
            padding: "50px 0",
        },
        [down("sm")]: {
            width: "90%",
            gridTemplateColumns: "auto",
            margin: "0 auto",
            padding: "50px 0",
        },
    })
})
export const Wrapper = styled("div")(() => {
    return ({
        width: "100%",
    })
})
export const Card = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        border: `2px solid ${seriy}`,
        borderRadius: "10px",
        cursor: "pointer",
        [down("lg")]: {
            width: "100%",
        },
        [down("md")]: {
            width: "100%",
        },
        [down("sm")]: {
            width: "100%",
        },
    })
})
export const GImg = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "270px",
        height: "209px",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
        },
        [down("lg")]: {
            width: "100%",
        },
        [down("md")]: {
            width: "100%",
        },
        [down("sm")]: {
            width: "100%",
        },
    })
})
export const CardBoxLike = styled("div")(() => {
    return ({
        display: "flex",
        padding: "10px 16px"
    })
})
export const CardBox = styled("div")(() => {
    return ({
        gap: "10px",
        display: "flex",
        flexDirection: "column",
    })
})
export const CardTitle = styled("div")(() => {
    return ({
        fontFamily: px300,
        "& p": {
            fontSize: "12px",

        }
    })
})
export const LogoNameTime = styled("div")(() => {
    return ({

    })
})
export const LogoName = styled("div")(() => {
    return ({
        display: "flex",
        alignItems: "center",
        gap: "7px"
    })
})
export const LogoImg = styled("div")(() => {
    return ({
        "& img": {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
        }
    })
})
export const Name = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        fontFamily: px600,
        "& p": {
            fontSize: "16px",
            color: kok,
        },
        [down("lg")]: {
            "& p": {
                fontSize: "14px",
                color: kok,
            },
        },
        [down("md")]: {
            "& p": {
                fontSize: "8px",
                color: kok,
            },
        },
        [down("sm")]: {
            "& p": {
                fontSize: "12px",
                color: kok,
            },
        },
    })
})
export const Time = styled("div")(() => {
    return ({
        fontFamily: px300,
        "& p": {
            fontSize: "8px",
            color: seriy,
        }
    })
})
export const LikeViewComment = styled("div")(() => {
    return ({
        gap: "13px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    })
})
export const Like = styled("div")(() => {
    return ({
        width: "20px",
        height: "31px",
        display: "flex",
        fontFamily: px300,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        "& p": {
            color: seriy,
            fontSize: "10px",
        },
        "& svg": {
            width: "16px",
            height: "16.14px"
        },
    })
})
export const ViewComment = styled("div")(() => {
    return ({
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
    })
})
export const View = styled("div")(() => {
    return ({
        width: "20px",
        height: "31px",
        fontFamily: px300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "& svg": {
            color: seriy,
            width: "20px",
            height: "16.14px",
        },
        "& p": {
            color: seriy,
            fontSize: "10px",
        }
    })
})
export const Comment = styled("div")(() => {
    return ({
        width: "20px",
        height: "31px",
        display: "flex",
        fontFamily: px300,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        "& p": {
            fontSize: "10px",
            color: seriy,
        },
        "& svg": {
            width: "16px",
            height: "16.14px"
        },
    })
})