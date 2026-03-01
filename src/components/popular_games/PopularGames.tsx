import "./PopularGames.css"
import { useGames } from "../../hooks/useGames";

export function PopularGames() {
    const { games, error } = useGames([], (game) => game.isFeatured === true);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <section className="popular-games">
            <h2 className="section-heading">Featured Games</h2>
            <ul className="poster-list -150p -horizontal popular-list">
                {games.map(game => (
                    <li key={game.id} className="posteritem">
                        <div className="placeholder-poster">
                            <img src={game.imageSrc} alt={game.title} width="150" height="225" />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}