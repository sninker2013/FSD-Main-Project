import "./Reviews.css";
import Stars from "../../common/stars/Stars";
import type { Review } from "@shared/types/reviews";

function Reviews ({ reviews }: { reviews: Review[] }) {
    return (
        <>
            <ReviewsDisplay reviews={reviews}/>
        </>
    )
}

function ReviewsDisplay({ reviews }: { reviews: Review[] }) {
    const reviewItems: React.JSX.Element[] = [];

    reviews.forEach((review: Review) => {
        reviewItems.push(<ReviewItem
            review={review}
            key={`${review.id}`}
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

function ReviewItem({review}: {review: Review}) {
    const formattedDate = new Date(review.dateCreated).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

    return(
        <section className="review">
                <section className="profile">
                    <img src={review.user.profilePic} alt="reviewer profile picture" style={{width: "56px", height: "56px"}}/>
                    <p>{review.user.userName}</p>
                </section>
                <section className="review__row">
                <Stars {...review}/>
                </section>
                <p className="date">{formattedDate}</p>
                <section className="review__desc">
                    <p>{review.reviewContents}</p>
                </section>
        </section>
    )
}

export default Reviews