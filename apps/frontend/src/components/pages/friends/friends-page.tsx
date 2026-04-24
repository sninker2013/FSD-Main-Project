import FriendsList from "../../friends/friends_list/friends_list";
import "./friends-page.css";

export default function AllFriends() {
  return (
    <main>
      <h2>My Friends</h2>
      <h3 className="friendDetails">Friend Details</h3>
      <FriendsList />
    </main>
  );
}