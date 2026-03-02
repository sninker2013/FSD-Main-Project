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

