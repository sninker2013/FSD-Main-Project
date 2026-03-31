import type { Game } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

/**
 * Gets all games from Prisma.
 * @returns {Game[]} - an array of all games
 */
export async function fetchAllGames(): Promise<Game[]> {
  return await prisma.game.findMany();
}
