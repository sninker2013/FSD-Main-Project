export type Friend = {
  userId: string;
  friendId: string;
  isFavourite: boolean;
  dateAdded: Date;
  friend?: {
    id: string;
    userName: string;
  };
};