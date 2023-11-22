import { styled } from "@mui/system";
import { color } from "../../color";
const { kok } = color
export const Container = styled("div")(() => {
    return ({
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    })
})
export const Header = styled("div")(() => {
    return ({
        height: "64px"
    })
})
export const Body = styled("div")(() => {
    return ({
        overflow: "auto",
        height: "calc(100% - 128px)",
        /* width */
        "&::-webkit-scrollbar": {
            width: "10px",
            borderRadius: "5px",
        },
        /* Track */
        "&::-webkit-scrollbar-track": {
            background: "#fff",
            boxShadow: "inset 0 0 5px grey",
            borderRadius: "2px",
        },
        /* Handle */
        "&::-webkit-scrollbar-thumb": {
            background: kok,
            borderRadius: "2px",
        },
        /* Handle on hover */
        "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
        },
    })
})
export const FooterStyled = styled("div")(() => {
    return ({
        height: "64px"
    })
})
