import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import './App.css'

import { Layout } from "./components/common/layout/layout";

import "./components/reviews/Reviews"
import Reviews from './components/reviews/Reviews'

import "./components/friends_list/friends_list"
import FriendsList from './components/friends_list/friends_list'

import { PopularGames } from './components/popular_games/PopularGames'
  
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  )
}

export default App
