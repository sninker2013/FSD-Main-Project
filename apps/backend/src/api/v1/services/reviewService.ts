import type { Review } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

export async function fetchAllReviews() {
  return await prisma.review.findMany();
}

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