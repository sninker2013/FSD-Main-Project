import type { Friends } from  "../types/friends";
import * as friendsRepo from "../repository/friendsRepo";

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

export const initializeFriends = (data : Friends[]) =>{
    return friendsRepo.initializeFriends(data);
};

export const getFriends = (): Friends[] => {
    return friendsRepo.getFriends();
};

export const addFriend = (userName: string): Friends => {
    return friendsRepo.addFriend(userName);
};

export const updateFriendFavourite = (friendId: string): void => {
    friendsRepo.updateFriendFavourite(friendId);
};

export const deleteFriend = (friendId: string): void => {
    friendsRepo.deleteFriend(friendId);
}