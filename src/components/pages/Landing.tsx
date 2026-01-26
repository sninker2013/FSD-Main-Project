import { useState } from "react";
import FriendsList from "../friends_list/friends_list";
import { PopularGames } from "../popular_games/PopularGames";
import Reviews from "../reviews/Reviews";

export function Landing() {
    return (
        <>
        <PopularGames />
        <FriendsList />
        <Reviews />
        </>
    )
}