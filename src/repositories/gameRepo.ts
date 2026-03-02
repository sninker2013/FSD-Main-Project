import { Game } from "../types/game";
import { sampleGames } from "../data/gameData";

/**
 * Game Repository - Handles all data access for games.
 * This is where actual CRUD operations would interact with a database or API.
 */

/**
 * Fetch all games from the data source
 * @returns Promise<Game[]> - Array of all games
 */
export async function fetchGames(): Promise<Game[]> {
    try {
        return [...sampleGames];
    } catch (error) {
        throw new Error(`Failed to fetch games: ${error}`);
    }
}

/**
 * Fetch a single game by ID
 * @param id - The game ID to fetch
 * @returns Promise<Game | null> - The game object or null if not found
 */
export async function fetchGameById(id: number): Promise<Game | null> {
    try {
        const games = await fetchGames();
        return games.find(game => game.id === id) || null;
    } catch (error) {
        throw new Error(`Failed to fetch game with ID ${id}: ${error}`);
    }
}

