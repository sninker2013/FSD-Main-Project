import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { Layout } from "./components/common/layout/layout";
import { Landing } from "./components/pages/landing/landing";

import FriendsList from "./components/friends/friends_list/friends_list";
import { PopularGames } from "./components/popular_games/PopularGames";


import { UserProfilePage } from "./components/pages/UserProfilePage";
import type { UserProfileType, Game } from "./components/common/user-profile/profileData";
import { testProfile, testGames } from "./components/common/user-profile/profileData";

import { ReviewsPage } from "./components/pages/ReviewsPage";
import type { Review } from "./types/reviews";
import { testReviews } from "./components/common/reviews/reviewData";
import { SearchResult } from "./components/pages/search-results";



function App() {
  const [status, updateStatus] = useState<string>("");

  const [profile, setProfile] = useState<UserProfileType>(testProfile);
  const [games, setGames] = useState<Game[]>(testGames);

  const [newGameTitle, setNewGameTitle] = useState("");
  
  const [reviews, updateReviews] = useState<Review[]>(testReviews)

  
  return (
    <Routes>
      <Route path="/" element={<Layout 
        status={status}
        updateStatus={updateStatus}
        />}>
        <Route index element={<Landing />}/>
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
          {// new path to handle searching for games
          }<Route path="games/search" element={<SearchResult/>}/>
      </Route>
    </Routes>
  )
}

export default App