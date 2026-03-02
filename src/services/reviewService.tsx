import * as ReviewRepo from "../apis/reviews/reviewRepo"


export async function getAllReviews() {
    const reviews = await ReviewRepo.getAllReviews();
    return reviews;
}

export async function createReview(starRating: 1|2|3|4|5, reviewDesc: string) {
    const review = await ReviewRepo.createReview(starRating, reviewDesc);
    return review;
}

export async function validateForm(starRating: 1|2|3|4|5|undefined, reviewDesc: string) {
    let error: string = "";
    let valid = false;
    if(!starRating) {
        error = "Please select a star rating";
    } else if (reviewDesc.trim().length === 0){
        error = "Please enter a review";
    } else {
        valid = true;
    }
    return{valid, error}
}