import type { Friends } from "../../../types/friends";
import FriendsList from "../../friends/friends_list/friends_list";

function AllFriends(
    {
        friends
    }:
    {
        friends: Friends[]
    }
) {
    return(
        <>
        <main>
        <h2>All Friends</h2>
        <FriendsList />
        </main>
        </>
    )
}

export default AllFriends