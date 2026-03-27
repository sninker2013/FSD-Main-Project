import { User } from "@prisma/client";
import { Game } from "@prisma/client";
import { Review } from "@prisma/client";
import { Friend } from "@prisma/client";

export const userSeedData: User = [
    {
        id: "w34tuh3",
        userName: "timdrake",
        dateCreated: new Date(),
    },
    {
        id: "4382ty9s",
        userName: "peterparker",
        dateCreated: new Date(),
    },
    {
        id: "2p498ty",
        userName: "surlycat",
        dateCreated: new Date(),
    },
    {
        id: "34p98tw",
        userName: "ChasingRainbows",
        dateCreated: new Date(),
    },
    {
        id: "l2r8rrf3",
        userName: "lotsOfLeg",
        dateCreated: new Date(),
    },
    {
        id: "wg3yop24",
        userName: "demolitionBabe",
        dateCreated: new Date(),
    },
    {
        id: "4gtf359g",
        userName: "endlessGrace",
        dateCreated: new Date(),
    },
]

export const gameSeedData: Game = [
    {
        id: "3ao8twl",
        gameName: "Elden Ring",
        coverPicture: "",
        gameDescription: "sgk",
        releaseDate: new Date(),
    },
    {
        id: "lkt8h4l3r",
        gameName: "skghl",
        coverPicture: "",
        gameDescription: "sdlgkhlkgh",
        releaseDate: new Date(),
    },
    {
        id: "7a2i09ew4",
        gameName: "wghoiwroi",
        coverPicture: "",
        gameDescription: "akslg;h",
        releaseDate: new Date(),
    }
]

export const friendSeedData: Friend = [
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

export const reviewSeedData: Review = [
    {
        gameId: "3ao8twl",   
        userId: "w34tuh3",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 4,
        reviewContents: "Great!"
    },
    {
        gameId: "lkt8h4l3r",
        userId: "w34tuh3",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "kfhsgj",
    },
    {
        gameId: "lkt8h4l3r",
        userId: "4382ty9s",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 1,
        reviewContents: "Love it!",
    },
    {
        gameId: "7a2i09ew4",
        userId: "34p98tw",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "So good!"
    },
    {
        gameId: "3ao8twl",
        userId: "34p98tw",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "Loved it!"
    },
    {
        gameId: "lkt8h4l3r",
        userId: "34p98tw",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "Absolutely brilliant!"
    },
    {
        gameId: "7a2i09ew4",
        userId: "l2r8rrf3",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 3,
        reviewContents: "a;slkgh",
    },
    {
        gameId: "7a2i09ew4",
        userId: "wg3yop24",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 4,
        reviewContents: "lsgkh;l",
    },
    {
        gameId: "3ao8twl",
        userId: "4gtf359g",
        dateCreated: new Date(),
        dateEditted: new Date(),
        stars: 5,
        reviewContents: "lsfghhlksjd",
    },
]