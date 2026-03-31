import { NavLink } from "react-router-dom"
import "./Nav.css"

export function Nav() {
    return (
        <nav className="navbar">
            <div className="page-links">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/reviews">
                    Reviews
                </NavLink>
                <NavLink to="/profile">
                    Profile
                </NavLink>
                <NavLink to="/friends">
                    Friends
                </NavLink>
            </div>
        </nav>
    )
}
