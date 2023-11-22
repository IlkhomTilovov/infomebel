import { ButtonBase } from "@mui/material";
import { styled } from "@mui/system";
import { color } from "../../color";
const { IconGrey } = color
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "90%",
        margin: "80px auto",
        [down("sm")]: {
            width: "70%"
        },
        [down("lg")]: {
            width: "90%"
        },
    })
})
export const BtnCarusel = styled("div")(() => {
    return ({
        width: "35px",
        height: "35px",
        display: "flex",
        borderRadius: "50%",
        alignItems: "center",
        background: "#D9D9D9",
        justifyContent: "center",
        "& svg": {
            width: "20px",
            height: "10px",
        },
    })
})
export const Card = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props

    return ({
        height: "400px",
        display: "flex",
        padding: "0 1rem",
        cursor: "pointer",
        alignItems: "center",
        position: "relative",
        width: `${100 / 3}%`,
        [down("sm")]: {
            width: "70%"
        },
        [down("lg")]: {
            width: `100%`,
        },
    })
})
export const CardImg = styled("div")((props) => {
    const { img } = props
    return ({
        width: "100%",
        height: "100%",
        border: "2px solid",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center center",
    })
})
export const CardIcon = styled("div")(() => {
    return ({
        "& svg": {
            top: "50%",
            left: "50%",
            width: "130px",
            height: "150px",
            position: "absolute",
            transform: "translate(-50%, -50%)",
        },
    })
})
export const IconBox = styled(ButtonBase)((props) => {
    let sm = props?.theme.breakpoints.down("sm")
    let lg = props?.theme.breakpoints.down("sm")
    let obj = {};
    if (props?.type === "left") {
        if (sm) {
            obj.left = "13px"
        } else if (lg) {
            obj.left = "13px"
        } else {
            obj.left = "-33px"
        }
    } else if (props?.type === "right") {
        if (sm) {
            obj.right = "-20px"
        } else if (lg) {
            obj.right = "-20px"
        } else {
            obj.right = "-70px"
        }
    }
    return ({
        ...obj,
        top: "50%",
        zIndex: "2",
        width: "35px",
        height: "35px",
        color: "#ffffff",
        borderRadius: "50%",
        position: "absolute",
        backgroundColor: IconGrey,
        transform: "translate(-50%, -50%)",
    })
})