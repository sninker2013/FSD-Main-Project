import { useSearchParams } from "react-router-dom";
import type { Game } from "../../types/game";
import { GameListPage } from "./game-list-page/GameListPage";

/**
 * filters the games from the search and displays the results
 */
export function SearchResult() {
    const [searchParams] = useSearchParams();
    const value = searchParams.get("value");

    if(value) {
        const searchFilter = (gameEle: Game) => {
            return gameEle.title.toLowerCase().includes(
                value.toLowerCase().trim()
            );
        };
    
        return(
            <main>
                <GameListPage 
                dependencies={[value]}
                filterFn={searchFilter}/>
            </main>
        )
    } else {
        return(<h1>Sorry, something went wrong</h1>);
    }
}