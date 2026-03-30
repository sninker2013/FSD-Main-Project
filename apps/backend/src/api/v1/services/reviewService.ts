import type { Review } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

/**
 * Gets all the reviews from Prisma.
 * @returns {Review[]} - an array of all of the reviews
 */
export async function fetchAllReviews() {
  return await prisma.review.findMany();
}

/**
 * Creates a review using data supplied from a from and the user data.
 * @param reviewData - gameID - The id of the game that being reviewed
 *                   - userID - The id of the user writing the review
 *                   - stars - The number of stars from 1-5
 *                   - reviewContents - The description fo the review
 * @returns {Review} - The newly created review
 */
export async function createReview(reviewData: {
    gameId: string;
    userId: string;
    stars: number;
    reviewContents: string;
}): Promise<Review> {
    const newReview: Review = await prisma.review.create({
        data: {...reviewData}
    });
    return newReview;
};