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
        const term: Friend | null = 
            await friendService.getFriendByUserName(req.params.userName);
        if(term) {
            res.json(successResponse(friend, "Friend retrieved succesfully"));
        } else{
            throw new Error("Friend not found");
        }
    } catch(error) {
        next(error);
    }
}

/**
 * Manages requests, reponses, and validation to create a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const createFriend = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newFriend = await friendService.createFriend(req.body);
        res.status(201)
            .json(successResponse(newFriend, "Friend created succesfully"));
    } catch(error) {
        next(error);
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
        const updatedFriend = await friendService.updateFriend(
            req.params.id,
            req.body
        );
        res.status(200)
            .json(successResponse(updatedFriend, "Friend updated succesfully"));
    } catch(error) {
        next(error);
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
        await friendService.deleteFriend(req.params.id);
        res.status(200)
            .json(successResponse(null, "Friend deleted succesfully"));
    } catch(error) {
        next(error);
    }
};