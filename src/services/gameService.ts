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

