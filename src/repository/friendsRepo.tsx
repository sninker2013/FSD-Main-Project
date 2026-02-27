import type { Friends } from "../types/friends";

let friendsData: Friends[] = [];

export const initializeFriends = (data: Friends[]): void => {
    friendsData = [...data];
};

export const getFriends = (): Friends[] => {
    return friendsData;
};

export const addFriend = (userName: string): Friends => {
    const newFriend: Friends = {
        id: crypto.randomUUID(),
        userName,
        isFavourite: false
    };

    friendsData = [...friendsData, newFriend];
    return newFriend;
};

export const updateFriendFavourite = (friendId: string) => {
    friendsData = friendsData.map((friend) =>
        friend.id === friendId
            ? { ...friend, isFavourite: !friend.isFavourite }
            : friend
    );
};

export const deleteFriend = (friendId: string): void => {
    friendsData = friendsData.filter(
        (friend) => friend.id !== friendId
    );
};