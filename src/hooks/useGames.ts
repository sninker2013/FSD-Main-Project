import { useEffect, useState } from "react";
import * as GameService from "../services/gameService";
import { Game } from "../types/game";

/**
 * Custom hook for managing game data fetching, filtering, and state management.
 * 
 * This hook handles:
 * - Fetching games from the GameService
 * - Optionally filtering games based on a provided filter function
 * - Managing loading and error states
 * - Providing a method to toggle the featured status of a game
 * 
 * @param dependencies - Array of dependencies that trigger a re-fetch when changed.
 *  Pass an empty array [] if you only want to fetch once on component mount.
 * @param filterFn - Optional filter function that receives a Game object and returns
 *  true if the game should be included, false otherwise. If not provided, all games
 *  are returned. Example: (game) => game.isFeatured === true
 * 
 * @returns Object containing:
 *  - games: Game[] - The filtered array of games from the service
 *  - error: string | null - Any error message from the fetch or toggle operation
 *  - toggleFeaturedGame: (gameId: number) => Promise<void> - Async function to toggle
 *    a game's featured status and refresh the games list
 */
export function useGames(
    dependencies: unknown[],
    filterFn? : ((game: Game) => boolean)|null,
) {
    // extract methods from useAuth() clerk method
    const [games, updateGames] = useState<Game[]>([]);
    const [error, setError] = useState<string | null>();

    /**
     * Fetches all games from GameService and applies the optional filter function.
     * If an error occurs, it is stored in the error state for the component to handle.
     */
    const fetchGames = async() => {
        try {
            let result = await GameService.fetchGames();

            /** 
             * If there is a filterFn argument for the hook, then only store games
             * that return "true" for that function.
             */
            if(filterFn) {
                result = result.filter(filterFn);
            }

            // map the resulting array onto the state
            updateGames([...result]);
        } catch(errorObject) {
            // set the error state to the error object if an error is caught
            setError(`${errorObject}`);
        }
    }

    /**
     * Toggles the featured status of a game by calling GameService.toggleFeaturedGame(),
     * then automatically re-fetches all games to update the state.
     * 
     * @param gameId - The ID of the game whose featured status should be toggled
     */
    const toggleFeaturedGame = async(gameId: number) => {
        try {
            await GameService.toggleFeaturedGame(gameId);

            // re-fetch games to update our state once the operation is finished
            await fetchGames();
        } catch(errorObject) {
            setError(`${errorObject}`);
        }   
    }

    /**
     * Effect hook that runs fetchGames on component mount and whenever any
     * dependency in the dependencies array changes. This ensures the games list
     * is always up-to-date when external state (like user selection) changes.
     */
    useEffect(() => {
        fetchGames();
    }, [...dependencies]);

    // Return the games state, error state, and toggle function for component usage
    return { 
        games, 
        error, 
        toggleFeaturedGame 
    };
}
