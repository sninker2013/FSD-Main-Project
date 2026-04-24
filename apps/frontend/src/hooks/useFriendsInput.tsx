import { useState, useEffect } from "react";
import * as friendService from "../services/friendsService";
import type { Friend } from "@shared/types/friends";

<<<<<<< HEAD
interface UseFriendsInputReturn {
  value: string;
  errors: string[];
  friends: Friend[];
  valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputReset: () => void;
  validate: () => boolean;
  addFriendByUserName: () => Promise<Friend | null>;
  updateFriendFavourite: (
    userId: string,
    friendId: string,
    isFavourite: boolean
  ) => Promise<void>;
}

const useFriendsInput = (currentUserName: string): UseFriendsInputReturn => {
  const [enteredValue, setEnteredValue] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
=======
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

    getFriendByUserName: (friendUserName: string) => Promise<Friend | null>;
    getFriendsByUserName: (userName: string) => Promise<Friend[]>;
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
>>>>>>> parent of a4f5be7 (Fixed up code in frontend and backend so they would work together better.)

  useEffect(() => {
    if (!currentUserName) return; // avoid fetching if no user
    loadFriends();
  }, [currentUserName]);

  const loadFriends = async () => {
    try {
      const data = await friendService.getFriendsForUser(currentUserName);
      setFriends(data);
    } catch {
      setErrors(["Failed to load friends"]);
    }
  };

<<<<<<< HEAD
  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    setErrors([]);
  };

  const inputReset = () => {
    setEnteredValue("");
    setErrors([]);
  };
=======
    const loadFriends = async () => {
        const data = await friendService.getFriends();
        setFriends(data);
    }

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
        setErrors([]);
        setSuccess("");
    };
>>>>>>> parent of a4f5be7 (Fixed up code in frontend and backend so they would work together better.)

  const validate = (): boolean => {
    const value = enteredValue.trim();
    const result = friendService.validateUserName(value);
    setErrors(result.errors);
    return result.isValid;
  };

<<<<<<< HEAD
  const addFriendByUserName = async () => {
    if (!validate()) return null;
=======
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

    const getFriendsByUserName = async (userName: string) => {
        return friendService.getFriendsByUserName(userName);
    };

    const getFriendByUserName = async (friendUserName: string) => {
        return friendService.getFriendByUserName(friendUserName);
    };

    const addFriendByUserName = async (
        currentUserName: string
    ): Promise<Friend | null> => {
        if (!validate()) return null;

        const newFriend = await friendService.addFriendByUserName(
            currentUserName,
            enteredValue
        );

        await loadFriends();

        setSuccess("Friend added successfully!");
        inputReset();

        return newFriend;
    };
>>>>>>> parent of a4f5be7 (Fixed up code in frontend and backend so they would work together better.)
    
    try {
      const newFriend = await friendService.addFriendByUserName(
        currentUserName,
        enteredValue.trim()
      );
      
      await loadFriends(); 
      inputReset();         
      
      return newFriend;
    
    } catch (err: any) {
      setErrors([err.message || "Failed to add friend"]);
      return null;
    }
  };

<<<<<<< HEAD
  const updateFriendFavourite = async (
    userId: string,
    friendId: string,
    isFavourite: boolean
  ) => {
    try {
      await friendService.updateFriendFavourite(userId, friendId, isFavourite);
      await loadFriends();
    } catch {
      setErrors(["Failed to update friend"]);
    }
  };

  return {
    value: enteredValue,
    errors,
    valueChangeHandler,
    inputReset,
    validate,
    friends,
    addFriendByUserName,
    updateFriendFavourite,
  };
=======
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
        getFriendByUserName,
        getFriendsByUserName,
        addFriendByUserName,
        updateFriendFavourite,
        deleteFriend,
    };
>>>>>>> parent of a4f5be7 (Fixed up code in frontend and backend so they would work together better.)
};

export default useFriendsInput;