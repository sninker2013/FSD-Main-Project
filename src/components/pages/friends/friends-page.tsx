import FriendsList from "../../friends/friends_list/friends_list";
import "./friends-page.css";

function AllFriends()
{
    return (
        <>
        <main>
        <h2>My Friends</h2>
        <h3 className="friendDetails">Friend Details</h3>
        <p>Just a placeholder for the moment.</p>
        <FriendsList />
        </main>
        </>
    )
}

export default AllFriends