import { useGames } from "../../../hooks/useGames";
import type { Game } from "../../../types/game";

type GameListPageProps = {
    dependencies?: unknown[];
    filterFn?: ((game: Game) => boolean) | null;
};

/**
 * GameListPage component that fetches and displays a list of games.
 * 
 * @param dependencies - Array of dependencies that trigger a re-fetch when changed
 * @param filterFn - Optional filter function to filter games 
 */
export function GameListPage({ dependencies = [], filterFn = null }: GameListPageProps) {
    const { games, error } = useGames(dependencies, filterFn);

    if (error) {
        return <div className="error-message">Error loading games: {error}</div>;
    }

    return (
        <div className="game-list-page">
            <ul className="game-list">
                {games.map((game) => (
                    <li key={game.id} className="game-list-item">
                        <div className="game-card">
                            <img 
                                src={game.imageSrc} 
                                alt={game.title} 
                                className="game-image"
                            />
                            <h3>{game.title}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

