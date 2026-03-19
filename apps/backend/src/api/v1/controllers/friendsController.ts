import { Request, Response, NextFunction } from "express";

/**
 * Manages requests and reponses to retrieve all Friends
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getAllFriends = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const friends: Friend[] = await friendService.getAllFriends();
        res.status(HTTP_STATUS.OK).json(
            successResponse(friends, "Friends retrieved successfully")
        );
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Manages requests and reponses to retrieve one Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getOneFriend = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id: string = req.params.id;
        
        if (!id || id.trim() === "") {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorResponse("Friend ID is required")
            );
            return;
        }
        
        const friend: Friend = await friendService.getOneFriend(id);
        
        if (!friend) {
            res.status(HTTP_STATUS.NOT_FOUND).json(
                errorResponse("Friend not found.")
            );
            return;
        }
        
        res.status(HTTP_STATUS.OK).json(
            successResponse(friend, "Friend retrieved successfully")
        );
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Manages requests and reponses to update a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const updateFriend = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id: string = req.params.id;
        
        const { userName, dateFriended, isFavourite } = req.body;
        
        if (!id || id.trim() === "") {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorResponse("Friend ID is required.")
            );
            return;
        }
        
        const updatedFriend: Friend = await friendService.updateFriend(id, { userName, dateFriended, isFavourite });

        res.status(HTTP_STATUS.OK).json(
            successResponse(updatedFriend, "Friend updated successfully")
        );
    
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Manages requests and reponses to delete a Friend
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const deleteFriend = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id: string = req.params.id;
        
        if (!id || id.trim() === "") {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorResponse("Friend ID is required.")
            );
            return;
        }
        
        const friend: Friend = await friendService.getOneFriend(id);
        
        if (!friend) {
            res.status(HTTP_STATUS.NOT_FOUND).json(
                errorResponse("Friend not found.")
            );
            return;
        }

        await friendService.deleteFriend(id);

        res.status(HTTP_STATUS.OK).json(
            successResponse(null, "Friend successfully deleted")
        );
        
    } catch (error: unknown) {
        next(error);
    }
};