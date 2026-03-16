import type { Review } from "../../types/reviews";
import { reviewData } from "./reviewData";

/**
 * This component acts as a repository where any access of the data goes through, this will be important when we are using external data.
 */

/**
 * Gets all of the reviews from the dataset.
 * @returns {Review[]} An array of all the reviews
 */
export function getAllReviews(): Review[] {
    return reviewData;
}

/**
 * Finds a review by it's ID.
 * @param reviewId - The ID of the review that is to be retrieved.
 * @errors - Throws an error if the review ID cannot be found.
 * @returns {Review} - The review that is found by the ID.
 */
export function getReviewById(reviewId: string): Review {
    const foundReview = reviewData.find(r => r.id === reviewId);

    if(!foundReview) {
        throw new Error(`Failed to fetch review with ID: ${reviewId}`);
    }

    return foundReview;
}

/**
 * Create a review from the star rating and review decription. The reviewer name and profile picture are placeholders because presumably this information would come from the user.
 * @param starRating - The rating as a number from 1-5.
 * @param reviewDesc - The description of the review.
 * @returns {Review} - The newly created review
 */
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

/**
 * Updates a review. This may be useful if we let users edit their reviews.
 * @param review - The review that is to be updated.
 * @errors - Throws an error if the review ID cannot be found.
 * @returns {Review} - The review that was changed.
 */
export async function updateReview(review: Review) {
    const foundReviewIndex = reviewData.findIndex(r => r.id === review.id);

    if(foundReviewIndex === -1) {
        throw new Error(`Failed to update terms with ID: ${review.id}`);
    }

    reviewData[foundReviewIndex] = review;
    return reviewData[foundReviewIndex];
}

/**
 * Deletes a review by it's ID
 * @param reviewId - The ID of the review that is to be deleted
 * @errors - Throws an error if the review ID cannot be found.
 */
export async function deleteReview(reviewId: string) {
    const foundReview = reviewData.find(r => r.id === reviewId)

    if(!foundReview) {
        throw new Error(`Failed to delete term with ID: ${reviewId}`)
    } else {
        reviewData.splice(reviewData.indexOf(foundReview), 1)
    }
}