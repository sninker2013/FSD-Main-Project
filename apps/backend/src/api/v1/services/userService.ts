// placeholders right now so I can try to figure it out
import type { User } from "../../../../../../shared/types";

import { testUsers } from "../../../../../frontend/src/apis/friends/friendsData";

const users: User[] = testUsers;

/**
 * Retrieves all users from storage
 * @returns Array of all users
 */
export const getAllUsers = async (): Promise<User[]> => {
    return structuredClone(users);
};

/**
 * Creates a new user
 * @param userData - The data for the new user (userId, userName and dateCreated)
 * @returns The created user with generated ID
 */
export const createUser = async (userData: {
    id: string;
    name: string;
    dateCreated: Datetime;
}): Promise<User> => {
    const dateNow = new Date();
    const newUser: Partial<User> = {
        ...userData,
        createdAt: dateNow,
        updatedAt: dateNow,
    };

    const userId: string = await createUser<User>(COLLECTION, newUser);

    return structuredClone({ id: userId, ...newUser } as User);
};