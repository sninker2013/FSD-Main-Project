export type Review = {
    id: string,
    gameId: string;
    userId: string;
    dateCreated: Date;
    dateEditted?: Date;
    stars: number;
    reviewContents: string;
    user: { id: string, userName: string, profilePic: string}
};