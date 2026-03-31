import type { Friend } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

/**
 * Retrieves all friends from storage
 * @returns Array of all friends
 */
export const getAllFriends = async(): Promise<Friend[]> => {
    return prisma.friend.findMany();
}

// updateFriend

export const updateFriendFavourite = async(
    userId: string,
    friendId: string,
    updates: { isFavourite: boolean }
): Promise<Friend> => {
    return await prisma.friend.update({
        where: {
            userId_friendId: { userId, friendId },
        },
        data: updates,
    });
};
