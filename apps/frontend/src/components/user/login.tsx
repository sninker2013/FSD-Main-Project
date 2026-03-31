import { LoginItem } from "../user/user-login";
import type { User } from "../../../../../shared/types/user";

export function Login() {
  const handleLogin = (user: User) => {
    console.log("Logged in user:", user);
    // Optional: redirect or update state
  };

  return <LoginItem onLogin={handleLogin} />; // only render the item
}