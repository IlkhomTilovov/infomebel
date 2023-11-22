import { styled } from "@mui/system"
import { fonts } from "../../Fonts/index"
const { px300 } = fonts

export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        padding: "50px 100px",
        [down("sm")]: {
            width: "90%",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        [down("lg")]: {
            width: "80%",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }

    })
})
export const TextImg = styled("div")((props) => {
    const { flexDirection, theme: { breakpoints: { down } } } = props
    return ({
        flexDirection,
        width: "100%",
        height: "100%",
        display: "flex",
        marginTop: "100px",
        textAlign: flexDirection !== "row" ? "right" : "left",
        [down("sm")]: {
            gap: "10px",
            width: "90%",
            display: "flex",
            marginTop: "30px",
            alignItems: "center",
            flexDirection: "column",
        },
        [down("lg")]: {
            gap: "0",
            width: "80%",
            display: "flex",
            marginTop: "30px",
            textAlign: flexDirection !== "row" ? "right" : "left",
        },
    })
})
export const Text = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "50%",
        display: "flex",
        fontFamily: px300,
        alignItems: "center",
        "& p": {
            width: "538px",
            fontSize: "40px"
        },
        [down("sm")]: {
            width: "90%",
            "& p": {
                fontSize: "20px",
                textAlign: "center"
            },
        },
        [down("lg")]: {
            "& p": {
                fontSize: "20px",
            },
        }
    })
})
export const Img = styled("div")((props) => {
    const { just, theme: { breakpoints: { down } } } = props
    return ({
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: just,
        "& img": {
            width: "80%",
        },
        [down("sm")]: {
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& img": {
                width: "100%",
            },
        },
        [down("lg")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: just,
            marginTop: "30px",
            "& img": {
                width: "100%",
                height: "167px",
            },
        }
    })
})
