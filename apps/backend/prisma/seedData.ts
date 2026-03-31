import { User } from "../src/generated/prisma/client";
import { Game } from "../src/generated/prisma/client";
import { Review } from "../src/generated/prisma/client";
import { Friend } from "../src/generated/prisma/client";
import { Prisma } from "../src/generated/prisma/client";

export const userSeedData: User[] = [
    {
        id: "w34tuh3",
        userName: "timdrake",
        profilePic: "images/profilePics/CUBE.jpg",

        dateCreated: new Date(),
    },
    {
        id: "4382ty9s",
        userName: "peterparker",
        profilePic: "images/profilePics/silksong.png",
        dateCreated: new Date(),
    },
    {
        id: "2p498ty",
        userName: "surlycat",
        profilePic: "images/profilePics/XavierPfp.png",
        dateCreated: new Date(),
    },
    {
        id: "34p98tw",
        userName: "ChasingRainbows",
        profilePic: "images/profilePics/CUBE.jpg",
        dateCreated: new Date(),
    },
    {
        id: "l2r8rrf3",
        userName: "lotsOfLeg",
        profilePic: "images/profilePics/silksong.png",
        dateCreated: new Date(),
    },
    {
        id: "wg3yop24",
        userName: "demolitionBabe",
        profilePic: "images/profilePics/XavierPfp.png",
        dateCreated: new Date(),
    },
    {
        id: "4gtf359g",
        userName: "endlessGrace",
        profilePic: "images/profilePics/CUBE.jpg",
        dateCreated: new Date(),
    },
]

export const gameSeedData: Game[] = [
    {
        id: "ky7r3hm8",
        gameName: "Elden Ring",
        coverPicture: "/images/gameCovers/eldenring.jpg",
        gameDescription: "",
        releaseDate: new Date("2022-02-25"),
    },
    {
        id: "tp2q9nj5",
        gameName: "Arc Raiders",
        coverPicture: "/images/gameCovers/arcraiders.jpg",
        gameDescription: "",
        releaseDate: new Date("2024-10-16"),
    },
    {
        id: "wg4x8kl2",
        gameName: "Project Zomboid",
        coverPicture: "/images/gameCovers/projectzomboid.jpg",
        gameDescription: "",
        releaseDate: new Date("2013-11-08"),
    },
    {
        id: "br6jf3p9",
        gameName: "Armored Core VI: Fires of Rubicon",
        coverPicture: "/images/gameCovers/armoredcoresix.jpg",
        gameDescription: "",
        releaseDate: new Date("2023-08-25"),
    },
    {
        id: "hz8w5m1t",
        gameName: "Final Fantasy VII Rebirth",
        coverPicture: "/images/gameCovers/ffvii.jpg",
        gameDescription: "",
        releaseDate: new Date("2024-02-29"),
    },
    {
        id: "vd7s4c6n",
        gameName: "Cyberpunk 2077",
        coverPicture: "/images/gameCovers/cyberpunk2077.jpg",
        gameDescription: "",
        releaseDate: new Date("2020-12-10"),
    },
    {
        id: "jn3y2b8r",
        gameName: "Monster Hunter Rise",
        coverPicture: "/images/gameCovers/mhrise.jpg",
        gameDescription: "",
        releaseDate: new Date("2022-01-12"),
    },
    {
        id: "qs9g7f4x",
        gameName: "Helldivers 2",
        coverPicture: "/images/gameCovers/helldivers2.jpg",
        gameDescription: "",
        releaseDate: new Date("2024-02-08"),
    },
    {
        id: "ml5h1w3q",
        gameName: "NieR Replicant ver.1.22474487139...",
        coverPicture: "/images/gameCovers/nierreplicant.jpg",
        gameDescription: "",
        releaseDate: new Date("2021-04-23"),
    },
    {
        id: "fp8k6j2v",
        gameName: "Half Life 2",
        coverPicture: "/images/gameCovers/halflife2.jpg",
        gameDescription: "",
        releaseDate: new Date("2004-11-16"),
    },
    {
        id: "rc4t9p7h",
        gameName: "Indiana Jones and the Great Circle",
        coverPicture: "/images/gameCovers/thegreatcircle.jpg",
        gameDescription: "",
        releaseDate: new Date("2024-12-09"),
    },
    {
        id: "nx2w5l8d",
        gameName: "Metaphor: ReFantazio",
        coverPicture: "/images/gameCovers/metaphor.jpg",
        gameDescription: "",
        releaseDate: new Date("2024-10-11"),
    },
    {
        id: "yh6m3s1b",
        gameName: "Like a Dragon: Infinite Wealth",
        coverPicture: "/images/gameCovers/infinitewealth.jpg",
        gameDescription: "",
        releaseDate: new Date("2023-01-16"),
    },
    {
        id: "kg9v4n7e",
        gameName: "Tekken 8",
        coverPicture: "/images/gameCovers/takken8.jpg",
        gameDescription: "",
        releaseDate: new Date("2024-01-16"),
    },
    {
        id: "uw1x8r5k",
        gameName: "Dragon's Dogma II",
        coverPicture: "/images/gameCovers/dragonsdogma2.jpg",
        gameDescription: "",
        releaseDate: new Date("2024-03-22"),
    }
]

export const friendSeedData: Friend[] = [
    {
        userId: "w34tuh3",
        friendId: "4382ty9s",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "4382ty9s",
        friendId: "w34tuh3",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "2p498ty",
        friendId: "l2r8rrf3",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "34p98tw",
        friendId: "4gtf359g",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "34p98tw",
        friendId: "l2r8rrf3",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "34p98tw",
        friendId: "2p498ty",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "34p98tw",
        friendId: "wg3yop24",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "l2r8rrf3",
        friendId: "wg3yop24",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "l2r8rrf3",
        friendId: "2p498ty",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "l2r8rrf3",
        friendId: "34p98tw",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "l2r8rrf3",
        friendId: "4gtf359g",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "wg3yop24",
        friendId: "l2r8rrf3",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "wg3yop24",
        friendId: "2p498ty",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "4gtf359g",
        friendId: "34p98tw",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "4gtf359g",
        friendId: "l2r8rrf3",
        dateAdded: new Date(),
        isFavourite: false,
    },
    {
        userId: "4gtf359g",
        friendId: "2p498ty",
        dateAdded: new Date(),
        isFavourite: false,
    },
]

export const reviewSeedData: Prisma.ReviewUncheckedCreateInput[] = [
    {
        gameId: "ky7r3hm8",   
        userId: "w34tuh3",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 4,
        reviewContents: "Great!"
    },
    {
        gameId: "tp2q9nj5",
        userId: "w34tuh3",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "kfhsgj",
    },
    {
        gameId: "tp2q9nj5",
        userId: "4382ty9s",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 1,
        reviewContents: "Love it!",
    },
    {
        gameId: "wg4x8kl2",
        userId: "34p98tw",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "So good!"
    },
    {
        gameId: "ky7r3hm8",
        userId: "34p98tw",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "Loved it!"
    },
    {
        gameId: "tp2q9nj5",
        userId: "34p98tw",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "Absolutely brilliant!"
    },
    {
        gameId: "wg4x8kl2",
        userId: "l2r8rrf3",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 3,
        reviewContents: "a;slkgh",
    },
    {
        gameId: "wg4x8kl2",
        userId: "wg3yop24",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 4,
        reviewContents: "lsgkh;l",
    },
    {
        gameId: "ky7r3hm8",
        userId: "4gtf359g",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "lsfghhlksjd",
    },
]