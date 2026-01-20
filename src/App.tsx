import './App.css'

import { Footer } from './components/common/Footer'

import "./components/reviews/Reviews"
import Reviews from './components/reviews/Reviews'

import "./components/friends_list/friends_list"
import FriendsList from './components/friends_list/friends_list'

import { PopularGames } from './components/popular_games/PopularGames'
  
function App() {
  return (
    <>
      <PopularGames />
      <FriendsList />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
