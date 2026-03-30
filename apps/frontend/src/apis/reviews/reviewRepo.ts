import type { Review } from "@shared/types/reviews";

type ReviewsResponseJSON = {message: string, data: Review[]}
type ReviewResponseJSON = {message: string, data: Review}

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1/reviews`;

/**
 * Gets all of the reviews from the dataset.
 * @returns {Review[]} An array of all the reviews
 */
export async function getAllReviews(): Promise<Review[]> {
    const response: Response = await fetch(BASE_URL)

    if (!response.ok) {
        throw new Error("failed to get all reviews")
    }

    const json: ReviewsResponseJSON = await response.json();
    return json.data
}

/**
 * Create a review from the star rating and review decription.
 * @param starRating - The rating as a number from 1-5.
 * @param reviewDesc - The description of the review.
 * @returns {Review} - The newly created review
 */
export async function createReview(starRating: 1|2|3|4|5, reviewDesc: string,): Promise<Review> {
        const createResponse: Response = await fetch(
        BASE_URL,
        {
            method: "POST",
            body: JSON.stringify({
                /* 
                These hardcoded game and user IDs are temporary, once the game backend is integrated I will edit the form so the user
                can select the game they write the review for.
                */
                gameId: "3ao8twl",
                userId: "l2r8rrf3",
                stars: starRating,
                reviewContents: reviewDesc,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    if (!createResponse.ok) {
        throw new Error("Could not create new review")
    }
    const json: ReviewResponseJSON = await createResponse.json()
    return json.data
}
