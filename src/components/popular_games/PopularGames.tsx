import "./PopularGames.css"
export function PopularGames() {
    return (
        <section className="popular-games">
            <h2 className="section-heading"> Featured Games</h2>
            <ul className="poster-list -150p -horizontal popular-list">
                <li className="posteritem">
                    <div className="placeholder-poster"><img src="src/assets/placeholders/placeholder1.jpg" width="150" height="225"/></div>
                </li>
                <li className="posteritem">
                    <div className="placeholder-poster"><img src="src/assets/placeholders/placeholder2.jpg" width="150" height="225"/></div>
                </li>
                <li className="posteritem">
                    <div className="placeholder-poster"><img src="src/assets/placeholders/placeholder3.jpg" width="150" height="225"/></div>
                </li>
                <li className="posteritem">
                    <div className="placeholder-poster"><img src="src/assets/placeholders/placeholder4.jpg" width="150" height="225"/></div>
                </li>
                <li className="posteritem">
                    <div className="placeholder-poster"><img src="src/assets/placeholders/placeholder5.jpg" width="150" height="225"/></div>
                </li>
            </ul>
        </section>
    );
}