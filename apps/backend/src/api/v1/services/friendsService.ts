// services/friendsService.ts
import { PrismaClient } from "../../../generated/prisma/client";

const prisma = new PrismaClient();

export const getFriendsByUserId = async (userId: string) => {
  try {
    return await prisma.friend.findMany({
        where: { userId },
        include: { friend: true }, // Include friend user details
    });
  } catch (err) {
    console.error("Error fetching friends:", err);
    throw new Error("Failed to fetch friends");
  }
};

export const addFriendByUserName = async (userName: string, friendUserName: string) => {
  const user = await prisma.user.findUnique({ where: { userName } });
  const friendUser = await prisma.user.findUnique({ where: { userName: friendUserName } });

  if (!user) throw new Error(`User '${userName}' not found`);
  if (!friendUser) throw new Error(`Friend '${friendUserName}' not found`);

  // Prevent adding yourself
  if (user.id === friendUser.id) throw new Error("You cannot add yourself as a friend");

  // Check for duplicates
  const existingFriend = await prisma.friend.findUnique({
    where: { userId_friendId: { userId: user.id, friendId: friendUser.id } },
  });

  if (existingFriend) return existingFriend; // already friends

  return await prisma.friend.create({
    data: {
      userId: user.id,
      friendId: friendUser.id,
      dateAdded: new Date(),
      isFavourite: false,
    },
  });
};

export const updateFriendFavourite = async (
  userId: string,
  friendId: string,
  data: { isFavourite: boolean }
) => {
  try {
    return await prisma.friend.update({
      where: {
        userId_friendId: { userId, friendId }, // composite key
      },
      data,
    });
  } catch (err: any) {
    console.error("Error updating friend:", err);
    if (err.code === "P2025") {
      // Prisma record not found
      throw new Error("Friend relationship not found");
    }
    throw new Error("Failed to update friend");
  }
};
