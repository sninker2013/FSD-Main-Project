import FriendsList from "../../friends/friends_list/friends_list";
import { FriendSearchBar } from "../../friends/friend_search_bar";
import "./friends-page.css";

interface AllFriendsProps {
    currentUserName: string; // pass the logged-in user's username
}

function AllFriends({ currentUserName }: AllFriendsProps) {
    return (
        <main>
            <h2>My Friends</h2>
            <h3 className="friendDetails">Friend Details</h3>
            <p>Just a placeholder for the moment.</p>
            <FriendsList currentUserName={currentUserName} />
        </main>
    );
}

export default AllFriends;