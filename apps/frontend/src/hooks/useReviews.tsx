import { useState, useEffect } from "react";
import * as reviewService from "../services/reviewService";
import type { Review } from "../../../../shared/types/reviews";
import { useAuth } from "@clerk/clerk-react";

/**
 * updates a list of reviews, this needs to be a custom hook because if we decide to make individual game pages, the reviews for said game will use this hook.
 * @returns reviews - the list of reviews.
 *          error - any error that may have occured, such as an empty description when writing a review.
 *          createReview - creates a review from a star rating and a description.
 */
export function useReviews() {
    const [reviews, updateReviews] = useState<Review[]>([])
    const [error, setError] = useState<string | null>(null);

    const {getToken, isSignedIn} = useAuth();

    const fetchReviews = async() => {
        try{
            let sessionToken = isSignedIn? await getToken(): null;
            if (sessionToken) {
            let result = await reviewService.getReviewsByUserId(sessionToken)
            updateReviews([...result])
        } else {
            const result = await reviewService.getAllReviews()
            updateReviews(result)
        }
        } catch (error) {
            setError(`${error}`)
        }
    }
    
    const createReview = async(starRating: 1|2|3|4|5, reviewDesc: string) => {
        try {
            let sessionToken = isSignedIn? await getToken(): null
            if (sessionToken) {
            const newReview = await reviewService.createReview(starRating, reviewDesc, sessionToken);
            updateReviews(oldState => [newReview, ...oldState]);
            }
        } catch (error) {
            setError(`${error}`)
        }
    }
    
    useEffect(() => {
        fetchReviews()
    }, [isSignedIn]);

    return {
        reviews,
        error,
        createReview
    }
}