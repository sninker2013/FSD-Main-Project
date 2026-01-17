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
  return <li>{userName}</li>;
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
        <h2>Friends Activity</h2>
        <ul className="friends_activity_list">
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
