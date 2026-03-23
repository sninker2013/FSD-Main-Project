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