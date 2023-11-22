import { styled } from "@mui/system";
import { fonts } from "../../Fonts/index";
import { NavLink } from "react-router-dom";
const { px600, px300 } = fonts
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down, } } } = props
    return ({
        gap: "149px",
        width: "100%",
        height: "64px",
        display: "flex",
        alignItems: "center",
        background: "#1B263B",
        justifyContent: "space-between",
        padding: "0 5%",
        [down("sm")]: {
            width: "100%",
            padding: "0 18px",
        },
        [down("lg")]: {
            gap: "83px",
            width: "100%",
            padding: "0 60px",
        },
    })
})
export const LeftNavbar = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "33px",
        display: "flex",
        alignItems: "center",
        "& svg": {
            width: "55px",
            height: "29px",
            cursor: "pointer",
        },
        "& p": {
            color: "#fff",
            fontSize: "18px",
            fontFamily: px300,
            cursor: "pointer",
        },
        [down("sm")]: {
            "& p": {
                display: "none"
            },
        },
        [down("lg")]: {
            "& p": {
                display: "none"
            },
        }
    })
})
export const CenterNavbar = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "488px",
        height: "25px",
        display: "flex",
        fontFamile: px600,
        alignItems: "center",
        justifyContent: "space-between",
        [down("sm")]: {
            "& p": {
                display: "none"
            },
        },
        [down("md")]: {
            "& p": {
                display: "none"
            },
        },
        [down("lg")]: {
            "& p": {
            },
        }
    })
})
export const TextCenterNavbar = styled(NavLink)((props) => {
    return ({
        display: "flex",
        textDecoration: "none",
        "& p": {
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            fontFamily: px300,
        },
    })
})
export const Text = styled("p")((props) => {
    const { isActive } = props
    return ({
        borderBottom: isActive ? "3px solid #ffffff" : "3px solid transparent",
    })
})
export const RightNavbar = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "140px",
        height: "40px",
        display: "flex",
        borderRadius: "10px",
        alignItems: "center",
        border: "3px solid #fff",
        justifyContent: "center",
        "& p": {
            color: "#fff",
            fontSize: "18px",
            fontFamily: px300,
            cursor: "pointer",
        },
        [down("sm")]: {

        },
    })
})
