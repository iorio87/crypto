import React from "react";
import { Route, Routes } from "react-router-dom";
import Coins from "./components/Coins";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {  

  return (
    
    <div className="bg-black text-white w-100 h-100">
     <Navbar/>     
       <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/favorites' element={<Favorites />} />
       
      </Routes>
   
    </div>
    
  )
}

export default App
