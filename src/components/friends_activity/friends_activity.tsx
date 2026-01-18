import "./friends_acitivity.css"

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

function FriendsActivity () {
    return (
        <>
        <DisplayFriendsActivity friendsActivities={testFriends} />
        </>
    )
}

function DisplayFriendsActivity({
    friendsActivities
}: {
    friendsActivities: Friends[];
}) {
    return (
        <section className="friendsActivities">
        <h2 id="friendsListTitle">Friends Activity</h2>
        <ul className="friend__list">
        {friendsActivities.map(friend => (
            <FriendItem
            key={friend.id}
            userName={friend.userName}
            />
        ))}
        </ul>
        </section>
    )
}

export default FriendsActivity
