import { useState } from "react";
import type { User } from "../../../../../shared/types/user";

const USERS: User[] = [
  { userId: "239", userName: "Shellg", dateCreated: new Date("2026-03-29T12:00:00Z") },
  { userId: "240", userName: "Alice", dateCreated: new Date() },
];

const normalize = (value: string) => value.trim().toLowerCase();

type LoginItemProps = {
  onLogin: (user: User) => void;
};

export function LoginItem({ onLogin }: LoginItemProps) {
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    const cleaned = normalize(userName);

    if (!cleaned) {
      setError("Please enter a username");
      return;
    }

    const foundUser = USERS.find(
      (u) => normalize(u.userName) === cleaned
    );

    if (!foundUser) {
      setError("User not found");
      return;
    }

    onLogin(foundUser);
    setError("");
    setUserName("");
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}