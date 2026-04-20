import { useState } from "react"
import "./ReviewForm.css"
import { validateForm } from "../../../services/reviewService";

type ReviewFormProps = {
    onSubmit: (
        starRating: 1|2|3|4|5,
        reviewDesc: string
    ) => Promise<void>;
};

export function ReviewForm ({ onSubmit }: ReviewFormProps) {
    const [starRating, setStarRating] = useState<1|2|3|4|5>();
    const [reviewDesc, setReviewDesc] = useState<string>("")
    const [error, setError] = useState<string>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { valid, error } = await validateForm(starRating, reviewDesc)
        if (valid && starRating) {
            setError("")
            onSubmit(starRating, reviewDesc)
        } else {
            setError(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <p>Rating:</p>
            <div className="rate">
                <input type="radio" id="star5"name="rating" value={5}
                onChange={(e) => setStarRating(Number(e.target.value) as 1|2|3|4|5)}/>
                <label htmlFor="star5">5 stars</label>

                <input type="radio" id="star4"name="rating" value={4}
                onChange={(e) => setStarRating(Number(e.target.value) as 1|2|3|4|5)}/>
                <label htmlFor="star4">4 stars</label>

                <input type="radio" id="star3"name="rating" value={3}
                onChange={(e) => setStarRating(Number(e.target.value) as 1|2|3|4|5)}/>
                <label htmlFor="star3">3 stars</label>

                <input type="radio" id="star2"name="rating" value={2}
                onChange={(e) => setStarRating(Number(e.target.value) as 1|2|3|4|5)}/>
                <label htmlFor="star2">2 stars</label>

                <input type="radio" id="star1"name="rating" value={1}
                onChange={(e) => setStarRating(Number(e.target.value) as 1|2|3|4|5)}/>
                <label htmlFor="star1">1 stars</label>
            </div>

            <label htmlFor="description" id="desc-label">Review: </label>
            <textarea name="description" id="description" value={reviewDesc} placeholder="Enter your review!"
            onChange={(e) => setReviewDesc(e.target.value)}/>
            <input type="submit" id="submit-button" value={"Submit Review"}/>
            {error && <p style={{ color: "red"}}>{error}</p>}
        </form>
    )
}