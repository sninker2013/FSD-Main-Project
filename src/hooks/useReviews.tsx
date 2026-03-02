import { useState, useEffect } from "react";
import * as reviewService from "../services/reviewService";
import type { Review } from "../types/reviews";

export function useReviews() {
    const [reviews, updateReviews] = useState<Review[]>([])
    const [error, setError] = useState<string | null>(null);

    
    const createReview = async(starRating: 1|2|3|4|5, reviewDesc: string) => {
        try {
            const newReview = await reviewService.createReview(starRating, reviewDesc);
            updateReviews(oldState => [newReview, ...oldState]);
        } catch (error) {
            setError(`${error}`)
        }
    }
    
    useEffect(() => {
        reviewService.getAllReviews()
            .then(data => updateReviews(data))
            .catch(err => setError(`${err}`));
    }, []);

    return {
        reviews,
        error,
        createReview
    }
}