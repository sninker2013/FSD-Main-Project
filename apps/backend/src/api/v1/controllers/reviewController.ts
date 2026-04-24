import { Request, Response, NextFunction } from 'express';
import type { Review } from "../../../generated/prisma/client"
import * as reviewService from '../services/reviewService';
import { successResponse } from '../models/responseModel';

/**
 * Gets all the reviews and sends 200 if it succeeds
 */
export async function getAllReviews(_req: Request, res: Response, next: NextFunction) {
    try {
        const reviews: Review[] = await reviewService.fetchAllReviews();
        res.status(200).json(successResponse(reviews, "Reviews retrieved successfully"));
    } catch (error) {
        next(error);
    }
};
/**
 * Creates a review and sends 201 if successful
 */
export async function createReview(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        if (!userId) {
            return res.status(401).json({ error: "User not authenticated" })
        }

        const reviewData = req.body;
        const newReview: Review = await reviewService.createReview({
            ...reviewData,
            userId
        });
        res.status(201).json(successResponse(newReview, "Review created successfully"));
    } catch (error) {
        next(error);
    }
};

export async function getReviewsByUserId(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        if (!userId) {
            return res.status(401).json({ error: "User not authenticated"});
        }

        const reviews: Review[] = await reviewService.getReviewsByUserId(userId)
        res.status(200).json(successResponse(reviews, "reviews retrieved successfully"))
    } catch (error){
        next(error)
    }
}