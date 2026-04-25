import { ReviewForm } from "../reviews/review-form/ReviewForm";
import Reviews from "../reviews/reviews-list/Reviews";
import { useReviews } from "../../hooks/useReviews";
import { SignedIn } from "@clerk/clerk-react";

export function ReviewsPage () {
    const { reviews, createReview } = useReviews()
    
    return (
        <>
        <SignedIn>
        <ReviewForm onSubmit={createReview}/>
        </SignedIn>
        <Reviews reviews={reviews}/>
        </>
    )
}