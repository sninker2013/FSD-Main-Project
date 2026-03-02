import { Game } from "../types/game";
import { sampleGames } from "../data/gameData.ts";

export const GameService ={
    async fetchGames(): Promise<Games[]> {
        return await sampleGames.fetchGames();
    },
    
    async toggleFeaturedGame(gameId: number): Promise<void> {
        const game: Game = await sampleGames.getGameById(gameId);

        if (game.isFeatured) {
            await sampleGames.deleteFeaturedGame(game.id);
        } else {
            await sampleGames.addFeaturedGame(game.id);
        }
    }
};