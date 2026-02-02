import { useState } from "react";
import "./friends_list.css"
import type { Friends } from "../../../types/friends";
import { FriendForm } from "../friends_form/friends_form";

const testFriends: Friends[] = [
    {id: "101", userName: "timdrake"},
    {id: "102", userName: "donnatroy"},
    {id: "103", userName: "peterparker"}
]

function FriendItem({ userName }: { userName: string }) {
  return <li className="friends">{userName}</li>;
}

export function FriendsList () {
    const [friends, setFriends] = useState<Friends[]>(
        testFriends
    );

    const handleAddFriend = (userName: string) => {
        const newFriend: Friends = {
            id: crypto.randomUUID(),
            userName
        };
        setFriends(prev => [...prev, newFriend])
    };

    return (
        <>
            <DisplayFriendsList friendsList={friends} />
            <FriendForm onSubmit={handleAddFriend}/>
        </>
    );
}

function DisplayFriendsList({
    friendsList
}: {
    friendsList: Friends[];
}) {
    return (
        <section className="friendsList">
            <h2 id="friendsListTitle">Friends</h2>
                <ul className="friend__list">
                    {friendsList.map(friend => (
                        <FriendItem
                            key={friend.id}
                            userName={friend.userName}
                        />
                    ))}
                </ul>
        </section>
    )
}

export default FriendsList
