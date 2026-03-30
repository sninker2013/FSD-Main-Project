import type { Review } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";

export async function fetchAllReviews() {
  return await prisma.review.findMany({
    include: {
        user: {
            select: {
                id: true,
                userName: true,
                profilePic: true
            }
        },
        game: {
            select: {
                gameName: true
            }
        }
    }
  });
}

export async function createReview(reviewData: {
    gameId: string;
    userId: string;
    stars: number;
    reviewContents: string;
}): Promise<Review> {
    const newReview: Review = await prisma.review.create({
        data: {...reviewData},
        include: {
            user: {
                select: {
                    id: true,
                    userName: true,
                    profilePic:true
                }
            }
        }
    });
    return newReview;
};