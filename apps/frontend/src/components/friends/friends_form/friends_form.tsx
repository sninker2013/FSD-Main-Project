import { useState } from "react";
import useFriendsInput from "../../../hooks/useFriendsInput";
import "./friends-form.css";

type FriendFormProps = {
  currentUserName: string;
  checkUserExists: (userName: string) => Promise<boolean>; 
};

export function FriendForm({ currentUserName, checkUserExists }: FriendFormProps) {
    const friendInput = useFriendsInput();
    const [friendNotFound, setFriendNotFound] = useState(false);
    const [formSuccess, setFormSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setFormSuccess("");
        setFriendNotFound(false);

        const isValid = friendInput.validate();
        if (!isValid) return;

        const friendName = friendInput.value.trim();

        try {
            const exists = await checkUserExists(friendName);

            if (!exists) {
                setFriendNotFound(true);
                return;
            }

            const newFriend = await friendInput.addFriendByUserName(currentUserName);

            if (!newFriend) return;

            setFormSuccess("Friend added successfully!");
            friendInput.inputReset();

        } catch {
            setFriendNotFound(true);
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

                <input type="submit" value="Add Friend" />
            </form>

            {friendInput.errors.map((err, i) => (
                <p key={i} style={{ color: "red" }}>{err}</p>
            ))}

            {friendNotFound && (
                <p style={{ color: "red" }}>
                    Friend username does not exist!
                </p>
            )}

            {formSuccess && (
                <p style={{ color: "green" }}>{formSuccess}</p>
            )}
        </>
    );
}