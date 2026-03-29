// Use the term type defined in prisma/schema.prisma
import { Friend } from "@prisma/client";
// initialize a prisma client if not already and use in queries here
import prisma from "../../../../prisma/client";

import { format } from 'date-fns';

/**
 * Retrieves all friends from storage
 * @returns Array of all friends
 */
export const fetchAllFriends = async(): Promise<Friend[]> => {
    return prisma.friend.findMany();
}

/**
 * Retrieves one friend from services
 * @param id - The ID of the friend to be retrieved
 * @returns The Friend being retrieved
 * @throws If the id doesn't match a friend listed
 */

export const getFriendById = async(userId: string, friendId: string): Promise<Friend | null> => {
    return await prisma.friend.findUnique({
        where: {
            userId_friendId: {
                userId,
                friendId,
            },
        },
    });
}


/**
 * Retrieves one friend from services
 * @param userName - The user name of the friend to be retrieved
 * @returns The Friend being retrieved
 * @throws If the user name doesn't match an existing friend
 */

export const getFriendByUserName = async(userName: string): Promise<Friend[]> => {
    const user = await prisma.user.findUnique({
        where: { userName },
        include: { friends: true },
    });

    if (!user) return [];
    return user.friends;
};

export const getFriendsByUserId = async (userId: string): Promise<Friend[]> => {
    return await prisma.friend.findMany({
        where: { userId },
        include: { friend: true },
    });
};

export const getFriendsByUserName = async (userName: string): Promise<Friend[]> => {
    const user = await prisma.user.findUnique({
        where: { userName },
    });

    if (!user) return [];

    const friends = await prisma.friend.findMany({
        where: { userId: user.id },
        include: { friend: true },
    });

    return friends;
};

// addFriend

export const addFriendByUserName = async (
    userName: string,
    friendUserName: string,
    dateAdded: Date,
    isFavourite: boolean
): Promise<Friend> => {
    const user = await prisma.user.findUnique({ where: { userName }});
    const friendUser = await prisma.user.findUnique({ where: { userName: friendUserName } });

    if (!user || !friendUser) {
        throw new Error("One or both users do not exist.");
    }

    const existingFriend = await prisma.friend.findUnique({
        where: {
            userId_friendId: { userId: user.id, friendId: friendUser.id},
        },
    });

    if (existingFriend) {
        throw new Error(`${friendUserName} is already a friend of ${userName}.`);
    }

    const newFriend = await prisma.friend.create({
        data: {
            userId: user.id,
            friendId: friendUser.id,
            dateAdded,
            isFavourite,
        },
    });

    return newFriend;
}

export const addFriend = async(
    userId: string,
    friendId: string,
    dateAdded: Date,
    isFavourite: boolean
): Promise<Friend> => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const friendUser = await prisma.user.findUnique({ where: { id: friendId } });

    if (!user || !friendUser) {
        throw new Error("One or both users do not exist.");
    }

    const existing = await prisma.friend.findUnique({
        where: {
            userId_friendId: { userId, friendId },
        },
    });

    if (existing) {
        throw new Error("Friendship already exists.");
    }

    return await prisma.friend.create({
        data: { userId, friendId, dateAdded, isFavourite },
    });
};

// updateFriend

export const updateFriend = async(
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

// deleteFriend

export const deleteFriend = async(userId: string, friendId: string): Promise<void> => {
    await prisma.friend.delete({
        where: {
            userId_friendId: { userId, friendId },
        },
    });
};