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
    const {
        userName,
        errors,
        success,
        valueChangeHandler,
        inputReset,
        validate,
    } = useCreateUserFormInput();
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const isValid = validate();

      if (!isValid) return;

      onSubmit(userName);
      inputReset();
    };

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName" className="loginForm">
          User Name:
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={(e) =>
                valueChangeHandler("userName", e.target.value)
              }
                />
        </label>

        <div className="form-feedback">
          {errors.map((err, i) => (
            <p key={i} style={{ color: "red" }}>
              {err}
            </p>
          ))}

          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    );
}