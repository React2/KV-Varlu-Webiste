import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AllRoutes
