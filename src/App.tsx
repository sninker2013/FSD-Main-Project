import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { Layout } from "./components/common/layout/layout";
import Reviews from './components/reviews/Reviews'


function App() {
  return (
    const [status, updateStatus] = useState<String>("");
  
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Reviews" element={<Reviews />} />
      </Route>
    </Routes>
  )
}

export default App
