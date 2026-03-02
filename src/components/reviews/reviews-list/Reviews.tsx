import "./Reviews.css";
import Stars from "../../common/stars/Stars";
import type { Review } from "../../../types/reviews";
import type { ReviewElement } from "../../../types/reviews";


function Reviews ({reviews}:{reviews: Review[],}) {
 
    return (
        <>
            <ReviewsDisplay reviews={reviews}/>
        </>
    )
}

function ReviewsDisplay({ reviews } : { reviews: Review[] }) {
    const reviewItems: React.JSX.Element[] = [];

    reviews.forEach((review) => {
        reviewItems.push(<ReviewItem
            review={review.value}
            key={review.id}
            />
        )
    })

    return(
        <section className="reviews">
            <h2>Reviews</h2>
            <div className="reviews__list">
                {reviewItems}
            </div>
        </section>
    )
}

function ReviewItem({review}: {review: ReviewElement}) {
    const formattedDate = review.reviewDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

    return(
        <section className="review">
                <section className="profile">
                    <img src={review.reviewerPfp} alt="reviewer profile picture" style={{width: "56px", height: "56px"}}/>
                    <p>{review.reviewerName}</p>
                </section>
                <section className="review__row">
                <Stars {...review}/>
                </section>
                <p className="date">{formattedDate}</p>
                <section className="review__desc">
                    <p>{review.reviewDesc}</p>
                </section>
        </section>
    )
}

export default Reviews