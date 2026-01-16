import "./reviews.css"

//sample data
type Review = {
    id: number,
    value: ReviewElement
}

interface ReviewElement {
    starRating: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
    reviewerName: string,
    reviewerPfp: string,
    reviewDesc: string,
}

const testReviews: Review[] = [
    {
        id: 0,
        value: {
            starRating: 4.5,
            reviewerName: "D Synkiw",
            reviewerPfp: "src/assets/silksong.png",
            reviewDesc: "A riveting experience!!!"
        }
    },
    {
        id: 1,
        value: {
            starRating: 2,
            reviewerName: "Xavier",
            reviewerPfp: "src/assets/XavierPfp.png",
            reviewDesc: "it was ok..."
        }
    },
        {
        id: 1,
        value: {
            starRating: 1,
            reviewerName: "Xavier",
            reviewerPfp: "src/assets/CUBE.jpg",
            reviewDesc: "I hated it, it was sooooo bad"
        }
    },
]


function Reviews () {
    return (
        <>
            <ReviewsDisplay reviews={testReviews} />
        </>
    )
}

function ReviewsDisplay({reviews}: {reviews: Review[]}) {
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
            <ul className="reviews__list">
                {reviewItems}
            </ul>
        </section>
    )
}

function ReviewItem({review}: {review: ReviewElement}) {
    

    return(
        <li>
            <div>
                <img src={review.reviewerPfp} alt="reviewer profile picture" style={{width: "56px", height: "56px"}}/>
                {review.reviewerName}
            </div>
            {review.starRating}
            {review.reviewDesc}
        </li>
    )
}

export default Reviews