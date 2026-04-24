import type { Friend } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

/**
 * Retrieves all friends from storage
 * @returns Array of all friends
 */
export const getAllFriends = async(): Promise<Friend[]> => {
    return prisma.friend.findMany();
}

export const updateFriendFavourite = async (
  userId: string,
  friendId: string,
  data: { isFavourite: boolean }
) => {
  try {
    return await prisma.friend.update({
      where: {
        userId_friendId: { userId, friendId }, // composite key
      },
      data,
    });
  } catch (err: any) {
    console.error("Error updating friend:", err);
    if (err.code === "P2025") {
      // Prisma record not found
      throw new Error("Friend relationship not found");
    }
    throw new Error("Failed to update friend");
  }
};
