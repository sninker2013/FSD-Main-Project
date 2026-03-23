import type { Friends } from "../../../../../../shared/types";

import { testFriends } from "../../../../../frontend/src/apis/friends/friendsData";

const friends: Friends[] = testFriends;

/**
 * Retrieves all friends from storage
 * @returns Array of all friends
 */
export const getAllFriends = async (): Promise<Friends[]> => {
    return structuredClone(friends);
};
