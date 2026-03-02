import * as GameRepo from "../repositories/gameRepo";
import { Game } from "../types/game";

/**
 * Game Service - Business logic layer for game operations.
 * Delegates all data access to the GameRepository.
 */

/**
 * Fetch all games
 * @returns Promise<Game[]> - Array of all games
 */
export async function fetchGames(): Promise<Game[]> {
    return GameRepo.fetchGames();
}

/**
 * Fetch a single game by ID
 * @param id - The game ID to fetch
 * @returns Promise<Game | null> - The game object or null if not found
 */
export async function fetchGameById(id: number): Promise<Game | null> {
    return GameRepo.fetchGameById(id);
}

/**
 * Add a new game with validation
 * @param game - The game object to add
 * @returns Promise<Game> - The newly created game
 * @throws Error if validation fails
 */
export async function addGame(game: Omit<Game, 'id'>): Promise<Game> {
    if (!game.title || game.title.trim() === "") {
        throw new Error("Game title is required");
    }
    
    return GameRepo.addGame(game);
}

/**
 * Remove a game
 * @param id - The game ID to remove
 * @returns Promise<boolean> - True if removed, false if not found
 */
export async function removeGame(id: number): Promise<boolean> {
    return GameRepo.removeGame(id);
}

/**
 * Toggle a game's featured status
 * @param id - The game ID to toggle
 * @returns Promise<Game> - The updated game
 */
export async function toggleFeaturedGame(id: number): Promise<Game> {
    return GameRepo.toggleFeaturedGame(id);
}

/**
 * Update a game's properties
 * @param id - The game ID to update
 * @param updates - Partial game object with properties to update
 * @returns Promise<Game> - The updated game
 */
export async function updateGame(
    id: number,
    updates: Partial<Omit<Game, 'id'>>
): Promise<Game> {
    return GameRepo.updateGame(id, updates);
}
