import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import FriendsList from "../../friends_list/friends_list";
import { PopularGames } from "../../popular_games/PopularGames";
import Reviews from "../../reviews/Reviews";

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <PopularGames />
            <FriendsList />
            <Reviews />
            <Footer />
        </>
    )
}