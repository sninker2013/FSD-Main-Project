import { User } from "../../../generated/prisma/client";
import * as userService from "../services/userService";
import { Request, Response, NextFunction } from "express";
import { clerkClient, getAuth } from "@clerk/express";

export const findOrCreateUser = async(
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        // clerk getAuth method authenticates user against HTTP request Authorization heading
        const auth = getAuth(req);
        const userId = auth.userId;
        
        // store in simple userId table 
        if(userId) {
            let backendUser : User|null = await userService.getUserById(userId);
            const clerkUser = await clerkClient.users.getUser(userId)
            const userData = {
                id: userId,
                userName: clerkUser.username as string,
                profilePic: clerkUser.imageUrl
            }
            if(!backendUser) {
                backendUser= await userService.createUser(userData);
            } else { 
                await userService.updateUserPfp(userId, userData.profilePic)
            }
        }
        
        // If userId not found with auth, set userId to null 
        // Prevents userId from being included erroneously in the request body
        req.userId = userId;
        next();
    } catch(error) {
        next(error);
    }
}