import type { Review } from "../../types/reviews"

// Mock review data for filling out the page
export const reviewData: Review[] = [
    {
        id: "0",
        value: {
            starRating: 5,
            reviewerName: "D Synkiw",
            reviewerPfp: "/images/profilePics/silksong.png",
            reviewDesc: "A riveting experience!!!",
            reviewDate: new Date("July 20, 25")
        }
    },
    {
        id: "1",
        value: {
            starRating: 2,
            reviewerName: "Xavier",
            reviewerPfp: "/images/profilePics/XavierPfp.png",
            reviewDesc: "it was ok...",
            reviewDate: new Date("August 3, 25")
        }
    },
        {
        id: "2",
        value: {
            starRating: 1,
            reviewerName: "Shannon",
            reviewerPfp: "/images/profilePics/CUBE.jpg",
            reviewDesc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin ac dui sed eleifend. Ut lacinia ut tortor eget lacinia. In hendrerit eros urna, vitae luctus eros ultrices at. Curabitur ultricies velit est, et laoreet metus vehicula quis. Sed faucibus vel tortor ac ullamcorper. Ut lacinia ipsum dui, et vulputate leo fringilla et. Suspendisse ultricies tincidunt felis luctus sodales. Proin auctor velit eget lobortis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ut ex nibh. Donec eleifend ac nulla id commodo. Pellentesque congue vehicula volutpat. Vestibulum placerat laoreet enim sit amet dictum. Nullam vitae sapien condimentum, interdum risus vel, gravida ante. In rutrum leo metus, sit amet gravida sem ullamcorper ut. Donec tortor ligula, condimentum quis ante id, rhoncus dictum felis. Nunc urna eros, fringilla in aliquet eu, efficitur nec neque. Nam ac commodo metus. Vestibulum egestas eu ex ac aliquam. Nam quis metus nec ante hendrerit pellentesque nec vitae sapien. Nunc condimentum, leo non convallis pellentesque, dui lorem egestas diam, et dictum tellus ligula sed nisl. Quisque consectetur mauris non congue elementum.",
            reviewDate: new Date("January 5, 26")
        }
    },
]