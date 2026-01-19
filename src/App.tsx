import './App.css'
import "./components/friends_list/friends_list"
import FriendsList from './components/friends_list/friends_list'
import { PopularGames } from './components/popular_games/PopularGames'
  
function App() {
  return (
    <>
      <PopularGames />
      <FriendsList />
    </>
  )
}

export default App
