import { styled } from "@mui/system";
import { color } from "../../color";
import { fonts } from "../../Fonts";
const { kok } = color
const { px300 } = fonts
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        gap: "35px",
        width: "100%",
        display: "flex",
        background: kok,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: "45px 0",
        [down("sm")]: {
        },
    })
})
export const WrapperCon = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        alignItems: "center",
        gap: "12px",
        [down("sm")]: {
            gridTemplateColumns: "auto auto",
        },
    })
})
export const TextTitle = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        color: "#fff",
        width: "410px",
        height: "86px",
        fontSize: "32px",
        fontWeight: "700",
        fontFamily: px300,
        textAlign: "center",
        [down("sm")]: {
            fontSize: "20px",
            width: "232px",
        },
    })
})
export const Wrapper = styled("div")(() => {
    return ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
    })
})
export const Icon = styled("div")(() => {
    return ({
        "& svg": {
            width: "30px",
            height: "30px"
        },
    })
})
export const Text = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "70px",
        color: "#fff",
        fontSize: "12px",
        fontFamily: px300,
        textAlign: "center",

    })
})