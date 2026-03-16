import "./PopularGames.css"
import { useGames } from "../../hooks/useGames";

/**
 * PopularGames Component
 * 
 * Displays a horizontally scrollable list of featured games as poster images.
 * Fetches games from the GameService and filters to show only games marked as featured.
 * 
 * @component
 * @returns {React.ReactNode} A section containing a grid of featured game posters,
 *                            or an error message if game fetching fails.
 */
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