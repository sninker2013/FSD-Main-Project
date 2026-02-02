import { useState } from "react";
import "./friends_list.css"
import type { Friends } from "../../../types/friends";
import { FriendForm } from "../friends_form/friends_form";

const testFriends: Friends[] = [
    {id: "101", userName: "timdrake", isFavourite: false},
    {id: "102", userName: "donnatroy", isFavourite: false},
    {id: "103", userName: "peterparker", isFavourite: false}
]

function FriendItem({ 
    userName,
    isFavourite,
    onToggleFavourite
 }: { 
    userName: string;
    isFavourite: boolean;
    onToggleFavourite: () => void;
 }) {
  return (
    <li
        className={`friends ${isFavourite ? "favourite" : ""}`}
        onClick={onToggleFavourite}
    > 
        {userName}
    </li>
  );
}

export function FriendsList () {
    const [friends, setFriends] = useState<Friends[]>(
        testFriends
    );

    const handleAddFriend = (userName: string) => {
        const newFriend: Friends = {
            id: crypto.randomUUID(),
            userName,
            isFavourite: false
        };
        setFriends(prev => [...prev, newFriend])
    };

    return (
        <>
            <DisplayFriendsList 
                friendsList={friends} 
                updateFavourite={setFriends}
            />
            <FriendForm onSubmit={handleAddFriend}/>
        </>
    );
}

function DisplayFriendsList({
    friendsList,
    updateFavourite
}: {
    friendsList: Friends[];
    updateFavourite: React.Dispatch<React.SetStateAction<Friends[]>>
}) {
    const handleFriendsFavouriteClick = (friendClicked: Friends): void =>
        updateFavourite(prev => 
            prev.map(friend => 
                friend.id === friendClicked.id
                    ? { ...friend, isFavourite: !friend.isFavourite }
                    : friend
            )
        );

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
                                handleFriendsFavouriteClick(friend)
                            }
                        />
                    ))}
                </ul>
        </section>
    );
}

export default FriendsList
