import Slider from "react-slick";
import { styled } from "@mui/system";
export const Container = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        width: "1145px",
        height: "531px",
        overflow: "hidden",
        margin: "50px auto",
        borderRadius: "20px",
        [down("sm")]: {
            width: "80%",
            height: "316px",
        },
        [down("lg")]: {
            width: "80%",
            height: "280px",
        },
    })
})
export const SliderStyled = styled(Slider)((props) => {
    const { theme: { breakpoints: { down } } } = props
    return ({
        [down("sm")]: {

        },
    })
})
export const Card = styled("div")((props) => {
    const { theme: { breakpoints: { down } } } = props
    const { obj: { img }, } = props
    return ({
        width: "100%",
        height: "531px",
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${img})`,
        backgroundSize: "raver !important",
        [down("sm")]: {
            width: "80%",
            height: "316px",
            backgroundSize: "cover",
        },
        [down("lg")]: {
            width: "80%",
            height: "280px",
            backgroundSize: "cover",
        },
    })
})