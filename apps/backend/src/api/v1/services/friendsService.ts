import type { Friend, User } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

/**
 * Retrieves all friends from storage
 * @returns Array of all friends
 */
export const getAllFriends = async(): Promise<Friend[]> => {
    return prisma.friend.findMany();
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

export const getFriendsByUserName = async (userName: string): Promise<User[]> => {
  const user = await prisma.user.findUnique({
    where: { userName },
  });

  if (!user) return [];

  const friendships = await prisma.friend.findMany({
    where: { userId: user.id },
    include: { friend: true }, // <- This gives the actual User object
  });

  // Explicitly type `f` as Friend & { friend: User }
  return friendships.map((f: Friend & { friend: User }) => f.friend);
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

// deleteFriend

export const deleteFriend = async(userId: string, friendId: string): Promise<void> => {
    await prisma.friend.delete({
        where: {
            userId_friendId: { userId, friendId },
        },
    });
};