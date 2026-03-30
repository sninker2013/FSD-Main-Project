import { useState } from "react";
import type { User } from "../../../../../shared/types/user";

const users: User[] = [
  { userId: "239", userName: "Shellg", dateCreated: new Date("2026-03-29T12:00:00Z") },
  { userId: "240", userName: "Alice", dateCreated: new Date() },
];

type LoginItemProps = {
  onLogin: (user: User) => void; // required callback
};

export function LoginItem({ onLogin }: LoginItemProps) {
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!userName.trim()) {
      setError("Please enter a username");
      return;
    }

    const foundUser = users.find(
      (u) => u.userName.toLowerCase() === userName.trim().toLowerCase()
    );

    if (foundUser) {
      onLogin(foundUser); // ✅ callback works
      setError("");
      setUserName(""); // optional: clear input
    } else {
      setError("User not found");
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "300px", margin: "0 auto" }}>
      <h3>Login</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}