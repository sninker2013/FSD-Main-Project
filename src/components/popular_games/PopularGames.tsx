import "./PopularGames.css"

interface Game {
    id: string;
    imageSrc: string;
    title: string;
}

const games: Game[] = [
    { id: "1", imageSrc: "/images/placeholders/placeholder1.jpg", title: "Game 1" },
    { id: "2", imageSrc: "/images/placeholders/placeholder2.jpg", title: "Game 2" },
    { id: "3", imageSrc: "/images/placeholders/placeholder3.jpg", title: "Game 3" },
    { id: "4", imageSrc: "/images/placeholders/placeholder4.jpg", title: "Game 4" },
    { id: "5", imageSrc: "/images/placeholders/placeholder5.jpg", title: "Game 5" },
    { id: "6", imageSrc: "/images/placeholders/placeholder6.jpg", title: "Game 6" },
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