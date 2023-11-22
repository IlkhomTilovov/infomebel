import { Icons, ImgFile } from "../Assets"
const {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
} = ImgFile
const {
    Sofa,
    Bed,
    Chair,
    Kitchen,
    View,
    Like,
    Uzunlik,
    Comment,
    Balandlik,
    IchkiKenglik,
    Adress,
    Phone,
    Time,
    Telegram,
    Instagram,
    Facebook,
} = Icons
export const headersCarousel = [
    {
        id: 1,
        componyId: 1,
        img: one,
    },
    {
        id: 2,
        componyId: 2,
        img: two
    },
    {
        id: 3,
        componyId: 3,
        img: three
    },
    {
        id: 4,
        componyId: 4,
        img: four
    },
    {
        id: 5,
        componyId: 5,
        img: five
    },
    {
        id: 6,
        componyId: 6,
        img: six
    },
    {
        id: 7,
        componyId: 1,
        img: two,
    },
    {
        id: 8,
        componyId: 2,
        img: three
    },
    {
        id: 9,
        componyId: 3,
        img: four
    },
    {
        id: 10,
        componyId: 4,
        img: five
    },
    {
        id: 11,
        componyId: 5,
        img: six
    },
    {
        id: 12,
        componyId: 6,
        img: one
    },

]
export const categoryData = [
    {
        id: 1,
        componyId: 1,
        Icon: Sofa,
        Img: one,
    },
    {
        id: 2,
        componyId: 1,
        Icon: Bed,
        Img: two,
    },
    {
        id: 3,
        componyId: 1,
        Icon: Chair,
        Img: three,
    },
    {
        id: 4,
        componyId: 1,
        Icon: Kitchen,
        Img: four,
    },

    {
        id: 1,
        componyId: 2,
        Icon: Sofa,
        Img: five,
    },
    {
        id: 2,
        componyId: 2,
        Icon: Bed,
        Img: six,
    },
    {
        id: 3,
        componyId: 2,
        Icon: Chair,
        Img: seven,
    },
    {
        id: 4,
        componyId: 2,
        Icon: Kitchen,
        Img: eight,
    },

    {
        id: 1,
        componyId: 3,
        Icon: Sofa,
        Img: nine,
    },
    {
        id: 2,
        componyId: 3,
        Icon: Bed,
        Img: one,
    },
    {
        id: 3,
        componyId: 3,
        Icon: Chair,
        Img: two,
    },
    {
        id: 4,
        componyId: 3,
        Icon: Kitchen,
        Img: three,
    },

    {
        id: 1,
        componyId: 4,
        Icon: Sofa,
        Img: nine,
    },
    {
        id: 2,
        componyId: 4,
        Icon: Bed,
        Img: one,
    },
    {
        id: 3,
        componyId: 4,
        Icon: Bed,
        Img: two,
    },
    {
        id: 4,
        componyId: 4,
        Icon: Kitchen,
        Img: three,
    },

    {
        id: 1,
        componyId: 5,
        Icon: Sofa,
        Img: nine,
    },
    {
        id: 2,
        componyId: 5,
        Icon: Bed,
        Img: one,
    },
    {
        id: 3,
        componyId: 5,
        Icon: Chair,
        Img: two,
    },
    {
        id: 4,
        componyId: 5,
        Icon: Kitchen,
        Img: three,
    },

    {
        id: 1,
        componyId: 6,
        Icon: Sofa,
        Img: nine,
    },
    {
        id: 2,
        componyId: 6,
        Icon: Bed,
        Img: one,
    },
    {
        id: 3,
        componyId: 6,
        Icon: Chair,
        Img: two,
    },
    {
        id: 4,
        componyId: 6,
        Icon: Kitchen,
        Img: three,
    },
]
export const productsData = [
    {
        id: 1,
        img: one,
        componyId: 1,
        categoryId: 1,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 2,
        componyId: 1,
        categoryId: 1,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 3,
        componyId: 1,
        categoryId: 1,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 4,
        componyId: 1,
        categoryId: 1,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 5,
        componyId: 1,
        categoryId: 1,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 6,
        componyId: 1,
        categoryId: 1,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 7,
        componyId: 1,
        categoryId: 1,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 8,
        componyId: 1,
        categoryId: 1,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 9,
        componyId: 1,
        categoryId: 2,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 10,
        componyId: 1,
        categoryId: 2,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 11,
        componyId: 1,
        categoryId: 2,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 12,
        componyId: 1,
        categoryId: 2,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 13,
        componyId: 1,
        categoryId: 2,
        img: five,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 14,
        componyId: 1,
        categoryId: 3,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 15,
        componyId: 1,
        categoryId: 3,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 16,
        componyId: 1,
        categoryId: 3,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 17,
        componyId: 1,
        categoryId: 3,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 18,
        componyId: 1,
        categoryId: 3,
        img: five,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 1,
        img: one,
        componyId: 2,
        categoryId: 1,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 2,
        componyId: 2,
        categoryId: 1,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 3,
        componyId: 2,
        categoryId: 1,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 4,
        componyId: 2,
        categoryId: 1,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    // page 2
    {
        id: 1,
        img: one,
        componyId: 2,
        categoryId: 1,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 2,
        componyId: 2,
        categoryId: 1,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 3,
        componyId: 2,
        categoryId: 1,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 4,
        componyId: 2,
        categoryId: 1,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 5,
        componyId: 2,
        categoryId: 1,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 6,
        componyId: 2,
        categoryId: 1,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 7,
        componyId: 2,
        categoryId: 1,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 8,
        componyId: 2,
        categoryId: 1,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 9,
        componyId: 2,
        categoryId: 2,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 10,
        componyId: 2,
        categoryId: 2,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 11,
        componyId: 2,
        categoryId: 2,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 12,
        componyId: 2,
        categoryId: 2,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 13,
        componyId: 2,
        categoryId: 2,
        img: five,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 14,
        componyId: 2,
        categoryId: 3,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 15,
        componyId: 2,
        categoryId: 3,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 16,
        componyId: 2,
        categoryId: 3,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 17,
        componyId: 2,
        categoryId: 3,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 18,
        componyId: 2,
        categoryId: 3,
        img: five,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    // page 3
    {
        id: 1,
        img: one,
        componyId: 3,
        categoryId: 1,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 2,
        componyId: 3,
        categoryId: 1,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 3,
        componyId: 3,
        categoryId: 1,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 4,
        componyId: 3,
        categoryId: 1,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 5,
        componyId: 3,
        categoryId: 1,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 6,
        componyId: 3,
        categoryId: 1,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 7,
        componyId: 3,
        categoryId: 1,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 8,
        componyId: 3,
        categoryId: 1,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 9,
        componyId: 3,
        categoryId: 2,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 10,
        componyId: 3,
        categoryId: 2,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 11,
        componyId: 3,
        categoryId: 2,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 12,
        componyId: 3,
        categoryId: 2,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 13,
        componyId: 3,
        categoryId: 2,
        img: five,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 14,
        componyId: 3,
        categoryId: 3,
        img: one,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 15,
        componyId: 3,
        categoryId: 3,
        img: two,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 16,
        componyId: 3,
        categoryId: 3,
        img: three,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 17,
        componyId: 3,
        categoryId: 3,
        img: four,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },
    {
        id: 18,
        componyId: 3,
        categoryId: 3,
        img: five,
        name: "Cedar Wood",
        material: "Villur",
        balandligi: {
            icon: Balandlik,
            text: "Balandligi 1200 sm",
        },
        uzungli: {
            icon: Uzunlik,
            text: "Uzunligi 300sm",
        },
        ichkiUzunlik: {
            icon: IchkiKenglik,
            text: "Ichki kenglik 60sm ",
        },
        like: {
            icon: Like,
            count: "1K",
        },
        comment: {
            icon: Comment,
            count: "1K",
        },
        view: {
            icon: View,
            count: "1K",
        },
        sum: {
            chegirma: "1300$",
            aslNarx: "1500$",
        },
    },

]
export const footers = [
    {
        id: 1,
        componyId: 1,
        weAbouts: [
            {
                id: 1,
                Icon: Facebook,
                text: "Facebook",
                link: "",
            },
            {
                id: 2,
                Icon: Instagram,
                text: "Instagram",
                link: "",
            },
            {
                id: 3,
                Icon: Telegram,
                text: "Telegram",
                link: ""
            },
        ],
        compony: [
            {
                id: 1,
                Icon: Adress,
                text: `Toshkent shaxar Shayxontohur tumani, 60A uy Kichik xalqa yo’li.`
            },
            {
                id: 2,
                Icon: Phone,
                text: `(97) 143 45 41 Biz bilan bog’lanish!`
            },
            {
                id: 3,
                Icon: Time,
                text: `Working Time 24/7`
            },
        ]
    }
]