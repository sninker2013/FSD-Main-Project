import { useState, useEffect } from "react";
import "./friends_list.css"
import type { Friends } from "../../../../../../shared/types/friends";
import { FriendForm } from "../friends_form/friends_form";
import starIcon from "./assets/star-transparent.png";

import { testFriends } from "../../../apis/friends/friendsData";

import {
    getFriends,
    getFriendByUserName,
    getFriendsByUserName,
    addFriendByUserName,
    updateFriendFavourite,
    deleteFriend
} from "../../../apis/friends/friendsRepo";

// Creates the Friends List and adds the friend data to the webpage

function FriendItem({ 
    userName,
    friendUserName,
    isFavourite,
    onToggleFavourite,
    onDelete
 }: { 
    userName: string;
    friendUserName: string;
    isFavourite: boolean;
    onToggleFavourite: () => void;
    onDelete: () => void;
 }) {
  return (
    <li
        className={`friends ${isFavourite ? "favourite" : ""}`}
    > 
        {isFavourite && <img src={starIcon} alt="star" style={{ width: "16px", marginLeft: "5px" }} />}
        {userName}
        <button id="favouriteButton" onClick={onToggleFavourite} style={{ marginLeft: "10px" }}>
                {isFavourite ? "Remove" : "Favourite"}
            </button>
        <button id="deleteButton" onClick={onDelete} style={{ marginLeft: "5px" }}>Delete</button>
    </li>
  );
}

export function FriendsList () {
    const [friends, setFriends] = useState<Friends[]>([]);

    useEffect(() => {
        initializeFriends(testFriends);
        setFriends(getFriends());
    }, []);

    const handleAddFriend = (userName: string) => {
        addFriend(userName);
        setFriends(getFriends());
    };

    const handleToggleFavourite = (friendId: string) => {
        updateFriendFavourite(friendId);
        setFriends(getFriends());
    }

    const handleDelete = (friendId: string) => {
        deleteFriend(friendId);
        setFriends(getFriends());
    };

    return (
        <>
            <DisplayFriendsList 
                friendsList={friends} 
                onToggleFavourite={handleToggleFavourite}
                onDelete={handleDelete}
            />
            <FriendForm onSubmit={handleAddFriend}/>
        </>
    );
}

function DisplayFriendsList({
    friendsList,
    onToggleFavourite,
    onDelete
}: {
    friendsList: Friends[];
    onToggleFavourite: (id: string) => void;
    onDelete: (id: string) => void;
}) {

    return (
        <section className="friendsList">
            <h2 id="friendsListTitle">Friends</h2>
                <ul className="friend__list">
                    {friendsList.map(friend => (
                        <FriendItem
                            key={friend.id}
                            userName={friend.userName}
                            isFavourite={friend.isFavourite}
                            onToggleFavourite={() =>
                                onToggleFavourite(friend.id)
                            }
                            onDelete={() =>
                                onDelete(friend.id)
                            }
                        />
                    ))}
                </ul>
        </section>
    );
}

export default FriendsList
