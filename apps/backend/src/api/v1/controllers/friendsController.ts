import { Request, Response, NextFunction } from "express";
import * as friendService from "../services/friendsService";

/**
 * Manages requests and reponses to retrieve all Friends
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getFriendsForUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.query.userId as string;
    if (!userId) {
      res.status(400).json({ message: "UserId is required" });
      return;
    }

    const friends = await friendService.getFriendsByUserId(userId);

    res.status(200).json({
      message: "Friends retrieved successfully",
      data: friends,
    });
  } catch (err) {
    next(err);
  }
};

export const addFriendByUserName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, friendUserName } = req.body;
    if (!userName || !friendUserName) {
      return res.status(400).json({ message: "Both userName and friendUserName are required" });
    }

    const newFriend = await friendService.addFriendByUserName(userName, friendUserName);

    res.status(201).json({ message: "Friend added successfully", data: newFriend });
  } catch (err) {
        next(err); // call next with error
    }
};

/**
 * Manages requests and reponses to update a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const updateFriendFavourite = async(
  req: Request<{ userId: string; friendId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extract IDs from params, not body
    const { userId, friendId } = req.params;
    const { isFavourite } = req.body;

    if (!userId || !friendId) {
      res.status(400).json({ success: false, message: "User Id and friend Id are required" });
      return;
    }

    const updatedFriend = await friendService.updateFriendFavourite(
      userId,
      friendId,
      { isFavourite } // Prisma expects object
    );

    res.status(200).json({
            message: "Friend updated successfully",
            data: updatedFriend,
        });
  } catch(error: any) {
        next(error)
    }
};