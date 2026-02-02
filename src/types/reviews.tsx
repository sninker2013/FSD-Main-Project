export type Review = {
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