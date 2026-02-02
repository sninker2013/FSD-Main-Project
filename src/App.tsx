import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { Layout } from "./components/common/layout/layout";
import AllFriends from './components/pages/friends/friends-page';
import FriendsList from "./components/friends/friends_list/friends_list";
import { PopularGames } from "./components/popular_games/PopularGames";
import { ReviewsPage } from "./components/pages/ReviewsPage";
import Reviews from "./components/common/reviews/reviews-list/Reviews";

import type { Review } from "./types/reviews";
import { testReviews } from "./components/common/reviews/reviewData";


function App() {
  const [status, updateStatus] = useState<string>("");
  const [reviews, updateReviews] = useState<Review[]>(testReviews)
  
  return (
    <Routes>
      <Route path="/" element={<Layout 
        status={status}
        updateStatus={updateStatus}
        />}>
        <Route index element={
          <>
          <PopularGames />
          <AllFriends />
          <Reviews reviews={reviews}/>
          </>
        }/>
        <Route path="PopularGames" element={<PopularGames />}/>
        <Route path="Friends" element={<FriendsList />}/>
        <Route 
          path="Reviews" 
          element={<ReviewsPage 
            reviews={reviews}
            updateReviews={updateReviews}
          />}/>
      </Route>
    </Routes>
  )
}

export default App