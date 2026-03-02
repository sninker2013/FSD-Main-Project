import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { Layout } from "./components/common/layout/layout";
import AllFriends from './components/pages/friends/friends-page';
import FriendsList from "./components/friends/friends_list/friends_list";
import { PopularGames } from "./components/popular_games/PopularGames";


import { UserProfilePage } from "./components/pages/UserProfilePage";
import type { UserProfileType, Game } from "./components/common/user-profile/profileData";
import { testProfile, testGames } from "./components/common/user-profile/profileData";

import { ReviewsPage } from "./components/pages/ReviewsPage";
import Reviews from "./components/reviews/reviews-list/Reviews";
import type { Review } from "./types/reviews";
import * as reviewRepo from "./apis/reviews/reviewRepo"



function App() {
  const [status, updateStatus] = useState<string>("");

  const [profile, setProfile] = useState<UserProfileType>(testProfile);
  const [games, setGames] = useState<Game[]>(testGames);

  const [newGameTitle, setNewGameTitle] = useState("");
  
  const [reviews, updateReviews] = useState<Review[]>(reviewRepo.getAllReviews)

  
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
        <Route 
          path="Profile" 
          element={<UserProfilePage 
            profile={profile}
            setProfile={setProfile}
            games={games}
            updateGames={setGames}
            newGameTitle={newGameTitle}
            setNewGameTitle={setNewGameTitle}
          />}/>
      </Route>
    </Routes>
  )
}

export default App