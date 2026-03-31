import { Request, Response, NextFunction } from 'express';
import type { Game } from "../../../generated/prisma/client"
import * as gameService from '../services/gameService';
import { successResponse } from '../models/responseModel';

/**
 * Gets all games and sends 200 if it succeeds
 * Transforms database fields to frontend format
 */
export async function getAllGames(_req: Request, res: Response, next: NextFunction) {
    try {
        const games: Game[] = await gameService.fetchAllGames();
        
        // Transform database fields to frontend format
        const transformedGames = games.map(game => ({
            id: game.id,
            title: game.gameName,
            imageSrc: game.coverPicture
        }));
        
        res.status(200).json(successResponse(transformedGames, "Games retrieved successfully"));
    } catch (error) {
        next(error);
    }
}
