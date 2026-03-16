import { ReviewForm } from "../reviews/review-form/ReviewForm";
import Reviews from "../reviews/reviews-list/Reviews";
import type { Review } from "../../types/reviews";

export function ReviewsPage ({reviews, createReview}: {reviews: Review[], createReview: any}) {

    
    return (
        <>
        <ReviewForm onSubmit={createReview}/>
        <Reviews reviews={reviews}/>
        </>
    )
}