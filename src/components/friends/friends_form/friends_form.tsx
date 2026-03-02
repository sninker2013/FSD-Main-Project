import { useState } from "react";

import useFriendsInput from "../../../hooks/useFriendsInput";

import "./friends-form.css";

type FriendFormProps = {
    onSubmit: (
        userName: string
    ) => void;
};

export function FriendForm({ onSubmit }: FriendFormProps) {
    const userName = useFriendsInput(validateFirstName);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if ( !userName ) {
            setError("Field cannot be empty");
            setSuccess("")
            return;
        } else if (userName.trim().length < 3 || userName.trim().length < 3) {
            setError("User name must be at least 3 characters");
            setSuccess("")
            return;
        } else {
            onSubmit(userName);
            setError("");
            setSuccess("Form is valid!");
            setUserName("");
        }
    
    };

    return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="userName" className="friendForm">User Name:
        <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
    </label>
    <input type="submit"/>
    </form>
    {error && <p style={{ color: "red"}}>{error}</p>}
    {success && <p style={{ color: "green" }}>{success}</p>}
    </>
    );
}