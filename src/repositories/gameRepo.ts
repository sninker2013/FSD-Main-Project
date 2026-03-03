import type { Game } from "../types/game";
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

/**
 * Toggle the featured status of a game
 * @param id - The game ID whose featured status should be toggled
 * @returns Promise<Game> - The updated game object
 */
export async function toggleFeaturedGame(id: number): Promise<Game> {
    try {
        const game = await fetchGameById(id);
        if (!game) {
            throw new Error(`Game with ID ${id} not found`);
        }
        
        const updatedGame: Game = {
            ...game,
            isFeatured: !game.isFeatured
        };
        return updatedGame;
    } catch (error) {
        throw new Error(`Failed to toggle featured status for game ${id}: ${error}`);
    }
}

/**
 * Update a game's properties
 * @param id - The game ID to update
 * @param updates - Partial game object with properties to update
 * @returns Promise<Game> - The updated game object
 */
export async function updateGame(
    id: number,
    updates: Partial<Omit<Game, 'id'>>
): Promise<Game> {
    try {
        const game = await fetchGameById(id);
        if (!game) {
            throw new Error(`Game with ID ${id} not found`);
        }
        
        const updatedGame: Game = {
            ...game,
            ...updates
        };
        return updatedGame;
    } catch (error) {
        throw new Error(`Failed to update game with ID ${id}: ${error}`);
    }
}
