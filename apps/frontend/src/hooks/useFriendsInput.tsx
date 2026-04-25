import { useState, useEffect } from "react";
import * as friendService from "../services/friendsService";
import type { Friend } from "@shared/types/friends";

interface UseFriendsInputReturn {
  value: string;
  errors: string[];
  friends: Friend[];
  valueChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputReset: () => void;
  setErrors: (errs: string[]) => void;
  validate: () => boolean;
  addFriendByUserName: () => Promise<Friend | null>;
  updateFriendFavourite: (userId: string, friendId: string, isFavourite: boolean) => Promise<void>;
}

const useFriendsInput = (currentUserName: string): UseFriendsInputReturn => {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    if (!currentUserName) return;
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

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setErrors([]);
  };

  const inputReset = () => {
    setValue("");
    setErrors([]);
  };

  const validate = (): boolean => {
    const trimmed = value.trim();
    const result = friendService.validateUserName(trimmed);
    setErrors(result.errors);
    return result.isValid;
  };

  const addFriendByUserName = async (): Promise<Friend | null> => {
    if (!validate()) return null;
    try {
      const newFriend = await friendService.addFriendByUserName(currentUserName, value.trim());
      await loadFriends();
      inputReset();
      return newFriend;
    } catch (err) {
      console.error(err);
      setErrors(["Failed to add friend"]);
      return null;
    }
  };

  const updateFriendFavourite = async (userId: string, friendId: string, isFavourite: boolean) => {
    try {
      await friendService.updateFriendFavourite(userId, friendId, isFavourite);
      await loadFriends();
    } catch (err) {
      console.error(err);
      setErrors(["Failed to update friend"]);
    }
  };

  return {
    value,
    errors,
    friends,
    valueChangeHandler,
    inputReset,
    setErrors,
    validate,
    addFriendByUserName,
    updateFriendFavourite,
  };
};

export default useFriendsInput;