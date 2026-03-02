import { ReviewForm } from "../reviews/review-form/ReviewForm";
import Reviews from "../reviews/reviews-list/Reviews";
import type { Review } from "../../types/reviews";
import * as reviewRepo from "../../apis/reviews/reviewRepo"

export function ReviewsPage ({
    reviews,
    updateReviews
}:{
    reviews: Review[],
    updateReviews: React.Dispatch<React.SetStateAction<Review[]>>
}) {

    const handleNewReview = (
        starRating: 1|2|3|4|5,
        reviewDesc: string,
    ) => {
        updateReviews(oldState => [reviewRepo.createReview(starRating, reviewDesc), ...oldState]);
    }

    return (
        <>
        <ReviewForm onSubmit={handleNewReview}/>
        <Reviews reviews={reviews}/>
        </>
    )
}