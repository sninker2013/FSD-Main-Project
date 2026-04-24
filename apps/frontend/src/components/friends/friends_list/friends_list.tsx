// friends_list.tsx
import type { Friend } from "@shared/types/friends";
import { FriendForm } from "../friends_form/friends_form";
import starIcon from "./assets/star-transparent.png";
import useFriendsInput from "../../../hooks/useFriendsInput";
import { FriendSearchBar } from "../../friends/friend_search_bar";
import { useState, useMemo } from "react";
import { useUser } from "@clerk/clerk-react";
import "./friends_list.css";

interface FriendsListProps {
    currentUserName: string;
}

// Single friend item component
function FriendItem({ 
    friend,
    onToggleFavourite,
    onDelete
}: { 
    friend: Friend;
    onToggleFavourite: () => void;
    onDelete: () => void;
}) {
    const userName = friend.friend?.userName ?? "";

    return (
        <li className={`friends ${friend.isFavourite ? "favourite" : ""}`}>
            {friend.isFavourite && (
                <img src={starIcon} alt="star" style={{ width: "16px", marginLeft: "5px" }} />
            )}
            {userName}
            <button onClick={onToggleFavourite} style={{ marginLeft: "10px" }}>
                {friend.isFavourite ? "Remove" : "Favourite"}
            </button>
            <button onClick={onDelete} style={{ marginLeft: "5px" }}>Delete</button>
        </li>
    );
}

// ----- Main FriendsList Component -----
export default function FriendsList() {
  const { user } = useUser();
  if (!user) return <p>Please log in to see your friends.</p>;

  const currentUserName = user.username;
  const friendInput = useFriendsInput(currentUserName);
  const [searchValue, setSearchValue] = useState("");

  const normalizedSearch = searchValue.toLowerCase().trim();

    const matchedFriend = friendInput.friends.find(friend => {
        const name = friend.friend?.userName ?? "";
        return name.toLowerCase() === normalizedSearch;
    });

    const handleToggleFavourite = async (friend: Friend) => {
        await friendInput.updateFriendFavourite(
            friend.userId,
            friend.friendId,
            !friend.isFavourite
        );
    };

    const handleDelete = async (friend: Friend) => {
        await friendInput.deleteFriend(friend.userId, friend.friendId);
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
                {!searchValue.trim() ? (
                    friendInput.friends.map(friend => (
                        <FriendItem
                        key={friend.friendId}
                        friend={friend}
                        onToggleFavourite={() => handleToggleFavourite(friend)}
                        onDelete={() => handleDelete(friend)}
                        />
                    ))
                ) : matchedFriend ? (
                    <FriendItem
                    key={matchedFriend.friendId}
                    friend={matchedFriend}
                    onToggleFavourite={() => handleToggleFavourite(matchedFriend)}
                    onDelete={() => handleDelete(matchedFriend)}
                    />
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