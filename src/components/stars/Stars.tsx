import "./stars.css"
import type { ReviewElement } from "../reviews/Reviews"


type Stars = {
    id: number;
    value: boolean;
}

function Stars(review: ReviewElement) {
    const starsItems: React.JSX.Element[] = []
    let stars: Stars[] = [
        {id: 0, value: false},
        {id: 1, value: false},
        {id: 2, value: false},
        {id: 3, value: false},
        {id: 4, value: false},
    ]

    for (let i = 0; i < review.starRating; i++) {
        stars[i].value = true
    }

    stars.forEach((star) => {
        starsItems.push(<ListStarItem
            star={star.value}
            key={star.id}
        />)
    })
    return (
        <ul>
            {starsItems}
        </ul>
    )
}

function ListStarItem({star}: {star: boolean}) {
    let starSVG: string
    if (star == true) {
        starSVG = "src/assets/star.svg"
    } else {
        starSVG = "src/assets/emptyStar.svg"
    }
    return(
        <img src={starSVG} alt="star SVG" style={{width: "18px", height: "18px"}}/>
    )
}
export default Stars