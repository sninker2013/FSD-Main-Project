import type { Friends } from "../../../../../shared/types/friends";

let friendsData: Friends[] = [];

/**
 * business logic for the friends_list
 * initializeFriends - initializes the Friends data so that the it can
 * be used in the file
 * @param data - uses the type for how the friends data needs look like
 */
export const initializeFriends = (data: Friends[]): void => {
    friendsData = [...data];
};

/**
 * getFriends - gets the entire list of friends from the friends data and shows it
 * on the page.
 * @returns 
 * list - a list of friends from the data
 */

export const getFriends = (): Friends[] => {
    return friendsData;
};

/**
 * addFriend
 * @param userName - the userName of the friend 
 * @returns 
 * - userName: string - that has been added to the list.
 */

export const addFriend = (userName: string): Friends => {
    const newFriend: Friends = {
        id: crypto.randomUUID(),
        userName,
        isFavourite: false
    };

    friendsData = [...friendsData, newFriend];
    return newFriend;
};

/**
 * updateFriendFavourite - updates if the friend has been favourited
 * @param friendId - string used to apply the favourite to the friendId
 */

export const updateFriendFavourite = (friendId: string) => {
    friendsData = friendsData.map((friend) =>
        friend.id === friendId
            ? { ...friend, isFavourite: !friend.isFavourite }
            : friend
    );
};

/**
 * deleteFriend - deletes friend from the friendsList
 * @param friendId - string: the friendId to make sure that it
 * applies to the friend you want to delete.
 */

export const deleteFriend = (friendId: string): void => {
    friendsData = friendsData.filter(
        (friend) => friend.id !== friendId
    );
};