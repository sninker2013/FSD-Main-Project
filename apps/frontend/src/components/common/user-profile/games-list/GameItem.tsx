import type { Game } from "../profileData";

export function GameItem({
    game,
    onRemove
}: {
    game: Game;
    onRemove: (id: number) => void;
}) {
    return (
        <li className="game-item">
            <span className="game-title">{game.title}</span>
            <button
                onClick={() => onRemove(game.id)}
                className="remove-btn"
                aria-label={`Remove ${game.title}`}
            >
                ✕
            </button>
        </li>
    );
}
