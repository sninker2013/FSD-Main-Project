import type { Friends } from "../types/friends";

let friendsData: Friends[] = [];

export const initializeFriends = (data: Friends[]) => {
    friendsData = [...data];
};

export const getFriends = (): Friends[] => {
    return friendsData;
};

export const addFriend = (userName: string): Friends[] => {
    const newFriend: Friends = {
        id: crypto.randomUUID(),
        userName,
        isFavourite: false
    };

    const friends = placeholder();
    friends.push(newFriend);
    placeholder(friends);
    return newFriend;
};