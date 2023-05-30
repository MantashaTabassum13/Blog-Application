import React, { useEffect, useState } from "react";
// import Create from "./Components/Create";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import AddBlogs from "./Components/AddBlogs";
import Home from "./Components/Home";
import AllBlogs from "./Components/AllBlogs";
import Update from "./Components/Update";
import BlogPage from "./Components/BlogPage";

// import AllBlogs from "./Components/AllBlogs";


function App() {
  
 
return (
  <>
 
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddBlogs/>}></Route>
        <Route path="/ab" element={<AllBlogs/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/blog" element={<BlogPage/>}></Route>
      </Routes>
    </div>
  </>
);
}

export default App;
