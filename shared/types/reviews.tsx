export type Review = {
    id: string,
    game: {id: string, gameName: string}
    userId: string;
    dateCreated: Date;
    dateEditted?: Date;
    stars: number;
    reviewContents: string;
    user: { id: string, userName: string, profilePic: string}
};