import { styled } from "@mui/system";
import { fonts } from "../../Fonts/index"
const { px300 } = fonts

export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        [down("sm")]: {
            width: "90%",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
        },
        [down("lg")]: {
            width: "90%",
            padding: "0",
            display: "flex",
            justifyContent: "center"
        },
    })
})

export const BodyTitle = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontFamily: px300,
        textAlign: "center",
        marginTop: "98px",
        "& p": {
            width: "830px",
            fontSize: "64px"
        },
        [down("sm")]: {
            width: "90%",
            display: "flex",
            marginTop: "30px",
            fontFamily: px300,
            alignItems: "center",
            justifyContent: "center",
            "& p": {
                fontSize: "30px",
                width: "174px",
            },
        },
        [down("lg")]: {
            width: "90%",
            height: "78px",
            display: "flex",
            marginTop: "30px",
            fontFamily: px300,
            alignItems: "center",
            justifyContent: "center",
            "& p": {
                fontSize: "30px",
            },
        }
    })
})