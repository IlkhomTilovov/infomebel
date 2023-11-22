import { styled } from "@mui/system";
import { fonts } from "../../Fonts/index"
const { px300 } = fonts
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
        [down("sm")]: {

        },
        [down("lg")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
        },
    })
})

export const BodyInput = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "30px",
        display: "flex",
        width: "1144px",
        padding: "30px",
        borderRadius: "10px",
        flexDirection: "column",
        border: "2px solid #1B263B",
        [down("sm")]: {
            width: "90%",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        [down("lg")]: {
            gap: "20px",
            width: "80%",
            border: "none",
            display: "flex",
            flexDirection: "column",
        },
    })
})
export const NamePhone = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "30px",
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        "& input": {
            width: "50%",
            height: "100%",
            borderRadius: "5px",
            paddingLeft: "15px",
            border: "2px solid #1B263B",
        },
        [down("sm")]: {
            gap: "12px",
            flexDirection: "column",
            width: "100%",
            height: "114px",
            "& input": {
                width: "248px",
                height: "40px",
            },
        },
        [down("lg")]: {
            "& input": {
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                paddingLeft: "15px",
                border: "2px solid #1B263B",
            },
        },
    })
})
export const TextAreaInput = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "1080px",
        height: "100px",
        fontFamily: px300,
        "& textarea": {
            width: "100%",
            height: "100%",
            resize: "none",
            padding: "10px",
            borderRadius: "5px",
            border: "2px solid #1B263B",
        },
        [down("sm")]: {

        },
        [down("lg")]: {
            width: "100%"
        },
    })
})
export const InputTextBtn = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        height: "65px",
        display: "flex",
        fontFamily: px300,
        justifyContent: "space-between",
        "& p": {
            width: "466px",
            height: "100%"
        },
        "& button": {
            color: "#fff",
            border: "none",
            width: "183px",
            height: "100%",
            fontSize: "22px",
            borderRadius: "10px",
            background: "#1B263B",
        },
        [down("sm")]: {

        },
        [down("lg")]: {
            "& button": {
                width: "100%",
            },
            "& p": {
                display: "none",
            }
        },
    })
})