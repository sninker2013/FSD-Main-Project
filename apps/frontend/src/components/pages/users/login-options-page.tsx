import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./login-page";
import { Login } from "../../user/login";

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