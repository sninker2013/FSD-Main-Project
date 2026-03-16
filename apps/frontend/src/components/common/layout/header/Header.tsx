import { Nav } from "../Nav/Nav";

// Keeping the old header code in case we need to go back.
export function Header() {
    return (
        <header>
        <div className="headerBar">
        <h1>GameStars</h1>
        </div>
        <Nav />
        </header>
    );
}