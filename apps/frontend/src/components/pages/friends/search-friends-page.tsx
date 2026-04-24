import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";
import type { Friend } from "../../../../../../shared/types/friends";
import AllFriends from "./friends-page";

export function SearchFriendsResult() {
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("value")?.trim().toLowerCase();

    const searchFilter = useCallback((friend: Friend) => {
        const name = friend.friend?.userName ?? "";
        return name.toLowerCase().includes(searchValue ?? "");
    }, [searchValue]);

    return (
        <main>
            {!searchValue ? (
                <h2>Start typing to search for friends</h2>
            ) : (
                <AllFriends filterFn={searchFilter} />
            )}
        </main>
    );
}