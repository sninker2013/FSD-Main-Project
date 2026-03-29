import type { Friend } from  "@shared/types/friends";
import * as friendsRepo from "../apis/friends/friendsRepo";

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

export function validateUserName(userName: string): ValidationResult {

    const errors: string[] = [];

    if (userName.trim().length < 3) {
        errors.push("User Name needs at least 3 characters.");
    }

    return { 
        isValid: errors.length === 0,
        errors,
    };
}

export async function getFriends(): Promise<Friend[]> {
    return await friendsRepo.getFriends();
}

export const addFriendByUserName = async (
    userName: string,
    friendUserName: string
): Promise<Friend> => {
    return await friendsRepo.addFriendByUserName(userName, friendUserName);
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

export const deleteFriend = async (
    userId: string,
    friendId: string
): Promise<void> => {
    await friendsRepo.deleteFriend(userId, friendId);
}