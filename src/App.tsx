import { Routes, Route } from "react-router-dom";

import './App.css'

import { Layout } from "./components/common/layout/layout";
import Reviews from './components/reviews/Reviews'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="PopularGames" element={<PopularGames />}/>
        <Route path="Friends" element={<FriendsList />}/>
        <Route path="Reviews" element={<Reviews />}/>
      </Route>
    </Routes>
  )
}

export default App
