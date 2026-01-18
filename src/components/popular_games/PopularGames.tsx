import "./PopularGames.css"

interface Game {
    id: string;
    imageSrc: string;
    title: string;
}

const games: Game[] = [
    { id: "1", imageSrc: "/src/assets/placeholders/placeholder1.jpg", title: "Game 1" },
    { id: "2", imageSrc: "/src/assets/placeholders/placeholder2.jpg", title: "Game 2" },
    { id: "3", imageSrc: "/src/assets/placeholders/placeholder3.jpg", title: "Game 3" },
    { id: "4", imageSrc: "/src/assets/placeholders/placeholder4.jpg", title: "Game 4" },
    { id: "5", imageSrc: "/src/assets/placeholders/placeholder5.jpg", title: "Game 5" },
    { id: "6", imageSrc: "/src/assets/placeholders/placeholder6.jpg", title: "Game 6" },
];

export function PopularGames() {
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