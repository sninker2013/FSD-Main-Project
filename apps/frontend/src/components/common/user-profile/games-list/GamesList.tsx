import type React from "react";
import type { Game } from "../profileData";
import { GameItem } from "./GameItem";

export function GamesList({
    games,
    onRemoveGame,
    newGameTitle,
    setNewGameTitle,
    onAddGame
}: {
    games: Game[];
    onRemoveGame: (id: number) => void;
    newGameTitle: string;
    setNewGameTitle: React.Dispatch<React.SetStateAction<string>>;
    onAddGame: () => void;
}) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewGameTitle(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onAddGame();
        }
    };

    const gameItems: React.JSX.Element[] = [];
    games.forEach((game) => {
        gameItems.push(
            <GameItem key={game.id} game={game} onRemove={onRemoveGame} />
        );
    });

    return (
        <section className="games-list-container">
            <div className="add-game-form">
                <input
                    type="text"
                    value={newGameTitle}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a game title"
                    className="game-input"
                />
                <button onClick={onAddGame} className="add-btn">
                    Add Game
                </button>
            </div>

            {games.length === 0 ? (
                <p className="no-games">No favorite games yet. Add one to get started!</p>
            ) : (
                <ul className="games-list">{gameItems}</ul>
            )}
        </section>
    );
}
