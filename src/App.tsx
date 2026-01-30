import { Routes, Route } from "react-router-dom";

import './App.css'

import { Layout } from "./components/common/layout/layout";
import Reviews from './components/reviews/Reviews'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="popularGames" element={<PopularGames />}/>
        <Route path="friends" element={<FriendsList />}/>
        <Route path="reviews" element={<Reviews />}/>
      </Route>
    </Routes>
  )
}

export default App
