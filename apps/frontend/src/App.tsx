import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { Layout } from "./components/common/layout/layout";
import { Landing } from "./components/pages/landing/landing";


import { PopularGames } from "./components/popular_games/PopularGames";


import { UserProfilePage } from "./components/pages/UserProfilePage";
import type { UserProfileType, Game } from "./components/common/user-profile/profileData";
import { testProfile, testGames } from "./components/common/user-profile/profileData";

import { ReviewsPage } from "./components/pages/ReviewsPage";
import { useReviews } from "./hooks/useReviews";

import { SearchResult } from "./components/pages/search-results";

import LoginOptions from "./components/pages/users/login-options-page";
import LoginPage from "./components/pages/users/login-page";
import CreateUserPage from "./components/pages/users/create-user-page";

function App() {

  const [profile, setProfile] = useState<UserProfileType>(testProfile);
  const [games, setGames] = useState<Game[]>(testGames);

  const [newGameTitle, setNewGameTitle] = useState("");

  const { reviews, createReview } = useReviews()
  

  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />}/>
        <Route path="PopularGames" element={<PopularGames />}/>
  
        <Route 
          path="Reviews" 
          element={<ReviewsPage reviews={reviews} createReview={createReview}/>}/>
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
          <Route path="/login-options" element={<LoginOptions />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          {// new path to handle searching for games
          }<Route path="games/search" element={<SearchResult/>}/>
      </Route>
    </Routes>
  )
}

export default App