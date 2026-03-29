import { useState } from "react";
import useFriendsInput from "../../../hooks/useFriendsInput";
import "./friends-form.css";

//Used to submit a friend to the friends list

type FriendFormProps = {
    onSubmit: (
        userName: string
    ) => void;
};

export function FriendForm({ onSubmit }: FriendFormProps) { 
    const userName = useFriendsInput();
    const [success, setSuccess] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const userNameValid = userName.validate();

        if (!userNameValid) {
            setSuccess("");
            return;
        }

        onSubmit(userName.value);

        setSuccess("Form is valid!");
        userName.inputReset();

    };

    return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="userName" className="friendForm">User Name:
        <input
            type="text"
            name="userName"
            id="userName"
            value={userName.value}
            onChange={userName.valueChangeHandler}
        />
    </label>
    {userName.errors.map((err, i) => (
        <p key={i} style={{ color: "red"}}>{err}</p>
    ))}

    <input type="submit"/>
    </form>
    {success && <p style={{ color: "green" }}>{success}</p>}
    </>
    );
}