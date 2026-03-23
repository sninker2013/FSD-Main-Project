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

export const getFriendById = async(id: string): Promise<Friend | null> => {
    try {
        const friend = prisma.friend.findUnique({
            where: {
                id: id
            }
        });

        if(!friend) {
            return null;
        } else{
            return friend;
        }
    } catch(error) {
        throw new Error(`Failed to fetch friend with id ${id}`);
    }
}

// getFriendByUserName

// searches for the userName and returns the User if userName matches one in the database

// addFriend

// what I want for addFriend is that it checks that the user with that id(?) if that id can be found

// updateFriends

export const updateFriend = async(
    id: string,
    friend: {friendId: string, dateAdded: Date, isFavourite: boolean}
): Promise<Friend> => {
    const updateFriend = await prisma.friend.update({
        where: {
            id: id
        },
        data: {
            ...friend
        }
    });
    return updateFriend;
}

// deleteFriend

