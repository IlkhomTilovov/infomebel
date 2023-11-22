import { styled } from "@mui/system";

export const Container = styled("div")(({ theme: { breakpoints: { down } } }) => {
    return ({
        width: "1200px",
        margin: "0 auto",
        [down('lg')]: {
            width: "80%",
        },
        [down("sm")]: {
            width: "90%"
        }
    })
})
