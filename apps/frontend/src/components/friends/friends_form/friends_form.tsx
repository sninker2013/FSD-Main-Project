import { useState } from "react";
import useFriendsInput from "../../../hooks/useFriendsInput";
import "./friends-form.css";

type FriendFormProps = {
  currentUserName: string; // pass the logged-in user's username
  checkUserExists: (userName: string) => Promise<boolean>; // function to check DB
};

export function FriendForm({ currentUserName, checkUserExists }: FriendFormProps) { 
    const friendInput = useFriendsInput(); // friend username input
    const [formSuccess, setFormSuccess] = useState("");
    const [friendNotFound, setFriendNotFound] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate input
        const isValid = friendInput.validate();
        if (!isValid) {
            setFormSuccess("");
            setFriendNotFound(false);
            return;
        }

        // Check if friend exists
        const exists = await checkUserExists(friendInput.value);
        if (!exists) {
            setFriendNotFound(true);
            setFormSuccess("");
            return;
        }

        setFriendNotFound(false);

        // Add friend via hook
        const newFriend = await friendInput.addFriendByUserName(currentUserName);
        if (newFriend) {
            const newFriend = await friendInput.addFriendByUserName();

            if (!newFriend) return;

            setFormSuccess("Friend added successfully!");
        } else {
            setFormSuccess("");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="friendUserName" className="friendForm">
                    Friend Username:
                    <input
                        type="text"
                        name="friendUserName"
                        id="friendUserName"
                        value={friendInput.value}
                        onChange={friendInput.valueChangeHandler}
                    />
                </label>

                {friendInput.errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))}

                {friendNotFound && (
                    <p style={{ color: "red" }}>Friend username does not exist!</p>
                )}

                <input type="submit" value="Add Friend" />
            </form>

            {friendInput.success && <p style={{ color: "green" }}>{friendInput.success}</p>}
            {formSuccess && <p style={{ color: "green" }}>{formSuccess}</p>}
        </>
    );
}