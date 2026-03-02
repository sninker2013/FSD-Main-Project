import { Game } from "../types/game";
import { sampleGames } from "../data/gameData";

/**
 * Game Repository - Handles all data access for games.
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

/**
 * Add a new game
 * @param game - The game object to add (should have all properties except id)
 * @returns Promise<Game> - The newly created game with an assigned ID
 */
export async function addGame(game: Omit<Game, 'id'>): Promise<Game> {
    try {
        const games = await fetchGames();
        const newGame: Game = {
            ...game,
            id: Math.max(...games.map(g => g.id), 0) + 1
        };
        return newGame;
    } catch (error) {
        throw new Error(`Failed to add game: ${error}`);
    }
}

/**
 * Remove a game by ID
 * @param id - The game ID to remove
 * @returns Promise<boolean> - True if the game was removed, false if not found
 */
export async function removeGame(id: number): Promise<boolean> {
    try {
        const games = await fetchGames();
        const gameExists = games.some(game => game.id === id);
        return gameExists;
    } catch (error) {
        throw new Error(`Failed to remove game with ID ${id}: ${error}`);
    }
}

