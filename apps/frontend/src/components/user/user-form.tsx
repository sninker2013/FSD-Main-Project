import { useState } from "react";
import useFriendsInput from "../../hooks/useFriendsInput";
//import "./friends-form.css";

//Used to create an account

type UserFormProps = {
    onSubmit: (
        userName: string
    ) => void;
};

export function UserForm({ onSubmit }: UserFormProps) { 
  const userName = useFriendsInput();
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = userName.validate();

    if (!isValid) {
      setSuccess("");
      return;
    }

    onSubmit(userName.value);
    setSuccess("Form is valid!");
    userName.inputReset();

    // Optional: auto-hide success message
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName" className="loginForm">
        User Name:
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName.value}
          onChange={userName.valueChangeHandler}
        />
      </label>

      <div className="form-feedback">
        {userName.errors.map((err, i) => (
          <p key={i} style={{ color: "red" }}>{err}</p>
        ))}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}