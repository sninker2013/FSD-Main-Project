import "./friends_list.css"

type Friends = {
    id: number,
    userName: string
};

const testFriends: Friends[] = [
    {id: 101, userName: "timdrake"},
    {id: 102, userName: "donnatroy"},
    {id: 103, userName: "peterparker"}
]

function FriendItem({ userName }: { userName: string }) {
  return <li className="friends">{userName}</li>;
}

function FriendsList () {
    return (
        <>
            <DisplayFriendsList friendsList={testFriends} />
        </>
    )
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
