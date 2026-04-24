import type { Friend } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

/**
 * Retrieves all friends from storage
 * @returns Array of all friends
 */
export const getAllFriends = async(): Promise<Friend[]> => {
    return prisma.friend.findMany();
}

export const addFriendByUserName = async (
    userName: string,
    friendUserName: string
): Promise<Friend> => {

    const user = await prisma.user.findUnique({ where: { userName } });
    const friend = await prisma.user.findUnique({ where: { userName: friendUserName } });

    if (!user || !friend) {
        throw new Error("User not found");
    }

    return prisma.friend.create({
        data: {
            userId: user.id,
            friendId: friend.id,
            isFavourite: false,
            dateAdded: new Date(),
        },
    });
};

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
