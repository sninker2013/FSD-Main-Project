import { Request, Response, NextFunction } from "express";
import * as friendService from "../services/friendsService";

/**
 * Manages requests and reponses to retrieve all Friends
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getAllFriends = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const friends = await friendService.getAllFriends();
        res.status(200).json({
            message: "Friends retrieved successfully",
            data: friends,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Manages requests and reponses to retrieve one Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getFriendByUserName = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userName, friendUserName } = req.query as { userName: string; friendUserName: string };
        
        if (!userName || !friendUserName) {
            res.status(400).json({ success: false, message: "userName and friendUserName are required" });
            return;
        }

        const friend = await friendService.getFriendByUserName(userName);

        if(friend) {
            res.status(200).json({
            message: "Friend retrieved successfully",
            data: friend,
        });
        } else{
            res.status(404).json({ success: false, message: "Friend not found" });
        }
    } catch(error: any) {
        next(error)
    }
}



export const getFriendsByUserName = async (
  req: Request<{ userName: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName } = req.params;

    if (!userName) {
      res.status(400).json({ success: false, message: "User name is required" });
      return;
    }

    const friends = await friendService.getFriendsByUserName(userName);

    res.status(200).json({
      success: true,
      message: friends.length
        ? "Friends retrieved successfully"
        : "No friends found",
      data: friends,
    });
  } catch(error: any) {
        next(error)
    }
};

/**
 * Manages requests, reponses, and validation to create a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const addFriendByUserName = async (
  req: Request<{}, {}, { userName: string; friendUserName: string; dateAdded?: string; isFavourite?: boolean; }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName, friendUserName, isFavourite, dateAdded } = req.body;

    if (!userName || !friendUserName) {
      res.status(400).json({ success: false, message: "User name and friend user name are required" });
      return;
    }

    const finalDateAdded = dateAdded ? new Date(dateAdded) : new Date();
    const finalIsFavourite = isFavourite ?? false;

    const newFriend = await friendService.addFriendByUserName(
      userName,
      friendUserName,
      finalDateAdded,
      finalIsFavourite
    );

    res.status(201).json({
                message: "Friend created successfully",
                data: newFriend,
            });
  } catch(error: any) {
        next(error)
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

/**
 * Manages requests and reponses to delete a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const deleteFriend = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userId, friendId } = req.body;
        if (!userId || !friendId) {
            res.status(400).json({ success: false, message: "User Id and Friend Id are required" });
        }

        await friendService.deleteFriend(userId, friendId);
        res.status(200).json({
            message: "Friend deleted successfully",
        });
    } catch(error: any) {
        next(error)
    }
};