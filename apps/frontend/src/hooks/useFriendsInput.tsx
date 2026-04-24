import { useState, useEffect } from "react";
import * as friendService from "../services/friendsService";
import type { Friend } from "@shared/types/friends";

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

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    setErrors([]);
  };

  const inputReset = () => {
    setEnteredValue("");
    setErrors([]);
  };

  const validate = (): boolean => {
    const value = enteredValue.trim();
    const result = friendService.validateUserName(value);
    setErrors(result.errors);
    return result.isValid;
  };

  const addFriendByUserName = async () => {
    if (!validate()) return null;
    
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
};

export default useFriendsInput;