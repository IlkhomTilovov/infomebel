import { styled } from "@mui/system";
import { fonts } from "../../Fonts/index"
const { px300 } = fonts
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "100%",
        height: "100%",
        padding: "0 388px",
        [down("sm")]: {
            width: "100%",
            height: "100%",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
    })
})

