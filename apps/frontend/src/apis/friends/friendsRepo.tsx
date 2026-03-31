import type { Friend } from "../../../../../shared/types/friends";

type FriendsResponseJSON = {message: String, data: Friend[]};
type FriendResponseJSON = {message: String, data: Friend};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const FRIEND_ENDPOINT = "/friends"

/**
 * getFriends - gets the entire list of friends from the friends data and shows it
 * on the page.
 * @returns 
 * list - a list of friends from the data
 */

export async function getFriends(): Promise<Friend[]> {
    const friendResponse: Response = await fetch(
        `${BASE_URL}${FRIEND_ENDPOINT}`
    );

    if(!friendResponse.ok) {
        throw new Error("Failed to fetch friends");
    }

    const json: FriendsResponseJSON = await friendResponse.json();
    return json.data;
}

export async function getFriendByUserName(friendUserName: string): Promise<Friend> {
    const friendResponse: Response = await fetch(
        `${BASE_URL}${FRIEND_ENDPOINT}/${friendUserName}`
    );

    if(!friendResponse.ok) {
        throw new Error(`Failed to fetch friend with user name ${friendUserName}`);
    }

    const json: FriendResponseJSON = await friendResponse.json();
    return json.data;
}

export async function getFriendsByUserName(userName: string): Promise<Friend[]> {
    const friendResponse: Response = await fetch(
        `${BASE_URL}${FRIEND_ENDPOINT}/of/${userName}`
    );

    if(!friendResponse.ok) {
        throw new Error(`Failed to fetch friends with user name ${userName}`);
    }

    const json: FriendsResponseJSON = await friendResponse.json();
    return json.data;
}

/**
 * addFriend
 * @param userName - the userName of the friend 
 * @returns 
 * - userName: string - that has been added to the list.
 */

export async function addFriendByUserName(
    userName: string,
    friendUserName: string
): Promise<Friend> {
    const res = await fetch(`${BASE_URL}${FRIEND_ENDPOINT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            userName,
            friendUserName,
        }),        
    });

    if (!res.ok) throw new Error("Failed to add friend");

    const json: FriendResponseJSON = await res.json();
    return json.data;
};

/**
 * updateFriendFavourite - updates if the friend has been favourited
 * @param friendId - string used to apply the favourite to the friendId
 */

export async function updateFriendFavourite(
    userId: string,
    friendId: string,
    isFavourite: boolean
): Promise<Friend> {
    const updateResponse: Response = await fetch(
        `${BASE_URL}${FRIEND_ENDPOINT}/${userId}/${friendId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ isFavourite }),
        }
    );

    if (!updateResponse.ok) throw new Error("Failed to update friend");

    const json: FriendResponseJSON = await updateResponse.json();
    return json.data;
}


/**
 * deleteFriend - deletes friend from the friendsList
 * @param friendId - string: the friendId to make sure that it
 * applies to the friend you want to delete.
 */

export async function deleteFriend(
    userId: string,
    friendId: string
): Promise<void> {
    const res = await fetch(
        `${BASE_URL}${FRIEND_ENDPOINT}/${userId}/${friendId}`,
        {
            method: "DELETE",
        }
    );
    if (!res.ok) throw new Error("Failed to delete friend");
};