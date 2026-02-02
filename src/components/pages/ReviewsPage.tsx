import { ReviewForm } from "../common/reviews/review-form/ReviewForm";
import Reviews from "../common/reviews/reviews-list/Reviews";
import type { Review } from "../../types/reviews";

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
        const newReview: Review = {
            id: crypto.randomUUID(),
            value: {
                starRating: starRating,
                reviewerName: "D Synkiw",
                reviewerPfp: "/images/profilePics/silksong.png",
                reviewDesc: reviewDesc,
                reviewDate: new Date(Date.now())
            }
        };
        updateReviews(oldState => [newReview, ...oldState]);
    }

    return (
        <>
        <ReviewForm onSubmit={handleNewReview}/>
        <Reviews reviews={reviews}/>
        </>
    )
}