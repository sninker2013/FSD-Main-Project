import { useState, useEffect } from "react";
import "./friends_list.css";
import type { Friend } from "../../../../../../shared/types/friends";
import { FriendForm } from "../friends_form/friends_form";
import starIcon from "./assets/star-transparent.png";

import {
    getFriends,
    addFriendByUserName,
    updateFriendFavourite,
    deleteFriend
} from "../../../apis/friends/friendsRepo";

function FriendItem({ 
    friendUserName,
    isFavourite,
    onToggleFavourite,
    onDelete
}: { 
    friendUserName: string;
    isFavourite: boolean;
    onToggleFavourite: () => void;
    onDelete: () => void;
}) {
  return (
    <li className={`friends ${isFavourite ? "favourite" : ""}`}> 
        {isFavourite && <img src={starIcon} alt="star" style={{ width: "16px", marginLeft: "5px" }} />}
        {friendUserName}
        <button onClick={onToggleFavourite} style={{ marginLeft: "10px" }}>
            {isFavourite ? "Remove" : "Favourite"}
        </button>
        <button onClick={onDelete} style={{ marginLeft: "5px" }}>Delete</button>
    </li>
  );
}

export function FriendsList({ currentUserName }: { currentUserName: string }) {
    const [friends, setFriends] = useState<Friend[]>([]);

    const loadFriends = async () => {
        const data = await getFriends();
        setFriends(data);
    };

    useEffect(() => {
        loadFriends();
    }, []);

    const handleAddFriend = async (friendUserName: string) => {
        await addFriendByUserName(currentUserName, friendUserName);
        await loadFriends();
    };

    const handleToggleFavourite = async (friendId: string) => {
        await updateFriendFavourite(friendId);
        await loadFriends();
    };

    const handleDelete = async (friendId: string) => {
        await deleteFriend(friendId);
        await loadFriends();
    };

    return (
        <>
            <DisplayFriendsList 
                friendsList={friends} 
                onToggleFavourite={handleToggleFavourite}
                onDelete={handleDelete}
            />
            <FriendForm 
                currentUserName={currentUserName} 
                checkUserExists={async (userName) => {
                    const friend = await getFriends();
                    return friend.some(f => f.friendUserName === userName);
                }}
                onSubmit={handleAddFriend} 
            />
        </>
    );
}

function DisplayFriendsList({
    friendsList,
    onToggleFavourite,
    onDelete
}: {
    friendsList: Friend[];
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
                        friendUserName={friend.friendUserName}
                        isFavourite={friend.isFavourite}
                        onToggleFavourite={() => onToggleFavourite(friend.id)}
                        onDelete={() => onDelete(friend.id)}
                    />
                ))}
            </ul>
        </section>
    );
}

export default FriendsList;