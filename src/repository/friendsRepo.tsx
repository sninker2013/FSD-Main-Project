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

    const friends = testFriends();
    friends.push(newFriend);
    testFriends(friends);
    return newFriend;
};

export const updateFriendFavourite = (friendId: string): void => {
    const friends = testFriends();
    const updatedFriends = friends.map((friend) =>
        friend.id === friendId
            ? { ...friend, isFavourite: !friend.isFavourite }
            : friend
    );

    testFriends(updatedFriends);
};

export const deleteFriend = (friendId: string): void => {
    const friends = testFriends();
    const updatedFriends = friends.filter((friend) => friend.id !== friendId);
    testFriends(updatedFriends);
}