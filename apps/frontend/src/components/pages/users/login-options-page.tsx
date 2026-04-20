import { Link } from "react-router-dom";

export default function LoginOptions() {
  return (
    <main>
        <Link
            to="/login">
                Go to Login
        </Link>
        <Link
            to="/create-user">
                Go to Create
        </Link>
    </main>
  );
}