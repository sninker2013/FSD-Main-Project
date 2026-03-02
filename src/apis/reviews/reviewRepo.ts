import type { Review } from "../../types/reviews";
import { reviewData } from "./reviewData";

// Get all reviews from the data set
export function getAllReviews(): Review[] {
    return reviewData;
}

// Get a single review by it's ID
export function getReviewById(reviewId: string): Review {
    const foundReview = reviewData.find(r => r.id === reviewId);

    if(!foundReview) {
        throw new Error(`Failed to fetch review with ID: ${reviewId}`);
    }

    return foundReview;
}

// Create a new review and add it to the reviewData
export function createReview(starRating: 1|2|3|4|5, reviewDesc: string,): Review {
    const newReview: Review = {
        id: crypto.randomUUID(),
        value: {
            starRating: starRating,
            // using a temporary reviewer name and profile picture until we implement proper users
            reviewerName: "D Synkiw",
            reviewerPfp: "/images/profilePics/silksong.png",
            reviewDesc: reviewDesc,
            reviewDate: new Date(Date.now())
        }
    };
    return newReview;
}

// Update a single review by it's ID
export async function updateReview(review: Review) {
    const foundReviewIndex = reviewData.findIndex(r => r.id === review.id);

    if(foundReviewIndex === -1) {
        throw new Error(`Failed to update terms with ID: ${review.id}`);
    }

    reviewData[foundReviewIndex] = review;
    return reviewData[foundReviewIndex];
}

// Delete a review by it's ID
export async function deleteReview(reviewId: string) {
    const foundReview = reviewData.find(r => r.id === reviewId)

    if(!foundReview) {
        throw new Error(`Failed to delete term with ID: ${reviewId}`)
    } else {
        reviewData.splice(reviewData.indexOf(foundReview), 1)
    }
}