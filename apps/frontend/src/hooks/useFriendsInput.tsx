import { useState, useEffect } from "react";
import * as friendService from "../services/friendsService";
import type { Friend } from "@shared/types/friends";

/**
 * Custom hook for managing the inputting a new friend into the friend list.
 * 
 * This hook handles:
 * - Inputting username into the friend form
 * 
 * @param validateValue - which will use the friend service to apply validation to the friends form
 * valid if the username is longer than 3 characters, and invalid if it is shorter than 3 characters
 * @returns 
 * - success: string - "Form is valid!"
 * - error: string - "User Name needs at least 3 characters."
 */

interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

interface UseFriendsInputReturn {
    value: string;
    errors: string[];
    success: string;
    friends: Friend[];
    valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputReset: () => void;
    validate: () => boolean;

    addFriendByUserName: (currentUserName: string) => Promise<Friend | null>;
    updateFriendFavourite: (
        userId: string,
        friendId: string,
        isFavourite: boolean
    ) => Promise<void>;
    deleteFriend: (userId: string, friendId: string) => Promise<void>;
}

const useFriendsInput = (): UseFriendsInputReturn => {
    const [enteredValue, setEnteredValue] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState("");

    const [friends, setFriends] = useState<Friend[]>([]);

    useEffect(() => {
        loadFriends();
    }, [])

    const loadFriends = async () => {
        const data = await friendService.getFriends();
        setFriends(data);
    }

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
        setErrors([]);
        setSuccess("");
    };

    /**
     * setEnteredValue - sets the input value if it manages to pass validation
     * setErrors - sets an error if the input value fails validation.
     */

    const inputReset = () => {
        setEnteredValue("");
        setErrors([]);
        setSuccess("");
    };

    /**
     * inputReset - used to reset the setEnteredValue and setErrors so that
     * Sets both to empty
     */

    const validate = (): boolean => {
        const result: ValidationResult = 
            friendService.validateUserName(enteredValue);

        setErrors(result.errors);
        setSuccess(result.isValid ? "Form is valid!" : "");
        return result.isValid;
    };

    /**
     * validate - uses the friendsService to check if the entered value is valid
     * setErrors if the input fails validation
     * returns result.isValid if the input passes validation.
     */

    // Return the value, error state, valueChangeHandler, inputReset, and validate 

    const addFriendByUserName = async (
        currentUserName: string
    ): Promise<Friend | null> => {
        if (!validate()) return null;

        const newFriend = friendService.addFriendByUserName(
            currentUserName,
            enteredValue
        );

        await loadFriends();

        setSuccess("Friend added successfully!");
        inputReset();

        return newFriend;
    };

    const updateFriendFavourite = async (
        userId: string,
        friendId: string,
        isFavourite: boolean
    ) => {
        await friendService.updateFriendFavourite(
            userId,
            friendId,
            isFavourite
        );

        await loadFriends();
    };

    const deleteFriend = async (
        userId: string,
        friendId: string
    ) => {
        await friendService.deleteFriend(userId, friendId);
        await loadFriends();
    };

    return {
        value: enteredValue,
        errors,
        success,
        valueChangeHandler,
        inputReset,
        validate,
        friends,
        addFriendByUserName,
        updateFriendFavourite,
        deleteFriend,
    };
};

export default useFriendsInput;
