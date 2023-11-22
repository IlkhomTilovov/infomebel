import { Icons } from "../../Assets"

const {
    C1,
    C2,
    C3,
    C4,
    Bed,
    Sofa,
    Left,
    Chair,
    Right,
    Kitchen,
} = Icons

export const data = [
    { id: 1, img: C1, icon: Sofa, },
    { id: 2, img: C2, icon: Bed, },
    { id: 3, img: C3, icon: Kitchen, },
    { id: 4, img: C4, icon: Chair, },
    { id: 5, img: C3, icon: Kitchen, },
    { id: 6, img: C2, icon: Bed, },
    { id: 7, img: C1, icon: Sofa, },
]
export const leftBtn = [
    { id: 5, icon: Left }
]
export const rightBtn = [
    { id: 6, icon: Right }
]