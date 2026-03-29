export type Friend = {
  userId: string;
  friendId: string;
  isFavourite: boolean;
  dateAdded: string;
  friend?: {
    id: string;
    userName: string;
  };
};