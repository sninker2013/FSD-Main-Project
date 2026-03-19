import { Request, Response, NextFunction } from "express";

/**
 * Manages requests and reponses to retrieve all Users
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const users: User[] = await userService.getAllUsers();
        res.status(HTTP_STATUS.OK).json(
            successResponse(users, "Users retrieved successfully")
        );
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Manages requests and reponses to retrieve one User
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getOneUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id: string = req.params.id;
        
        if (!id || id.trim() === "") {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorResponse("User ID is required")
            );
            return;
        }
        
        const user: User = await userService.getOneUser(id);
        
        if (!user) {
            res.status(HTTP_STATUS.NOT_FOUND).json(
                errorResponse("User not found.")
            );
            return;
        }
        
        res.status(HTTP_STATUS.OK).json(
            successResponse(episode, "User retrieved successfully")
        );
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Manages requests, reponses, and validation to create a User
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const requiredFields: (keyof User)[] = [
            'id',
            'userName',
            'dateCreated'
        ];
        
        const missingFields = requiredFields.filter(field => !(field in req.body));
        
        if (missingFields.length > 0) {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorResponse("Missing required parameter")
            );
            return;
        }
        
        const { id, userName, dateCreated } = req.body;
        
        const newUser: User = await userService.createUser({
            id,
            userName,
            dateCreated
        });

        res.status(HTTP_STATUS.CREATED).json(
            successResponse(newUser, "User created successfully")
        );
    
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Manages requests and reponses to delete a User
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id: string = req.params.id;
        
        if (!id || id.trim() === "") {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorResponse("User ID is required.")
            );
            return;
        }
        
        const user: User = await userService.getOneUser(id);
        
        if (!user) {
            res.status(HTTP_STATUS.NOT_FOUND).json(
                errorResponse("User not found.")
            );
            return;
        }

        await userService.deleteUser(id);

        res.status(HTTP_STATUS.OK).json(
            successResponse(null, "User successfully deleted")
        );
        
    } catch (error: unknown) {
        next(error);
    }
};