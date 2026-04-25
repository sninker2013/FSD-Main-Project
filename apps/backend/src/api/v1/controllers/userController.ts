import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";
import { successResponse } from "../models/responseModel";

/**
 * Manages requests and reponses to retrieve all Users
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getAllUsers = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const users = await userService.getAllUsers();
        res.status(200).json(
            successResponse(users, "Users retrieved succesfully")
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Manages requests and reponses to retrieve a User
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getUserByUserName = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const user = await userService.getUserByUserName(req.params.userName as string);
        
        if (user) {
            res.status(200).json(successResponse(user, "User retrieved successfully" ));
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch(error) {
        next(error);
    }
}


/**
 * Manages requests, reponses, and validation to create a User
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const createUser = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { userName } = req.body;
        if (!userName) {
            res.status(400).json({ success: false, message: "User name is required"});
        }

        const newUser = await userService.createUser(req.body);
        res.status(201)
            .json(successResponse(newUser, "User created succesfully"));
    } catch(error) {
        next(error);
    }
};

/**
 * Manages requests and reponses to delete a User
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const deleteUser = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await userService.deleteUser(req.params.id as string);
        res.status(200)
            .json(successResponse(null, "User deleted succesfully"));
    } catch(error) {
        next(error);
    }
};

/**
 * Retrieves the current authenticated user
 * @param req - The express Request (must include userId from Clerk auth middleware)
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const getCurrentUser = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const userId = (req as any).userId;
        
        if (!userId) {
            res.status(401).json({ success: false, message: "User not authenticated" });
            return;
        }

        const user = await userService.getUserById(userId);
        
        if (user) {
            res.status(200).json(successResponse(user, "Current user retrieved successfully"));
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch(error) {
        next(error);
    }
};

/**
 * Updates the current authenticated user's status
 * @param req - The express Request (must include userId from Clerk auth middleware and status in body)
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const updateCurrentUserStatus = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const userId = (req as any).userId;
        const { status } = req.body;
        
        if (!userId) {
            res.status(401).json({ success: false, message: "User not authenticated" });
            return;
        }

        const updatedUser = await userService.updateUserStatus(userId, status);
        res.status(200).json(successResponse(updatedUser, "User status updated successfully"));
    } catch(error) {
        next(error);
    }
};