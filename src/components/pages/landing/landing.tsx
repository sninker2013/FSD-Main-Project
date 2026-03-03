import "./landing.css"
import { useState, useEffect } from "react";
import { useSearch } from "../../../hooks/useSearch";
import type { Game } from "../../../types/game";
import { SearchBar } from "../../common/search-bar/SearchBar";
import { GameListPage } from "../game-list-page/GameListPage";

export function Landing() {
    const {
        searchValue,
        setSearchValue,
        trySearch
    } = useSearch();

    // useState to determine if the search length has changed
    const [searchLength, setSearchLength] = useState(0);

    // maps over the games list to find ones that match the search term
    const gameFilter = (gameEle: Game) => {
        if(searchLength != 0) {
            return gameEle.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        } else {
            return false;
        }
    }

    // Debounce function so the search bar takes a second to update when typing
    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            const validSearch = trySearch().isValid;
            if(validSearch) {
                setSearchLength(searchValue.length);
            } else {
                setSearchLength(0);
            }
        }, 500);
        return () => clearTimeout(debounceSearch);
    }, [searchValue]);

    return (
        <>
            <h2 className="landing-title">Search for a Game</h2>
            <main className="page-landing">
                <SearchBar
                    searchValue={searchValue}
                    messages={[]}
                    handleSearchChange={e => {
                        setSearchValue(e);
                    }}
                    handleSubmit={() => {}}
                />
                <GameListPage 
                    dependencies={[searchLength]}
                    filterFn={gameFilter}/>
            </main>
        </>
    )
}