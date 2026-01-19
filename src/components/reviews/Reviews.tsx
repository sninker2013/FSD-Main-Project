import "./reviews.css"
import "../stars/Stars"
import Stars from "../stars/Stars"

//sample data
type Review = {
    id: number,
    value: ReviewElement
}

export interface ReviewElement {
    starRating: 1|2|3|4|5,
    reviewerName: string,
    reviewerPfp: string,
    reviewDesc: string,
    reviewDate: Date,
}


const testReviews: Review[] = [
    {
        id: 0,
        value: {
            starRating: 5,
            reviewerName: "D Synkiw",
            reviewerPfp: "src/assets/silksong.png",
            reviewDesc: "A riveting experience!!!",
            reviewDate: new Date("July 20, 25")
        }
    },
    {
        id: 1,
        value: {
            starRating: 2,
            reviewerName: "Xavier",
            reviewerPfp: "src/assets/XavierPfp.png",
            reviewDesc: "it was ok...",
            reviewDate: new Date("August 3, 25")
        }
    },
        {
        id: 1,
        value: {
            starRating: 1,
            reviewerName: "Shannon",
            reviewerPfp: "src/assets/CUBE.jpg",
            reviewDesc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin ac dui sed eleifend. Ut lacinia ut tortor eget lacinia. In hendrerit eros urna, vitae luctus eros ultrices at. Curabitur ultricies velit est, et laoreet metus vehicula quis. Sed faucibus vel tortor ac ullamcorper. Ut lacinia ipsum dui, et vulputate leo fringilla et. Suspendisse ultricies tincidunt felis luctus sodales. Proin auctor velit eget lobortis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ut ex nibh. Donec eleifend ac nulla id commodo. Pellentesque congue vehicula volutpat. Vestibulum placerat laoreet enim sit amet dictum. Nullam vitae sapien condimentum, interdum risus vel, gravida ante. In rutrum leo metus, sit amet gravida sem ullamcorper ut. Donec tortor ligula, condimentum quis ante id, rhoncus dictum felis. Nunc urna eros, fringilla in aliquet eu, efficitur nec neque. Nam ac commodo metus. Vestibulum egestas eu ex ac aliquam. Nam quis metus nec ante hendrerit pellentesque nec vitae sapien. Nunc condimentum, leo non convallis pellentesque, dui lorem egestas diam, et dictum tellus ligula sed nisl. Quisque consectetur mauris non congue elementum.",
            reviewDate: new Date("January 5, 26")
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
                <p>{formattedDate}</p>
                </section>
                <section className="review__desc">
                    <p>{review.reviewDesc}</p>
                </section>
        </section>
    )
}

export default Reviews