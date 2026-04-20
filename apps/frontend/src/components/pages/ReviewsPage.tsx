import { ReviewForm } from "../reviews/review-form/ReviewForm";
import Reviews from "../reviews/reviews-list/Reviews";
import { useReviews } from "../../hooks/useReviews";

export function ReviewsPage () {
    const { reviews, createReview } = useReviews()
    
    return (
        <>
        <ReviewForm onSubmit={createReview}/>
        <Reviews reviews={reviews}/>
        </>
    )
}