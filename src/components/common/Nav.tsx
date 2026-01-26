import { NavLink } from "react-router-dom"

export function Nav() {
    return (
        <nav>
            <div className="page-links">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/reviews">
                    Reviews                
                </NavLink>
            </div>
        </nav>
    )
}