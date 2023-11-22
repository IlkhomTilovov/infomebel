import { styled } from "@mui/system"
import { color } from "../../color"
import { fonts } from "../../Fonts/index";
const { px300 } = fonts
const { kok } = color
export const Section = styled("section")(() => {
    return ({
        backgroundColor: kok
    })
})
export const Container = styled('div')((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        display: "flex",
        margin: "0 auto",
        padding: "16px 100px",
        justifyContent: "space-between",
        [down("sm")]: {
            width: "90%",
            flexDirection: "column",
        },
    })
})
export const Box = styled("div")(() => {
    return ({
        display: "flex",
        flexDirection: "column",
        gap: "22px"
    })
})
export const BoxItem = styled("div")(() => {
    return ({
        display: "flex",
        gap: "10px",
        alignItems: "center",



    })
})
export const IconItem = styled("div")(() => {
    return ({
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& path": {
            fill: "#ffffff"
        },
        "& svg": {
            width: "22px",
            height: "30px"
        },
    })
})
export const TextItem = styled("div")(() => {
    return ({
        width: "220px",
        fontFamily: px300,
        "& p": {
            color: "#fff"
        },
    })
})