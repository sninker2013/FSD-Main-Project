import { Request, Response, NextFunction } from "express";
import {Friend} from "@prisma/client";
import * as friendService from "../services/friendsService";
//import { successResponse } from "../models/responseModel";


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
        res.status(200).json(
            successResponse(friends, "Friends retrieved succesfully")
        );
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

        const friend = await friendService.getFriendByUserName(userName, friendUserName);

        if(friend) {
            res.json(successResponse(friend, "Friend retrieved succesfully"));
        } else{
            res.status(404).json({ success: false, message: "Friend not found" });
        }
    } catch(error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const getFriendsByUserName = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userName } = req.params;

        if (!userName) {
            res.status(400).json({ success: false, message: "User name is required" });
            return;
        }

        const friends = await friendService.getFriendsByUserName(userName);

        res.status(200).json(
            successResponse(friends, "Friends retrieved successfully")
        );
    } catch (error: any) {
        next(error);
    }
};

/**
 * Manages requests, reponses, and validation to create a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const addFriendByUserName = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userName, friendUserName, isFavourite } = req.body;

        if (!userName || !friendUserName) {
            res.status(400).json({ success: false, message: "User name and friend user name are required" });
            return;
        }

        const newFriend = await friendService.addFriendByUserName(req.body);
        res.status(201)
            .json(successResponse(newFriend, "Friend created succesfully"));
    } catch(error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**
 * Manages requests and reponses to update a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const updateFriend = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userId, friendId, isFavourite } = req.body;
        if (!userId || !friendId) {
            res.status(400).json({ success: false, message: "User Id and friend Id are required" });
            return;
        };

        const updatedFriend = await friendService.updateFriend(userId, friendId, { isFavourite });
        res.status(200)
            .json(successResponse(updatedFriend, "Friend updated succesfully"));
    } catch(error: any) {
        res.status(400).json({ success: false, message: error.message });
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
        res.status(200)
            .json(successResponse(null, "Friend deleted succesfully"));
    } catch(error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};