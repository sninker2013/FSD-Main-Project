export type UserProfileType = {
    name: string;
    email: string;
    bio: string;
};

export type Game = {
    id: number;
    title: string;
};

export const testProfile: UserProfileType = {
    name: "John Doe",
    email: "placeholder@email.com",
    bio: "Lorem ipsum, etc."
};

export const testGames: Game[] = [
    { id: 1, title: "The Legend of Zelda: Silksong" },
    { id: 2, title: "Elden Ring" },
    { id: 3, title: "Baldur's Gate 3" }
];
