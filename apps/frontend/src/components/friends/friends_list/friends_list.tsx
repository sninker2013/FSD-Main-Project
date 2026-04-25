import type { Friend } from "@shared/types/friends";
import { FriendForm } from "../friends_form/friends_form";
import starIcon from "./assets/star-transparent.png";
import useFriendsInput from "../../../hooks/useFriendsInput";
import { FriendSearchBar } from "../../friends/friend_search_bar";
import { useState, useMemo } from "react";
import { useUser } from "@clerk/clerk-react";
import "./friends_list.css";

// ----- FriendItem Component -----
function FriendItem({
  friend,
  onToggleFavourite,
}: {
  friend: Friend;
  onToggleFavourite: () => void;
}) {
  return (
    <li className={`friends ${friend.isFavourite ? "favourite" : ""}`}>
      {friend.isFavourite && (
        <img src={starIcon} alt="star" style={{ width: 16, marginLeft: 5 }} />
      )}
      {friend.friend?.userName ?? ""}
      <button onClick={onToggleFavourite} style={{ marginLeft: 10 }}>
        {friend.isFavourite ? "Remove" : "Favourite"}
      </button>
    </li>
  );
}

// ----- Main FriendsList Component -----
export default function FriendsList() {
  const { user } = useUser();

  // Ensure username exists
  if (!user || !user.username) return <p>Please log in to see your friends.</p>;

  const currentUserName = user.username;
  const friendInput = useFriendsInput(currentUserName);
  const [searchValue, setSearchValue] = useState("");

  const normalizedSearch = searchValue.toLowerCase().trim();

  // Deduplicate friends
  const uniqueFriends = useMemo(() => {
    const seen = new Set<string>();
    return friendInput.friends.filter((friend) => {
      const id = `${friend.userId}-${friend.friendId}`;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }, [friendInput.friends]);

  // Search filtering
  const filteredFriends = useMemo(() => {
    if (!normalizedSearch) return uniqueFriends;
    return uniqueFriends.filter((friend) =>
      (friend.friend?.userName ?? "").toLowerCase().includes(normalizedSearch)
    );
  }, [normalizedSearch, uniqueFriends]);

  // Toggle favourite
  const handleToggleFavourite = async (friend: Friend) => {
    try {
      await friendInput.updateFriendFavourite(
        friend.userId,
        friend.friendId,
        !friend.isFavourite
      );
    } catch {
      friendInput.setErrors(["Failed to update favourite"]);
    }
  };

  return (
    <>
      <section className="friendsList">
        <h2>Friends</h2>

        <FriendSearchBar
          searchValue={searchValue}
          messages={[]}
          handleSearchChange={setSearchValue}
        />

        <ul className="friend__list">
          {filteredFriends.length > 0 ? (
            filteredFriends.map((friend) => (
              <FriendItem
                key={`${friend.userId}-${friend.friendId}`}
                friend={friend}
                onToggleFavourite={() => handleToggleFavourite(friend)}
              />
            ))
          ) : (
            <li>No matching friend found</li>
          )}
        </ul>
      </section>

      <FriendForm
        currentUserName={currentUserName}
        checkUserExists={async (userName) => {
          try {
            const res = await fetch(
              `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/${userName}`
            );
            return res.ok;
          } catch {
            return false;
          }
        }}
      />
    </>
  );
}