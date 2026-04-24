import type { Friend } from  "@shared/types/friends";
import * as friendsRepo from "../apis/friends/friendsRepo";


export class ServiceError extends Error {
    constructor(message: string) {
        super(message);
    }
}
/**
 * This Service function handles the validation for the friendsInput
 * for the friendsForm.
 * @param userName - string - the userName that has been entered into friendsForm
 * @returns 
 * - string: if valid will add the userName to the friends list and
 * show string "Form is valid!"
 * - error: if invalid will return string "User Name needs at least 3 characters."
 */
export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export function validateUserName(userName: string) {
  const errors: string[] = [];
  if (userName.trim().length < 3) {
    errors.push("User Name needs at least 3 characters.");
  }
  return { isValid: errors.length === 0, errors };
}

export const getFriendsForUser = async (currentUserName: string): Promise<Friend[]> => {
    return await friendsRepo.getFriendsForUser(currentUserName);
};

export const addFriendByUserName = async (userName: string, friendUserName: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/friends`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, friendUserName }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to add friend");
  }

  const json = await res.json();
  return json.data;
};

export const updateFriendFavourite = async (
    userId: string,
    friendId: string,
    isFavourite: boolean
): Promise<Friend> => {
    return await friendsRepo.updateFriendFavourite(
        userId,
        friendId,
        isFavourite
    );
};