import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { Layout } from "./components/common/layout/layout";
import FriendsList from "./components/friends_list/friends_list";
import { PopularGames } from "./components/popular_games/PopularGames";
import Reviews from './components/reviews/Reviews'
import { UserProfilePage } from "./components/pages/UserProfilePage";

import type { UserProfileType, Game } from "./components/common/user-profile/profileData";
import { testProfile, testGames } from "./components/common/user-profile/profileData";


function App() {
  const [status, updateStatus] = useState<string>("");
  const [profile, setProfile] = useState<UserProfileType>(testProfile);
  const [games, setGames] = useState<Game[]>(testGames);
  const [newGameTitle, setNewGameTitle] = useState("");
  
  return (
    <Routes>
      <Route path="/" element={<Layout 
        status={status}
        updateStatus={updateStatus}
        />}>
        <Route index element={
          <>
          <PopularGames />
          <FriendsList />
          <Reviews />
          </>
        }/>
        <Route path="PopularGames" element={<PopularGames />}/>
        <Route path="Friends" element={<FriendsList />}/>
        <Route path="Reviews" element={<Reviews />}/>
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
