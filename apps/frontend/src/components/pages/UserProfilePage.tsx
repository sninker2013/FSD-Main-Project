import type React from "react";
import "./UserProfilePage.css";
import { ProfileForm } from "../common/user-profile/profile-form/ProfileForm";
import { GamesList } from "../common/user-profile/games-list/GamesList";
import type { UserProfileType, Game } from "../common/user-profile/profileData";

export function UserProfilePage({
    profile,
    setProfile,
    games,
    updateGames,
    newGameTitle,
    setNewGameTitle
}: {
    profile: UserProfileType;
    setProfile: React.Dispatch<React.SetStateAction<UserProfileType>>;
    games: Game[];
    updateGames: React.Dispatch<React.SetStateAction<Game[]>>;
    newGameTitle: string;
    setNewGameTitle: React.Dispatch<React.SetStateAction<string>>;
}) {
    const handleAddGame = (title: string) => {
        if (title.trim()) {
            updateGames((prevGames) => [
                ...prevGames,
                { id: Date.now(), title }
            ]);
            setNewGameTitle("");
        }
    };

    const handleRemoveGame = (id: number) => {
        updateGames((prevGames) => prevGames.filter((game) => game.id !== id));
    };

    return (
        <div className="user-profile-container">
            <section className="profile-section">
                <h1>User Profile</h1>
                <ProfileForm profile={profile} setProfile={setProfile} />
            </section>

            <section className="games-section">
                <h2>Favorite Games</h2>
                <GamesList
                    games={games}
                    onRemoveGame={handleRemoveGame}
                    newGameTitle={newGameTitle}
                    setNewGameTitle={setNewGameTitle}
                    onAddGame={() => handleAddGame(newGameTitle)}
                />
            </section>
        </div>
    );
}
