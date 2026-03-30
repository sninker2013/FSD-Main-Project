import { Request, Response, NextFunction } from 'express';
import type { Review } from "../../../generated/prisma/client"
import * as reviewService from '../services/reviewService';
import { successResponse } from '../models/responseModel';

export async function getAllReviews(_req: Request, res: Response, next: NextFunction) {
    try {
        const reviews: Review[] = await reviewService.fetchAllReviews();
        res.status(200).json(successResponse(reviews, "Reviews retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export async function createReview(req: Request, res: Response, next: NextFunction) {
    try {
        const reviewData = req.body;
        const newReview: Review = await reviewService.createReview(reviewData);
        res.status(201).json(successResponse(newReview, "Review created successfully"));
    } catch (error) {
        next(error);
    }
};