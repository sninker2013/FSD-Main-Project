import { Request, Response, NextFunction } from "express";
import {User} from "@prisma/client";
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
        const users = await userService.fetchAllUsers();
        res.status(200).json(
            successResponse(users, "Users retrieved succesfully")
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Manages requests and reponses to retrieve one User
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getUserById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const user: User | null = 
            await userService.getUserById(req.params.id);
        if(user) {
            res.json(successResponse(user, "User retrieved succesfully"));
        } else{
            throw new Error("User not found");
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
        await userService.deleteUser(req.params.id);
        res.status(200)
            .json(successResponse(null, "User deleted succesfully"));
    } catch(error) {
        next(error);
    }
};