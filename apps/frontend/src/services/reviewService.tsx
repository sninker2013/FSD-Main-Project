import * as ReviewRepo from "../apis/reviews/reviewRepo"
import type { Review } from "@shared/types/reviews";

/**
 * Any validation surrounding reviews happens here, this includes validation for when we are using external data, as well as validating user data from a form.
 */

export async function getReviewsByUserId(sessionToken: string): Promise<Review[]> {
    const reviews = await ReviewRepo.getReviewsByUserId(sessionToken);
    return reviews
}

/**
 * Gets all of the reviews from the repo. there is no need for any validation yet.
 * @returns {Review[]} An array of all the reviews.
 */
export async function getAllReviews(): Promise<Review[]> {
    const reviews = await ReviewRepo.getAllReviews();
    return reviews;
}
/**
 * Create a review. any validation occcurs at the form level so that a message can be displayed to the user.
 * @param starRating - The rating as a number from 1-5.
 * @param reviewDesc - The description of the review.
 * @returns {Review} - The newly created review
 */
export async function createReview(
    starRating: 1|2|3|4|5,
    reviewDesc: string,
    sessionToken: string): Promise<Review> {
    const review = await ReviewRepo.createReview(starRating, reviewDesc, sessionToken);
    return review;
}

/**
 * Validation that occurs before the form can be submitted.
 * @param starRating - The rating as a number from 1-5.
 * @param reviewDesc - The description of the review.
 * @returns valid - A boolean that is true if the validation passes.
 *          error - Any error that may occur in validation.
 */
export async function validateForm(starRating: 1|2|3|4|5| undefined, reviewDesc: string): Promise<{valid: boolean, error: string}
> {
    let error: string = "";
    let valid = false;
    if(!starRating) {
        error = "Please select a star rating";
    } else if (reviewDesc.trim().length === 0){
        error = "Please enter a review";
    } else {
        valid = true;
    }
    return{valid, error}
}