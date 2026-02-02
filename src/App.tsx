import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { Layout } from "./components/common/layout/layout";
import FriendsList from "./components/friends_list/friends_list";
import { PopularGames } from "./components/popular_games/PopularGames";
import Reviews from './components/reviews/Reviews'


function App() {
  const [status, updateStatus] = useState<string>("");
  
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
      </Route>
    </Routes>
  )
}

export default App
