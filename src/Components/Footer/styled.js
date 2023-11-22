import { styled } from "@mui/system";
import { fonts } from "../../Fonts/index"
const { px300 } = fonts
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        height: "64px",
        background: "#1B263B",
        borderTop: "1px solid #ffffff",
        padding: "0 5%",
        [down("sm")]: {
            width: "100%",
            marginTop: "50px",
        }
    })
})
export const FooterContainer = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [down("sm")]: {
            padding: '0 18px',
            width: "100%",
        }
    })
})
export const LogoFooter = styled("div")((props) => {
    const { theme: { breakpoints: { down, } } } = props
    return ({
        gap: "20px",
        width: "182px",
        height: "25px",
        display: "flex",
        fontFamily: px300,
        alignItems: "center",
        "& p": {
            color: "#fff",
            fontSize: "20px"
        },
        [down("sm")]: {
            width: "350px",
            height: "25px",
            gap: "5px",
            "& p": {
                color: "#fff",
                fontSize: "16px",

            },
        },

    })
})
export const TextFooter = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "20px",
        width: "355px",
        height: "100%",
        display: "flex",
        fontFamily: px300,
        alignItems: "center",
        justifyContent: "space-between",
        "& p": {
            color: "#fff",
            opacity: "0.3"
        },
        [down("sm")]: {
            justifyContent: "flex-end",
            "& p": {
                display: "none",
            },
        }
    })
})
export const IconFooter = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "40px",
        height: "40px",
        display: "flex",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #fff",
        [down("sm")]: {
            width: "40px",
            height: "40px",
        }
    })
})