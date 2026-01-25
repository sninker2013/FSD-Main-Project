import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import './App.css'

import { Header } from './components/common/layout/header/Header'
import { Footer } from './components/common/layout/footer/Footer'

import "./components/reviews/Reviews"
import Reviews from './components/reviews/Reviews'

import "./components/friends_list/friends_list"
import FriendsList from './components/friends_list/friends_list'

import { PopularGames } from './components/popular_games/PopularGames'
  
function App() {
  return (
    <Routes>
      <Header />
      <PopularGames />
      <FriendsList />
      <Reviews />
      <Footer />
    </Routes>
  )
}

export default App
